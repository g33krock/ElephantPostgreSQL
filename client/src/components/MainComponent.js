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

    

    async componentDidMount() {
        await this.setState({teachers:teacherService.all()});
        console.log(this.state.teachers);
        await this.setTeachers();
        await this.setState({campus: this.state.teacher?.campus.id});
        console.log(this.state.campus)
    }

    setTeachers() {
        this.setState({teacher: this.state.teachers.find((uTeacher) => uTeacher?.email === this.props?.userEmail)});
        console.log(this.state.teacher)
    }

    render() {
        
        return (
            <div>
            
                <Switch>
                    <PrivateRoute path='/sped' component={Sped} />
                    <PrivateRoute path='/schedules' component={Schedule} campusId = {this.state.campus}/>
                    <PrivateRoute path='/teachers' component={Teacher} />
                    <PrivateRoute path='/singleteachers' component={SingleTeacher} userEmail = {this.props?.userEmail} />
                    <PrivateRoute path='/students' component={Student} />
                    <PrivateRoute path='/transcripts' component={Transcript} />
                    <PrivateRoute path='/home' component={Home} />
                    <Redirect to='/home' />
                </Switch>
            </div>
            
        )
           
    }
}

export default Main;