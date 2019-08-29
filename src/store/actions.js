import { request, getRequestUrl } from '@/http/request'
import { api } from './api.js'
// Action 通常是异步的
const actions = {

  toggleSideBar({ commit }) {
    commit('SYSTEM_TOGGLE_SIDEBAR')
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('SYSTEM_CLOSE_SIDEBAR', withoutAnimation)
  },
  toggleDevice({ commit }, device) {
    commit('SYSTEM_TOGGLE_DEVICE', device)
  },
  setLanguage({ commit }, language) {
    commit('SYSTEM_SET_LANGUAGE', language)
  },
  setSize({ commit }, size) {
    commit('SYSTEM_SET_SIZE', size)
  },

  // 获取侧边栏菜单
  system_admin_menus({ commit }, params) {
    const url = getRequestUrl({
      url: api.system_admin_menus
    })
    return request(url, params, { method: 'get' }, { showloading: true })
      .then((rep) => {
        return rep
      })
  }
}
export default actions
