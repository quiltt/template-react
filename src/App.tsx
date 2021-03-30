import React from 'react'
import { Router } from "@reach/router"

import Starter from './components/Starter'
import Auth from './components/Auth'

export const App: React.VFC = () => {
  return (
    <Router>
      <Starter.Home path="/" />
      <Auth.Page    path="/auth" />
    </Router>
  )
}

export default App
