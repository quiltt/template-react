import React from 'react'
import { Router } from "@reach/router"

import { QuilttProvider } from './quiltt'

import Starter from './components/Starter'
import Auth from './components/Auth'

export const App: React.VFC = () => {
  return (
    <QuilttProvider>
      <Router>
        <Starter.Home path="/" />
        <Auth.Page    path="/auth" />
      </Router>
    </QuilttProvider>
  )
}

export default App
