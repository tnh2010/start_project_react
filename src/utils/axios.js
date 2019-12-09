import axios from 'axios'
import { isEmpty, assign } from 'lodash'

import { MIX_BASE_API_URL } from './constants'

const ApiService = {
  init() {
    axios.defaults.baseURL = MIX_BASE_API_URL
  },

  async setHeader(userToken = null) {
    axios.defaults.headers.common.Authorization = `Bearer ${userToken}`
  },

  get(resource, slug = '', config = {}) {
    const urlRes = isEmpty(slug) ? `${resource}` : `${resource}/${slug}`
    return axios.get(urlRes, assign(config, {
      headers: {
        'Content-Type': 'application/json'
      }
    }))
  },

  post(resource, params) {
    return axios
      .post(`${resource}`, params, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
  },

  update(resource, slug = '', params) {
    return axios
      .put(`${resource}/${slug}`, params)
  },

  put(resource, params) {
    return axios
      .put(`${resource}`, params)
  },


  patch(resource, params) {
    return axios
      .patch(`${resource}`, params)
  },

  delete(resource, params, options = {}) {
    return axios.delete(resource, { ...params, _method: 'DELETE' }, options)
  },
}

export default ApiService
