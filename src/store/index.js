import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './states'

import login from './modules/login'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import roles from './modules/roles'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    errorLog,
    permission,
    tagsView,
    roles,
    login
  },
  getters,
  actions,
  mutations,
  state
})

export default store
