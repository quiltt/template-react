import React from 'react'
import { Router } from "@reach/router"

import Starter from './components/Starter'

export const App: React.VFC = () => {
  return (
    <Router>
      <Starter.Home path="/" />
    </Router>
  )
}

export default App
