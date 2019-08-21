/*
  store的所有状态
*/
const getters = {
  // 系统设置
  sidebar: state => state.sidebar,
  language: state => state.language,
  size: state => state.size,
  device: state => state.device,

  // 面包屑导航
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,

  // 用户信息
  token: state => state.login.token,
  avatar: state => state.login.avatar,
  name: state => state.login.name,
  introduction: state => state.login.introduction,
  status: state => state.login.status,
  roles: state => state.login.roles,
  setting: state => state.login.setting,

  // 权限路由
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,

  // 错误日志
  errorLogs: state => state.errorLog.logs
}
export default getters
