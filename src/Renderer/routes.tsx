/* eslint flowtype-errors/show-errors: 0 */
import * as React from 'react';
import { Switch, Route } from 'react-router';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default () => (
  <Switch>
    <Route path="/counter" component={CounterPage} />
    <Route path="/" component={HomePage} />
  </Switch>
);
