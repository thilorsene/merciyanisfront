import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


const Main = lazy(() => import('./Main'));
const Purchase = lazy(() => import('./pages/Purchase'));
const Orders = lazy(() => import('./pages/Orders'));
const Bon = lazy(() => import('./pages/Bon'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback='Loading'>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/stock" component={ Purchase } />
          <Route exact path="/order" component={ Orders } />
          <Route exact path="/bons" component={ Bon } />

        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;