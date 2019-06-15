import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/user.js'
import movies from '@/store/movies.js'

Vue.use(Vuex)

export default new Vuex.Store({

  getters: {
    moduleLoaded: (state, getters, rootState) => name => {
      return rootState[name].loaded
    }
  },

  modules: {
    user,
    movies
  },

  strict: false
})
