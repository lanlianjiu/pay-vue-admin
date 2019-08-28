import axios from 'axios'
import { Loading, Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
// create an axios instance
const serivce = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})
axios.defaults.withCredentials = true
/* 请求合并只出现一次loading*/
let needLoadingRequestCount = 0

function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    loading('start')/* loading加载*/
  }
  needLoadingRequestCount++
}

function hideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    setTimeout(tryCloseLoading, 300)/* 300ms 间隔内的 loading 合并为一次*/
  }
}

const tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    loading('end')/* loading加载*/
  }
}

/* loading加载*/
let $loadingMap
function loading(type) {
  if (type === 'start') {
    $loadingMap = Loading.service({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  } else if (type === 'end') {
    $loadingMap.close()
  }
}

// request interceptor
serivce.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()// 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    }

    if (config.optionConfig.showloading) {
      showFullScreenLoading()
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response interceptor
serivce.interceptors.response.use(
  response => {
    /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
  */

    const res = response.data

    if (response.config.optionConfig.showloading) {
      hideFullScreenLoading()
    }

    if (res.status !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', { // 请自行在引入 MessageBox
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('login_FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return response.data
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default serivce
