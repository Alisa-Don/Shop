import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    showNavBar: true,
  },
  mutations: {
    SET_SHOWNAVBAR(state, bool) {
      state.showNavBar = bool
    },
  },
})

export default store
