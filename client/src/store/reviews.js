import Vue from 'vue'
import ReviewService from '@/services/ReviewService'

const RECEIVE_LIBRARY = 'RECEIVE_LIBRARY'

const state = {
  library: null
}

const getters = {
  library: state => state.library
}

const actions = {
  async getLibrary ({ commit, dispatch }) {
    const response = await ReviewService.getLibrary()
    commit('RECEIVE_LIBRARY', response.data.data)
  },

  async postReview ({ commit, dispatch }, data) {
    const response = await ReviewService.postReview(data)
    dispatch('getMovies', null, { root: true })
    return response.data
  },

  async deleteReview ({ commit, dispatch }, id) {
    await ReviewService.deleteReview(id)
    dispatch('getMovies', null, { root: true })
  },

  async updateReview ({ commit, dispatch }, data) {
    const response = await ReviewService.updateReview(data)
    dispatch('getMovies', null, { root: true })
    dispatch('getLibrary')
    return response.data
  }
}

const mutations = {
  [RECEIVE_LIBRARY] (state, library) {
    Vue.set(state, 'library', library)
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
