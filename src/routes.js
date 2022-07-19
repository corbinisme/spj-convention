import React from 'react'
import { Route } from 'react-pages'

import App from '../pages/App.js'
import Home from '../pages/Home.js'
import About from '../pages/About.js'

export default (
  <Route path="/" component={ App }>
    <Route component={ Home }/>
    <Route path="about" component={ About }/>
  </Route>
)