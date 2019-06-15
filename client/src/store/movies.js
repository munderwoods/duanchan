import Vue from 'vue'
import MovieService from '@/services/MovieService'

const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

const state = {
  movies: null
}

const getters = {
  movies: state => state.movies
}

const actions = {
  async getMovies ({ commit, dispatch }) {
    const response = await MovieService.getMovies()
    commit('RECEIVE_MOVIES', response.data.data)
  },

  logout ({ commit, dispatch }) {
    commit('LOGOUT')
  }
}

const mutations = {
  [RECEIVE_MOVIES] (state, movies) {
    Vue.set(state, 'movies', movies)
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
