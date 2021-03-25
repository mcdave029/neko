import React, { Component } from 'react';
import './App.scss';
import Index from './cats/Index';
import Show from './cats/Show';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/neko" component={Index} />
            <Route path="/neko/:id" component={Show} />
          </Switch>
        </Router>
      </div>
    );
  }
}
