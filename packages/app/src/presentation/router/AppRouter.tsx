import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { MODULE1_ROUTE, MODULE2_ROUTE } from './routes';

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* <Route exact path={MODULE1_ROUTE} component={Module1} /> */}
        {/* <Route exact path={MODULE2_ROUTE} component={Module2} /> */}
        <Redirect to={MODULE1_ROUTE} />
      </Switch>
    </Router>
  );
};
