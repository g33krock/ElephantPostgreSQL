import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { AuthProvider } from './contexts/Auth';
import { PrivateRoute } from './components/PrivateRoute'
// import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore'

// const store = ConfigureStore
class App extends Component {
    render() {
        return (
          <AuthProvider>
            <Router>
              
                <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                  <Route path="/signup" component={Signup} />
                  <Route path="/login" component={Login} />
                </Switch>
              
            </Router>
          </AuthProvider>
        );
    }
}


export default App;