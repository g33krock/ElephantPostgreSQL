import React, { Component } from 'react';
import Student from './StudentComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom'
import Teacher from './TeacherComponent';

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            teachers:[]
        };
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/teachers' component={Teacher} />
                    <Route path='/students' component={Student} />
                    <Route path='/home' component={Home} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;