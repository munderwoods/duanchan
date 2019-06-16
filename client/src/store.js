import Vue from 'vue'
import Vuex from 'vuex'

import user from '@/store/user.js'
import movies from '@/store/movies.js'
import reviews from '@/store/reviews.js'

Vue.use(Vuex)

export default new Vuex.Store({

  getters: {
    moduleLoaded: (state, getters, rootState) => name => {
      return rootState[name].loaded
    }
  },

  modules: {
    user,
    movies,
    reviews
  },

  strict: false
})
