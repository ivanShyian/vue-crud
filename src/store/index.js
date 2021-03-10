import Vue from 'vue'
import Vuex from 'vuex'
import alert from './modules/alert.module'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      people: JSON.parse(localStorage.getItem('people')) ?? {}
    }
  },
  getters: {
    people(state) {
      return Object.keys(state.people).length ? Object.keys(state.people).map(el => {
        return { id: el, ...state.people[el] }
      }) : false
    },
    onePerson: state => idx => {
      return state.people[idx]
    }
  },
  mutations: {
    addPerson(state, payload) {
      const id = Date.now().toString()
      state.people = { ...state.people, [id]: payload }
      localStorage.setItem('people', JSON.stringify(state.people))
    },
    deletePerson(state, id) {
      Vue.delete(state.people, id)
      if (!Object.keys(state.people).length) {
        return localStorage.removeItem('people')
      }
      localStorage.setItem('people', JSON.stringify(state.people))
    },
    changePerson(state, payload) {
      state.people = { ...state.people, [payload.id]: payload.updated }
      localStorage.setItem('people', JSON.stringify(state.people))
    }
  },
  actions: {
    deleteUser({ commit, dispatch }, id) {
      commit('deletePerson', id)
      dispatch('alert/setAlert', {
        type: 'warning',
        text: 'User was deleted successfully!'
      })
    },
    parseData({ commit, dispatch }, payload) {
      try {
        const res = payload.people.map(e => {
          return Object.keys(e).map(item => {
            commit('addPerson', e[item])
            return e[item]
          })
        })
        dispatch('alert/setAlert', {
          type: 'primary',
          text: `Successfully added ${res[0].length} person to application`
        }, { root: true })
      } catch (e) {
        dispatch('alert/setAlert', {
          type: 'primary',
          text: 'Something gone wrong'
        }, { root: true })
      }
    }
  },
  modules: {
    alert
  }
})
