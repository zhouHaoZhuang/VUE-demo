import axios from 'axios'
// 发起一个 GET 请求

// const axios = require('axios');

// // 向给定ID的用户发起请求
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // 处理成功情况
//     console.log(response);
//   })
//   .catch(function (error) {
//     // 处理错误情况
//     console.log(error);
//   })
//   .then(function () {
//     // 总是会执行
//   });

// // 上述请求也可以按以下方式完成（可选）
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // 总是会执行
//   });

// // 支持async/await用法
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }
// 发起一个post请求
// axios.post('/user', {
//   firstName: 'Fred',
//   lastName: 'Flintstone'
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });
// 发起多个并发请求

// function getUserAccount() {
//   return axios.get('/user/12345');
// }

// function getUserPermissions() {
//   return axios.get('/user/12345/permissions');
// }

// Promise.all([getUserAccount(), getUserPermissions()])
//   .then(function (results) {
//     const acct = results[0];
//     const perm = results[1];
//   });

// 可以向 axios 传递相关配置来创建请求
// axios(config)
// 发起一个post请求
// axios({
//   method: 'post',
//   url: '/user/12345',
//   data: {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   }
// });
// axios(url[, config])
// // 发起一个 GET 请求 (默认请求方式)
// axios('/user/12345');

// 您可以使用自定义配置新建一个实例。
// axios.create([config])
// const instance = axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });
let baseURL = 'http://' + window.location.host
let request = axios.create({
    baseURL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json', 
    token: '123456789' 
  } //自定义请求头
})

request.interceptors.request.use(
    // 发送请求前做些什么
    (config) => {
        console.log('request', config)
        config.headers.token = '12345'
        config.headers.domain = "zidingyi";
        config.headers.zdy = encodeURI("自定义77");   //注意，此处需要encodeURI编码，否则会报错 因为请求头不支持直接使用中文
        // escape不编码字符有69个：*，+，-，.，/，@，_，0-9，a-z，A-Z
        // encodeURI不编码字符有82个：!，#，$，&，'，(，)，*，+，,，-，.，/，:，;，=，?，@，_，~，0-9，a-z，A-Z
        // encodeURIComponent不编码字符有71个：!， '，(，)，*，-，.，_，~，0-9，a-z，A-Z
        console.log(
            escape('自定义77'),
        )
        console.log(
            encodeURIComponent('自定义77'),
        )
        console.log(
            encodeURI('自定义77')
        )
        return config
    },
    (error) => {
        // 发送请求失败做些什么
        return Promise.reject(error)
    }
)
request.interceptors.response.use(
    // 请求成功做些什么
    // 1000 毫秒后返回结果 的状态码为200的话就返回数据，否则返回错误信息
    (response) => {
        return response
    },
    // 请求失败做些什么  超出1000毫秒就返回错误信息
    (error) => {
        return Promise.reject(error)
    }
)

// 如果你稍后需要移除拦截器，可以这样：

// const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
// axios.interceptors.request.eject(myInterceptor);
export default request
