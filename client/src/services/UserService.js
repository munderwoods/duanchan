import axios from 'axios'

const options = {
  baseURL: 'http://localhost:8081/',
  headers: { Authorization: '' }
}

export default {
  getUser () {
    options.headers.Authorization = 'Bearer ' + localStorage.getItem('user')
    options.method = 'GET'
    options.url = '/user'
    return axios(options)
  }
}
