const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device,
  visitedViews: (state) => state.tagsView.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,
  token: (state) => state.user.token,
  firstName: (state) => state.user.firstName,
  lastName: (state) => state.user.lastName,
  email: (state) => state.user.email,
  phoneNumber: (state) => state.user.phoneNumber,
  role: (state) => state.user.role,
  permission_routes: (state) => state.permission.routes,
  errorLogs: (state) => state.errorLog.logs,
}
export default getters
