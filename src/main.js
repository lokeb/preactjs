import React from "react"
import ReactDOM from "react-dom"

import './style.scss'

const Main = () => (
  <h1>PReact Ready to Go! {new Date().toTimeString()}</h1>
)

ReactDOM.render(<Main />, document.body)
