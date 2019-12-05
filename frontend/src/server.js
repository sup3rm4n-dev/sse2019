import config from './config/config'
import axios from 'axios'

export const getAllCounters = () => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/',
      baseURL: config.apiBaseUrl,
      method: 'get',
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

export const getCounter = (name) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: `/${name}`,
      baseURL: config.apiBaseUrl,
      method: 'get',
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

export const addCounter = (name, value) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/',
      baseURL: config.apiBaseUrl,
      method: 'post',
      data: {
        user: name,
        value: value,
      },
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

export const setCounter = (name, value) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/',
      baseURL: config.apiBaseUrl,
      method: 'put',
      data: {
        user: name,
        value: value,
      },
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}

export const deleteCounter = (name) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url: '/',
      baseURL: config.apiBaseUrl,
      method: 'delete',
      data: {
        user: name,
      },
    }).then((response) => {
      resolve(response.data)
    }).catch((err) => {
      console.log(err)
      reject(err)
    })
  })
}
