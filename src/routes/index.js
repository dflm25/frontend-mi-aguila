/**
 * This source code is the confidential, proprietary information of
 * Mi aguila, you may not disclose such information,
 * and may only use it in accordance with the terms of the license
 * agreement you entered into with Mi aguila.
 *
 * Mi aguila
 * All Rights Reserved.
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import PublicRoute from './public';
import PrivateRoute from './private';
import NotFound from '../pages/noFound';

/**
 * @file index.js
 * @author Daniel Felipe Lucumi Marin
 * @description Redux store.
 */

const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route) => {
        if (route.auth) {
          return <PrivateRoute key={route.path} {...route} />;
        }
        return <PublicRoute key={route.path} {...route} />;
      })}
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
