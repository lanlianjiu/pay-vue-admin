// 重要的原则:mutation 必须是同步函数
import Cookies from 'js-cookie'
const mutations = {
  SYSTEM_TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  SYSTEM_CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  SYSTEM_TOGGLE_DEVICE: (state, device) => {
    state.device = device
  },
  SYSTEM_SET_LANGUAGE: (state, language) => {
    state.language = language
    Cookies.set('language', language)
  },
  SYSTEM_SET_SIZE: (state, size) => {
    state.size = size
    Cookies.set('size', size)
  }
}
export default mutations

