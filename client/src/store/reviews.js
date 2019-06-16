import Vue from 'vue'
import ReviewService from '@/services/ReviewService'

const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'

const state = {
}

const getters = {
}

const actions = {
  async postReview ({ commit, dispatch }, data) {
    await ReviewService.postReview(data)
    dispatch('getMovies', null, { root: true })
  },

  async deleteReview ({ commit, dispatch }, id) {
    await ReviewService.deleteReview(id)
    dispatch('getMovies', null, { root: true })
  },

  async updateReview ({ commit, dispatch }, data) {
    await ReviewService.updateReview(data)
    dispatch('getMovies', null, { root: true })
  }
}

const mutations = {
  [RECEIVE_REVIEWS] (state, reviews) {
    Vue.set(state, 'reviews', reviews)
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
