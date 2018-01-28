import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';
import Signup from './components/Signup';
import Login from './components/Login';

const Routes = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);

export default Routes;
