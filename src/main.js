import React from "react"
import ReactDOM from "react-dom"

import './style.scss'

class Main extends React.Component {
  render() {
    return (
      <h1>PReact Ready to Go!</h1>
    )
  }
}

ReactDOM.render(<Main />, document.body)
