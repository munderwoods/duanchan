import axios from 'axios'

const options = {
  baseURL: 'http://localhost:8081/',
  headers: { Authorization: '' }
}

export default {
  getServices () {
    options.headers.Authorization = 'Bearer ' + localStorage.getItem('user')
    options.method = 'GET'
    options.url = '/services'
    return axios(options)
  }
}
