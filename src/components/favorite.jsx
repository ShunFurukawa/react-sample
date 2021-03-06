import React from 'react'

class Favorite extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render(){
    return(
      <div>
        <span>{this.state.count}</span>
        <button onClick={this.handleClick.bind(this)}>+</button>
      </div>
    )
  }
}

export default Favorite
