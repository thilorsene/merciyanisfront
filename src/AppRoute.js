import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


const Main = lazy(() => import('./Main'));
const Purchase = lazy(() => import('./pages/Purchase'));

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback='Loading'>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/purchase" component={ Purchase } />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;