import React, { Component } from 'react';
import './App.css';
import Courses from './views/Courses'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
          <Route exact path="/" component={Courses}/>
        </Router>
    );
  }
}

export default App;
