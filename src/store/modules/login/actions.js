import { request, getRequestUrl } from '@/http/request'
import { api } from './api.js'
// Action 通常是异步的
const actions = {

  login_loginByUsername({ commit }, params) {
    const url = getRequestUrl({
      url: api.login_loginByUsername
    })
    return request(url, params, { method: 'post' })
      .then((rep) => {
        return rep
      }).catch((err) => {
        console.log(err)
      })
  },

  login_logout({ commit }, params) {
    const url = getRequestUrl({
      url: api.login_logout
    })
    return request(url, params, { method: 'post' })
      .then((rep) => {
        return rep
      }).catch((err) => {
        console.log(err)
      })
  },

  login_getUserInfo({ commit }, params) {
    const url = getRequestUrl({
      url: api.login_getUserInfo
    })
    return request(url, { token: params }, { method: 'get' })
      .then((rep) => {
        if (!rep.data.result) {
          return 'Verification failed, please login again.'
        }
        const data = rep.data.result

        if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          commit('SET_ROLES', data.roles)
        } else {
          return 'getInfo: roles must be a non-null array!'
        }

        commit('SET_NAME', data.name)
        commit('SET_AVATAR', data.avatar)
        commit('SET_INTRODUCTION', data.introduction)
        return rep
      }).catch((err) => {
        console.log(err)
      })
  }

}
export default actions
