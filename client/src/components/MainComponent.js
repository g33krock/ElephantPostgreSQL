import React, { Component } from 'react';
import Student from './StudentComponent';
import Home from './HomeComponent';
import { Switch, Redirect } from 'react-router-dom'
import Teacher from './TeacherComponent';
import Schedule from './ScheduleComponent';
import { PrivateRoute } from './PrivateRoute';
import Sped from './SpedComponent';
import Header from './HeaderComponent';

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            teachers:[],
            
        };
    }
    campus = Header.campus
    render() {
        return (
            <div>
                
                <Switch>
                    <PrivateRoute path='/sped' campus={this.props?.campus} component={Sped} />
                    <PrivateRoute path='/schedules' campus={Header.campus} component={Schedule} />
                    <PrivateRoute path='/teachers' campus={this.props?.campus} component={Teacher} />
                    <PrivateRoute path='/students' campus={this.props?.campus} component={Student} />
                    <PrivateRoute path='/home' campus={this.props?.campus} component={Home} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
    }
}

export default Main;