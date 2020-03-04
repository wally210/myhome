import React from 'react'
import './Home.css'
import { Grid } from 'semantic-ui-react'
import { NavLink, Switch, Route } from 'react-router-dom'
import Main from './home/Main'
import Info from './home/Info'
import Chat from './home/Chat'
import My from './home/My'
import Demo from './home/demo/Demo'
import '../assets/fonts/iconfont.css'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home_content">
          <Switch>
            <Route exact path="/home" component={Main}></Route>
            <Route path="/home/info" component={Info}></Route>
            <Route path="/home/chat" component={Demo}></Route>
            <Route path="/home/my" component={My}></Route>
          </Switch>
        </div>
        <div className="home_menu">
          <Grid>
            <Grid.Row columns={4}>
              <Grid.Column>
                {/* exact：表示精确匹配 */}
                <NavLink exact to="/home">
                  <i className="iconfont">&#xe64f;</i>
                  <p>首页</p>
                </NavLink>
              </Grid.Column>
              <Grid.Column>
                <NavLink to="/home/info">
                  <i className="iconfont">&#xe64b;</i>
                  <p>资讯</p>
                </NavLink>
              </Grid.Column>
              <Grid.Column>
                <NavLink to="/home/chat">
                  <i className="iconfont">&#xe665;</i>
                  <p>信息</p>
                </NavLink>
              </Grid.Column>
              <Grid.Column>
                <NavLink to="/home/my">
                  <i className="iconfont">&#xe659;</i>
                  <p>我的</p>
                </NavLink>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
export default Home