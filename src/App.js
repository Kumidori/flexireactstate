import React, { Component } from 'react';
import './App.css';
import Courses from './views/Courses'
import News from './views/News'
import Profile from './views/Profile'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={News}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/courses" component={Courses}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
