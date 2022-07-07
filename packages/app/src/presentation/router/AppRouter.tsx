import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import {Machines} from '../pages/Machines';
import {Products} from '../pages/Products';
import {MACHINES_ROUTE, PRODUCTS_ROUTE} from './routes';
import React from 'react';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {<Route exact path={MACHINES_ROUTE} component={Machines} />}
        {<Route exact path={PRODUCTS_ROUTE} component={Products} />}
        <Redirect to={MACHINES_ROUTE} />
      </Switch>
    </Router>
  );
};
