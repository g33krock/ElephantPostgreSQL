import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../App.css';
import { Signup } from './Signup';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { AuthProvider } from '../contexts/Auth';
import { PrivateRoute } from './PrivateRoute'


class App extends Component {
    render() {
        return (
          <Router>
            <AuthProvider>
              <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
              </Switch>
            </AuthProvider>
          </Router>
        );
    }
}


export default App;