import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavigationComponent from "./Navbar/Navbar"
import Home from "./pages/Home"
import Contact from "./pages/contact"
import About from "./pages/about"
import Auth from "./pages/auth"
import UserProfile from "./pages/userprofile"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
            <h1>DS Dating App</h1>
        <Router>
          <div>
            <NavigationComponent />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/auth" component={Auth} />
              <Route path="/userProfile" component={UserProfile} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
