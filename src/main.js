import React from "react"
import ReactDOM from "react-dom"

import './test.scss'

class Main extends React.Component {
  render() {
    return (
      <span>
        <h1>Hello, world</h1>
        <h2>I love you</h2>
      </span>
    )
  }
}

ReactDOM.render(<Main />, document.body)
