const state = {
  isCollapse: true
}

const getters = {}

const mutations = {
  COLLAPSE (state) {
    state.isCollapse = !state.isCollapse
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
