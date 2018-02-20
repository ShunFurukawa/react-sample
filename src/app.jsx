import React from 'react'
import ReactDOM from 'react-dom'

import Form from './components/form'
import Message from './components/message'

import Favorite from './components/favorite'

ReactDOM.render(
  <div>
    Hello, React~!!!
    <Form />
    <Message />
    <Favorite />
  </div>,
  document.getElementById('root')
)
