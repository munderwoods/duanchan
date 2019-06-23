import axios from 'axios'

const options = {
  baseURL: 'http://localhost:8081/',
  headers: { Authorization: '' }
}

export default {
  getLibrary () {
    options.headers.Authorization = 'Bearer ' + localStorage.getItem('user')
    options.method = 'GET'
    options.url = '/library'
    return axios(options)
  },

  postReview (data) {
    options.headers.Authorization = 'Bearer ' + localStorage.getItem('user')
    options.method = 'POST'
    options.url = '/reviews'
    options.data = data
    return axios(options)
  },

  deleteReview (data) {
    data.score = null
    data.review = null
    options.headers.Authorization = 'Bearer ' + localStorage.getItem('user')
    options.method = 'PUT'
    options.url = '/reviews'
    options.data = data
    return axios(options)
  },

  updateReview (data) {
    options.headers.Authorization = 'Bearer ' + localStorage.getItem('user')
    options.method = 'PUT'
    options.url = '/reviews'
    options.data = data
    return axios(options)
  }
}
