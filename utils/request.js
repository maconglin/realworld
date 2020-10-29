/**
 * 基于axios封装的请求模块
 */

import axios from 'axios'

const request =  axios.create({
   baseURL:'https://conduit.productionready.io',
})

// request.interceptors.request.use(function (config) {
//    // Do something before request is sent
//   console.log(config.headers.Authorization)
//    return config;
//  }, function (error) {
//    // Do something with request error
//    return Promise.reject(error);
//  });


export default request