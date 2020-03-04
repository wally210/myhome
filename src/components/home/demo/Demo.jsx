import React from 'react'
import './style.less'
import Tloader from 'react-touch-loader'
class Demo extends React.Component {
  constructor() {
    super()
    this.state = {
      hasMore: false,
      initializing: 1, // 进度条
      total: 0 // 总条数
    }
  }
  refresh = (resolve, reject) => {
    setTimeout(() => {
      this.setState({
        total: 10,
        hasMore: true
      })
      resolve()
    },1000)
  }
  loadMore = (resolve, reject) => {
    setTimeout(() => {
      let newTotal = this.state.total + 10
      this.setState({
        total: newTotal,
        hasMore: newTotal > 0 && newTotal < 50
      })
      resolve()
    }, 1000)
  }
  componentDidMount() {
    // 模拟后台加载数据
    setTimeout(() => {
      this.setState({
        total: 10,
        initializing: 2,
        hasMore: 1
      })
    }, 1000)
  }
  render() {
    let { hasMore, initializing, total } = this.state
    let data = []
    for (var i = 0; i < total; i++) {
      data.push(
        <li key={i}>
          <p>{i}</p>
        </li>
      )
    }
    return (
      <div className="view">
        <Tloader
          className="main"
          hasMore={hasMore}
          initializing={initializing}
          total={total}
          onRefresh={this.refresh}
          onLoadMore={this.loadMore}
        >
          <ul>{data}</ul>
        </Tloader>
      </div>
    )
  }
}
export default Demo