import { request, getRequestUrl } from '@/http/request'
import { api } from './api.js'
import { setToken, removeToken } from '@/utils/auth'
// Action 通常是异步的
const actions = {

  login_loginByUsername({ commit }, params) {
    const url = getRequestUrl({
      url: api.login_loginByUsername
    })
    return request(url, params, { method: 'post' })
      .then((rep) => {
        return rep
      })
  },

  // 获取用户信息
  login_getUserInfo({ commit }, params) {
    const url = getRequestUrl({
      url: api.login_getUserInfo
    })
    return request(url, { token: params }, { method: 'get' })
      .then((rep) => {
        if (!rep.result) {
          return 'Verification failed, please login again.'
        }
        const data = rep.result

        if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          commit('LOGIN_SET_ROLES', data.roles)
        } else {
          return 'getInfo: roles must be a non-null array!'
        }

        commit('LOGIN_SET_NAME', data.name)
        commit('LOGIN_SET_AVATAR', data.avatar)
        commit('LOGIN_SET_INTRODUCTION', data.introduction)
        return data
      })
  },

  // 第三方验证登录
  // LoginByThirdparty({ commit, state }, code) {
  //   return new Promise((resolve, reject) => {
  //     commit('SET_CODE', code)
  //     loginByThirdparty(state.status, state.email, state.code).then(response => {
  //       commit('SET_TOKEN', response.data.token)
  //       setToken(response.data.token)
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // 登出
  login_logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      const url = getRequestUrl({
        url: api.login_logout
      })
      return request(url, {}, { method: 'post' })
        .then((rep) => {
          commit('LOGIN_SET_TOKEN', '')
          commit('LOGIN_SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
    })
  },

  // 前端 登出
  login_FedLogOut({ commit }) {
    return new Promise(resolve => {
      commit('LOGIN_SET_TOKEN', '')
      removeToken()
      resolve()
    })
  },

  // 动态修改权限
  login_ChangeRoles({ commit, dispatch }, role) {
    return new Promise(resolve => {
      commit('LOGIN_SET_TOKEN', role)
      setToken(role)
      const url = getRequestUrl({
        url: api.login_getUserInfo
      })
      return request(url, { token: role }, { method: 'get' })
        .then((response) => {
          const data = response.result
          commit('LOGIN_SET_ROLES', data.roles)
          commit('LOGIN_SET_NAME', data.name)
          commit('LOGIN_SET_AVATAR', data.avatar)
          commit('LOGIN_SET_INTRODUCTION', data.introduction)
          dispatch('permission_GenerateRoutes', data) // 动态修改权限后 重绘侧边菜单
          resolve()
        })
    })
  }

}
export default actions
