import React, { Component } from 'react';
import Student from './StudentComponent';
import Home from './HomeComponent';
import { Switch, Redirect } from 'react-router-dom'
import Teacher from './TeacherComponent';
import Schedule from './ScheduleComponent';
import { PrivateRoute } from './PrivateRoute';
import Sped from './SpedComponent';
import Transcript from './TranscriptComponent';


class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            teachers:[],
            campus: null
            
        };
    }
    componentDidMount() {
        this.setState({campus:this.props.campus})
        console.log(this.state.campus)
    }

    render() {
        return (
            <div>
                
                <Switch>
                    <PrivateRoute path='/sped' campus={this.props?.campus} component={Sped} />
                    <PrivateRoute path='/schedules' campus={this.props?.campus} component={Schedule} />
                    <PrivateRoute path='/teachers' userEmail={this.props?.userEmail} component={Teacher} />
                    <PrivateRoute path='/students' campus={this.props?.campus} component={Student} />
                    <PrivateRoute path='/transcripts' campus={this.props?.campus} component={Transcript} />
                    <PrivateRoute path='/home' campus={this.props?.campus} component={Home} />
                    <Redirect to='/home' />
                </Switch>
            </div>
            
        )
    }
}

export default Main;