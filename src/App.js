import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from "./InitialPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={LoginForm}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
