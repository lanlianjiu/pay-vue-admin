
// Action 通常是异步的

const actions = {
  tagsView_addView({ dispatch }, view) {
    dispatch('tagsView_addVisitedView', view)
    dispatch('tagsView_addVisitedView', view)
  },

  tagsView_addVisitedView({ commit }, view) {
    commit('TAGSVIEW_ADD_VISITED_VIEW', view)
  },

  tagsView_addCachedView({ commit }, view) {
    commit('TAGSVIEW_ADD_CACHED_VIEW', view)
  },

  tagsView_delView({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('tagsView_delVisitedView', view)
      dispatch('tagsView_delCachedView', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },

  tagsView_delVisitedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit('TAGSVIEW_DEL_VISITED_VIEW', view)
      resolve([...state.visitedViews])
    })
  },

  tagsView_delCachedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit('TAGSVIEW_DEL_CACHED_VIEW', view)
      resolve([...state.cachedViews])
    })
  },

  tagsView_delOthersViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('tagsView_delOthersVisitedViews', view)
      dispatch('tagsView_delOthersCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },

  tagsView_delOthersVisitedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('TAGSVIEW_DEL_OTHERS_VISITED_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },

  tagsView_delOthersCachedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('TAGSVIEW_DEL_OTHERS_CACHED_VIEWS', view)
      resolve([...state.cachedViews])
    })
  },

  tagsView_delAllViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('tagsView_delAllVisitedViews', view)
      dispatch('tagsView_delAllCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },

  tagsView_delAllVisitedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('TAGSVIEW_DEL_ALL_VISITED_VIEWS')
      resolve([...state.visitedViews])
    })
  },

  tagsView_delAllCachedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('TAGSVIEW_DEL_ALL_CACHED_VIEWS')
      resolve([...state.cachedViews])
    })
  },

  tagsView_updateVisitedView({ commit }, view) {
    commit('TAGSVIEW_UPDATE_VISITED_VIEW', view)
  }

}
export default actions
