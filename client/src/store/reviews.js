import Vue from 'vue'
import ReviewService from '@/services/ReviewService'

const RECEIVE_LIBRARY = 'RECEIVE_LIBRARY'
const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'

const state = {
  library: null,
  reviews: null
}

const getters = {
  library: state => state.library,
  reviews: state => state.reviews
}

const actions = {
  async getLibrary ({ commit, dispatch }) {
    const response = await ReviewService.getLibrary()
    commit('RECEIVE_LIBRARY', response.data.data)
  },

  async getReviews ({ commit, dispatch }, data) {
    const response = await ReviewService.getReviews(data)
    commit('RECEIVE_REVIEWS', response.data.data)
  },

  async postReview ({ commit, dispatch }, data) {
    const response = await ReviewService.postReview(data)
    return response.data
  },

  async deleteReview ({ commit, dispatch }, id) {
    await ReviewService.deleteReview(id)
  },

  async updateReview ({ commit, dispatch }, data) {
    const response = await ReviewService.updateReview(data)
    return response.data
  }
}

const mutations = {
  [RECEIVE_LIBRARY] (state, library) {
    Vue.set(state, 'library', library)
  },

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
