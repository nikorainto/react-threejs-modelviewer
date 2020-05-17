import React, { Suspense, lazy } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

const Home = lazy(() => import('./pages/home'))
const Room = lazy(() => import('./pages/room/room'))
const Helmet = lazy(() => import('./pages/helmet/helmet'))
const Shoe = lazy(() => import('./pages/shoe/shoe'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <div id="app">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/room" component={Room} />
            <Route exact path="/helmet" component={Helmet} />
            <Route exact path="/shoe" component={Shoe} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Suspense>
    </Router>
  )
}

export default App
