import axios from 'axios'

if (localStorage.getItem('user')) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('user')
}

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}
