import axios from 'axios'

export default {
  reqHeader(){
    return axios.get('/api/header')
  },
  reqSurprise_day(){
    return axios.get('/api/surprise_day')
  },
  reqCat_foods(){
    return axios.get('/api/cat_foods')
  },
}

