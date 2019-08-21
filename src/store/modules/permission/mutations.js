// 重要的原则:mutation 必须是同步函数
import { constantRoutes } from '@/router'
const mutations = {
  PERMISSION_SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  }
}
export default mutations
