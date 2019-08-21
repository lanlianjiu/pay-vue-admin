
// Action 通常是异步的
const actions = {
  errorLog_addErrorLog({ commit }, log) {
    commit('ERRORLOG_ADD_ERROR_LOG', log)
  }
}
export default actions
