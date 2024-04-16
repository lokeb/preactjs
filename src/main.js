import React from "react"
import { createRoot } from 'react-dom/client'

import './style.sass'

const Main = () => (
  <h1>PReact Ready to Go! {new Date().toTimeString()}</h1>
)

const root = createRoot(document.getElementById('app'))
root.render(<Main />)
