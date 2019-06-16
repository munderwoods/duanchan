import axios from 'axios'

const options = {
  baseURL: 'http://localhost:8081/',
  headers: { Authorization: '' }
}

export default {
  getReviews () {
    options.headers.Authorization = 'Bearer ' + localStorage.getItem('user')
    options.method = 'GET'
    options.url = '/reviews'
    return axios(options)
  },
  postReview (data) {
    options.headers.Authorization = 'Bearer ' + localStorage.getItem('user')
    options.method = 'POST'
    options.url = '/reviews'
    options.data = data
    return axios(options)
  }
}
