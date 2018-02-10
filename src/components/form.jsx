import React from 'react'

import Message from './message'

class Form extends React.Component {

  constructor() {
    super()
      this.state = {
        message: '',
        data: [],
      }

    this.changeText = this.changeText.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.setState({data: this.state.data.concat(this.state.message)})
  }

  changeText(event) {
    this.setState({message: event.target.value})
  }

  render() {
    return(
      <div>
        <form>
          <input onChange={this.changeText} type="text" />
          <button onClick={this.handleClick}>
            送信~~!!
          </button>
          {this.state.data.map((message, idx) => <Message message={message} key={idx} />)}
        </form>
      </div>
    )
  }
}

export default Form
