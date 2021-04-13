import React, { Component } from 'react';
import Teacher from './TeacherComponent';
import Student from './StudentComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom'

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            teachers: [],
            students: []
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