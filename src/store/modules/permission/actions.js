
// Action 通常是异步的
import { getMeuns } from '@/router'

const actions = {

  async permission_GenerateRoutes({ commit }, data) {
    const asyncRoutes = await getMeuns()
    return new Promise(resolve => {
      const accessedRoutes = asyncRoutes
      commit('PERMISSION_SET_ROUTES', accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}
export default actions
