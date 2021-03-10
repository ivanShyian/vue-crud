export default {
  namespaced: true,
  state() {
    return {
      alert: null
    }
  },
  getters: {
    isAlert(state) {
      return state.alert
    }
  },
  mutations: {
    updateAlert(state, payload) {
      state.alert = payload
    },
    clearAlert(state) {
      state.alert = null
    }
  },
  actions: {
    setAlert({ commit }, payload) {
      commit('updateAlert', payload)
      setTimeout(() => {
        commit('clearAlert')
      }, 3500)
    }
  }
}
