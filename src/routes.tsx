import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" exact component={Contact}/>
      <Route path="/portfolio" exact component={Portfolio}/>
    </Switch>
  )
}

export default Routes
