import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';

const Planets = lazy(() => import('../Planets'))
const PlanetDetails = lazy(() => import('../PlanetDetails'))

export const App = () => (
  <Suspense fallback="Loading...">
    <Switch>
      <Route exact path="/" component={Planets} />
      <Route exact path="/planet/:id" component={PlanetDetails} />
      <Redirect to="/" />
    </Switch>
  </Suspense>
)

export default App;
