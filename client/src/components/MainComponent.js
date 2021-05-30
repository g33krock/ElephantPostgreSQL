import React, { Component } from 'react';
import Student from './StudentComponent';
import Home from './HomeComponent';
import { Switch, Redirect } from 'react-router-dom'
import Teacher from './TeacherComponent';
import Schedule from './ScheduleComponent';
import { PrivateRoute } from './PrivateRoute';
import { Button } from "reactstrap";

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            teachers:[],
            lindasucks: true
        };
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({lindasucks: false})}>Refresh</Button>
                <Switch>
                    <PrivateRoute path='/schedules' component={Schedule} />
                    <PrivateRoute path='/teachers' component={Teacher} />
                    <PrivateRoute path='/students' component={Student} />
                    <PrivateRoute path='/home' component={Home} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;