import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'

import Author from 'containers/Author'
import Home from 'containers/Home'

export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Hoa Truong ....."
        defaultTitle="Title default"
      >
        <meta name="description" content="Hoa Truong"/>
      </Helmet>
      <Switch>
        <Route exact path="/login" component={Author}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  )
}
