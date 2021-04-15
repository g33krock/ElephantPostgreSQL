import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Student } from './components/StudentComponent';


class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
              <Student />
            </div>
          </BrowserRouter>
        );
    }
}


export default App;