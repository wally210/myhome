import React from 'react'
import {Form} from 'semantic-ui-react'
import './Login.css'
// 引入withRouter实现编程式导航
import {withRouter} from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      uname: '',
      pwd: ''
    }
  }
  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }
  login = async e => {
    e.preventDefault()
    let {history} = this.props
    let {uname, pwd} = this.state
    let res = await this.axios.post('users/login', {
      uname,
      pwd
    })
    console.log(res)
    let {meta, data} = res
    if(meta.status === 200) {
      //1. 把token给保存到浏览器本地
      localStorage.setItem('myToken', data.token)
      // 保存用户id，my组件用户信息需要数据
      localStorage.setItem('uid', data.uid)
      //2. 跳转到home组件
      history.push('/home')
    }else {
      console.log(meta.msg)
    }
  }  

  render() {
    return (
      <div  className="login_container">
        <div className="login_title">登陆</div>
        <div className="login_form">
          <Form action='' onSubmit={this.login}>
            <Form.Field >
              <Form.Input
                placeholder='请输入用户名'
                size='big'
                icon='user'
                iconPosition='left'
                name='uname'
                value={this.state.uname}
                onChange={this.handleChange}
               />
            </Form.Field>
            <Form.Field>
              <Form.Input
                placeholder='请输入密码' 
                size='big'
                icon='lock'
                iconPosition='left'
                name='pwd'
                value={this.state.pwd}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <Form.Button fluid positive size="big">
                登录
              </Form.Button>
            </Form.Field>
          </Form>
        </div>
      </div>
    )
  }
}
export default withRouter(Login)