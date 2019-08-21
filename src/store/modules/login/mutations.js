// 重要的原则:mutation 必须是同步函数
const mutations = {
  LOGIN_SET_CODE: (state, code) => {
    state.code = code
  },
  LOGIN_SET_TOKEN: (state, token) => {
    state.token = token
  },
  LOGIN_SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  LOGIN_SET_SETTING: (state, setting) => {
    state.setting = setting
  },
  LOGIN_SET_STATUS: (state, status) => {
    state.status = status
  },
  LOGIN_SET_NAME: (state, name) => {
    state.name = name
  },
  LOGIN_SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  LOGIN_SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}
export default mutations
