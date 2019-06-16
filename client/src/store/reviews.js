import Vue from 'vue'
import ReviewService from '@/services/ReviewService'

const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'

const state = {
  reviews: null
}

const getters = {
  reviews: state => state.reviews
}

const actions = {
  async getReviews ({ commit, dispatch }) {
    const response = await ReviewService.getReviews()
    commit('RECEIVE_REVIEWS', response.data.data)
  },

  async postReview ({ commit, dispatch }, data) {
    const response = await ReviewService.postReview(data)
    commit('RECEIVE_REVIEWS', response.data.data)
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
