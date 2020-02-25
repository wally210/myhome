import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import App from './App'
import axios from 'axios'

// 把axios对象绑定到了React组件的原型上，将来所有的react组件都能访问到axios对象
React.Component.prototype.axios = axios

// 给axios对象配置默认全局路径
// axios.defaults.baseURL = 'http://localhost:9999/'
axios.defaults.baseURL = 'http://47.96.21.88:8086'

// 给axios配置一个响应拦截器 直接把data中的数据返回
axios.interceptors.response.use(
  function(response){
    return response.data
  },function(err) {
    return err
  }
)

ReactDOM.render(<App />, document.getElementById('root'))