import Vue from 'vue'
import Vuex, { createLogger } from 'vuex'

const plugins = []
if (process.env.NODE_ENV === 'development') {
  plugins.push(createLogger())
}

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
      localStorage.setItem('people', JSON.stringify(state.people))
    },
    changePerson(state, payload) {
      state.people = { ...state.people, [payload.id]: payload.updated }
      localStorage.setItem('people', JSON.stringify(state.people))
    }
  },
  plugins
})
