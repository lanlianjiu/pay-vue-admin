/* eslint-disable prefer-const */
/* eslint-disable no-unreachable */
/* eslint-disable no-case-declarations */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable no-undef */
import axios from '@/http/interceptors'
import { uppercase, paramJsonp } from '@/utils';
import jsonp from 'jsonp';

function getRequestUrl(params) {
  let bsUrl = ''
  if (params.baseUrl) {
    bsUrl = process.env[params.baseUrl]
  } else {
    bsUrl = process.env.BASE_API // api 的 base_url
  }
  return bsUrl + params.url
}

function request(url, params, option, optionConfig) {
  let defaultConfig = {
    showloading: false
  }
  let config = {}
  params = params || {}
  option = option || {}
  optionConfig = optionConfig ? Object.assign(defaultConfig, optionConfig) : defaultConfig
  
  option.method = uppercase(option.method)
  
  let extend = function(dst) {
    for (let i = 1, ii = arguments.length; i < ii; i++) {
      const obj = arguments[i]
      if (obj) {
        const keys = Object.keys(obj)
        for (let j = 0, jj = keys.length; j < jj; j++) {
          const key = keys[j]
          dst[key] = obj[key]
        }
      }
    }
    return dst
  };

  /**
   * @description:axios
   * @param {*} config
   * @param function resolve
   * @param function reject
  */
  const commonaxios = function(config, resolve, reject) {
    axios(config).then(rep => {
      resolve(rep)
    }, error => {
      reject(error)
    })
  }

  /**
   * @description:post
   * @param {*} params
   * @param {*}
  */
  const post = function(config) {
    return new Promise(function(resolve, reject) {
      extend(config, {
        method: 'post'
      }) 
      commonaxios(config, resolve, reject)
    })
  }

  /**
     * @description:PUT
     * @param {*} params
     * @param {*}
  */
  const put = function(config) {
    return new Promise(function(resolve, reject) {
      extend(config, {
        method: 'PUT'
      })
      commonaxios(config, resolve, reject)
    })
  }

  /**
     * @description:get
     * @param {*} params
     * @param {*}
     */
  const get = function(config) {
    return new Promise(function(resolve, reject) {
      extend(config, {
        method: 'GET'
      })
      commonaxios(config, resolve, reject)
    })
  }

  /**
     * @description:delete
     * @param {*} params
     * @param {*}
     */
  const Delete = function(config) {
    return new Promise(function(resolve, reject) {
      extend(config, {
        method: 'DELETE'
      })
      commonaxios(config, resolve, reject)
    })
  }

  /**
     * @description:jsonp
     * @param {*} params
     * @param {*}
  */
  const getJsonpData = function(url, data, option) {
    url += (url.indexOf('?') < 0 ? '?' : '&') + paramJsonp(data)
    return new Promise((resolve, reject) => {
      jsonp(url, option, (err, data) => {
        if (!err) {
          resolve(data)
        } else {
          reject(err)
        }
      })
    })
  }

  config = extend({
    method: 'JSONP'
  }, option)
  let reqData = {}
  
  switch (option.method) {
    case 'POST_FORMDATA':
      const fd = new FormData()
      for (const i in params) {
        if (params[i] instanceof Array) {
          for (let j = 0; j < params[i].length; j++) {
            for (const k in params[i][j]) {
              let key = ''
              let val = ''
              key = i + '[' + j + ']' + '.' + k
              val = params[i][j][k]
              fd.append(key, val)
            }
          }
        } else {
          fd.append(i, params[i])
        }
      }
      reqData = {
        url: url,
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        data: fd,
        optionConfig: optionConfig
      }
      config = extend(config, reqData)
      return post(config).then(res => {
        return res
      })
    case 'POST_FORM_URLENCODED':
      
      let str = ''
      for (const i in params) {
        str = str + i + '=' + params[i]
        str += '&'
      }
      str = str.slice(0, str.length - 1)
      reqData = {
        url: url,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        data: str,
        optionConfig: optionConfig
      }
      config = extend(config, reqData)
      return post(config).then(res => {
        return res
      })
      
    case 'POST_JSON':
    case 'POST':
      if (option.method === 'POST_JSON') {
        params = JSON.stringify(params)
      }
      reqData = {
        url: url,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        data: params,
        optionConfig: optionConfig
      }
      
      config = extend(config, reqData)
      return post(config).then(res => {
        return res
      })

    case 'PUT_FORDATA':
    case 'PUT':
      
      let headers = { 'Content-Type': 'application/json;charset=UTF-8' }
      if (option.method === 'PUT_FORDATA') {
        const formData = new FormData()
        Object.keys(params).forEach((key) => {
          formData.append(key, params[key])
        })
        headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
        params = formData
      }
      reqData = {
        url: url,
        headers: headers,
        data: params,
        optionConfig: optionConfig
      }
      config = extend(config, reqData)
      return put(config).then(res => {
        return res
      })

    case 'DELETE':
      reqData = {
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        params: params,
        optionConfig: optionConfig
      }
      config = extend(config, reqData)
      return Delete(config).then(res => {
        return res
      })

    case 'GET':
      document.cookie = "timeZone='8';path=/"
      reqData = {
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        params: params,
        optionConfig: optionConfig
      }
      
      config = extend(config, reqData)
     
      return get(config).then(res => {
        return res
      })
      
    case 'JSONP':
      return getJsonpData(url, params, null).then(res => {
        return res
      })
    default:
      console.error('请求方式有误，请检查您的请求方式')
      break;
  }
}

export {
  getRequestUrl, // 拼接url
  request // 请求
}
