import React, { Component } from 'react';
import Student from './StudentComponent';
import Home from './HomeComponent';
import { Switch, Redirect } from 'react-router-dom'
import Teacher from './TeacherComponent';
import SingleTeacher from './SingleTeacherComponent';
import Schedule from './ScheduleComponent';
import { PrivateRoute } from './PrivateRoute';
import Sped from './SpedComponent';
import Transcript from './TranscriptComponent';
import { teacherService } from '../services/teacherService';

class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            teachers:[],
            teacher: null,
            campus: null,
            userEmail: null
            
        };
    }

    userEmail = this.props?.userEmail

    async componentDidMount() {
        await this.setState({teachers:teacherService.all()})
        await this.setState({teacher = this.state.teachers.find(uTeacher => uTeacher.email === this.props?.userEmail)})
        await this.setState({campus: this.state.teacher?.campus.id})
        console.log(this.state.campus)
    }

    render() {
        return (
            <div>

                <Switch>
                    <PrivateRoute path='/sped' campus={this.props?.campus} component={Sped} />
                    <PrivateRoute path='/schedules' campus={this.props?.campus} component={Schedule} />
                    <PrivateRoute path='/teachers' userEmail={this.state.userEmail} component={Teacher} />
                    <PrivateRoute path='/singleteachers' component={SingleTeacher} userEmail = {this.props?.userEmail} />
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