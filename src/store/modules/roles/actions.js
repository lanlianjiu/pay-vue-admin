import { request, getRequestUrl } from '@/http/request'
import { api } from './api.js'
// Action 通常是异步的
const actions = {
  // 获取角色列表
  roles_getList({ commit, state, rootState }, params) {
    const url = getRequestUrl({
      url: api.roles_getList
    })
    return request(url, params, { method: 'get' })
      .then((rep) => {
        return rep
      }).catch((err) => {
        return err
      })
  }

}
export default actions
