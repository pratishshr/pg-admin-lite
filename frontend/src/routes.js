/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/23/16.
 */

import React from 'react';

/* Libraries */
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

/* Components */
import App from './components/App'
import Dashboard from './components/dashboard';
import Structure from './components/structure';
import SqlRunner from './components/sql-runner';
import Login from './components/login/';

let checkAuth = (nextState, transition) => {
  /* Transition to auth if no username or password is set */
  if (!localStorage.getItem('db-username') || !localStorage.getItem('db-password')) {
    transition('/auth');
  }
};

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={checkAuth}>
      <IndexRoute component={Dashboard}/>
      <Route path="/structure" component={Structure}/>
      <Route path="/sql" component={SqlRunner}/>
    </Route>
    <Route path="/auth" component={Login}/>
  </Router>
);

export default routes;