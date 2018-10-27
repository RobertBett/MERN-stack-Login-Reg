import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import Authentication from './containers/AuthenticationContainer';
import Dashboard from './containers/Dashboard';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Authentication} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route
          path="*"
          render={() => <Redirect to="/" />}
        />
      </Switch>
    );
  }
}
export default App;
