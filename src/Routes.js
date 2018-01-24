import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from './components/App';

const Routes = (
  <Router>
    <Route exact path="/" component={App} />
  </Router>
);

export default Routes
