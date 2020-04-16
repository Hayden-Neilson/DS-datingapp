import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import NavigationComponent from "./Navbar/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Auth from "./pages/auth";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleUnSuccessfulLogin = this.handleUnSuccessfulLogin.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }

  handleUnSuccessfulLogin() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  render() {
    return (
      <div className='app'>
            <h1>DS Dating App</h1>
        <Router>
          <div>
            <NavigationComponent />
            <Switch>
              <Route exact path="/" component={Home} />

              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin={this.handleUnSuccessfulLogin}
                  />
                )
                }
              />

              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
