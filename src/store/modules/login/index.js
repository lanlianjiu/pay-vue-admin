import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import { getToken } from '@/utils/auth'
const state = {
  user: '',
  status: '',
  code: '',
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  setting: {
    articlePlatform: []
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
