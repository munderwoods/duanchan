import Vue from 'vue'
import UserService from '@/services/UserService'

const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO'
const LOGOUT = 'LOGOUT'

const state = {
  user: null
}

const getters = {
  user: state => state.user
}

const actions = {
  async getUserInfo ({ commit, dispatch }) {
    const response = await UserService.getUser()
    commit('RECEIVE_USER_INFO', response.data.data)
  },

  logout ({ commit, dispatch }) {
    commit('LOGOUT')
  }
}

const mutations = {
  [RECEIVE_USER_INFO] (state, userInfo) {
    Vue.set(state, 'user', userInfo)
  },
  [LOGOUT] (state) {
    Vue.set(state, 'user', null)
  }
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations
}
