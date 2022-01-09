import React from 'react';
import {
  BrowserRouter as Router, Redirect,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

import Login from './containers/LoginContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" render={() => <Login />} />
      </Switch>
    </Router>
  );
}

export default App;
