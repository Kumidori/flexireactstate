import React, { Component } from 'react';
import './App.css';
import Courses from './views/Courses'
import Files from './views/Files'
import DetailCourse from './views/DetailCourse'
import News from './views/News'
import Folder from './views/Folder'
import Forum from './views/Forum'
import Post from './views/Post'
import Profile from './views/Profile'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={News}/>
                <Route exact path="/Folder" component={Folder}/>
                <Route exact path="/Post" component={Post}/>
                <Route exact path="/courses/:id" component={DetailCourse}/>
                <Route exact path="/courses/:id/files/:courseNodeId" component={Files}/>
                <Route exact path="/courses/:id/forum/:courseNodeId" component={Forum}/>
                <Route exact path="/news" component={News}/>
                <Route exact path="/courses" component={Courses}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
