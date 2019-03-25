import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import Home from './Components/ToDo/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Router>
    );
  }
}

export default App;
