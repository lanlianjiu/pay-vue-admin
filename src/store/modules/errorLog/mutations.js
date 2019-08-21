// 重要的原则:mutation 必须是同步函数
const mutations = {
  ERRORLOG_ADD_ERROR_LOG: (state, log) => {
    state.logs.push(log)
  }
}
export default mutations
