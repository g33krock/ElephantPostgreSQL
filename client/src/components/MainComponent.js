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
        const teachers = await teacherService.all();
        console.log(teachers)
        const teacher = teachers.find(teacher => teacher.email === this.props.userEmail)
        console.log(teacher)

        this.setState({
            teachers: teachers,
            teacher: teacher,
            campus: teacher.campus
        })
        console.log(this.state.teachers)
    }


    render() {
        if (this.state.teacher?.role.id === 3||this.state.teacher?.role.id === 4) {
        return (
            <div>
            
                <Switch>
                    <PrivateRoute path='/singleteachers' component={SingleTeacher} userEmail = {this.props?.userEmail} />
                    <PrivateRoute path='/home' component={Home} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        )
        } else {
            return (
                <div>
                    <Switch>
                        <PrivateRoute path='/sped' component={Sped} />
                        <PrivateRoute path='/schedules' component={Schedule} campus = {this.state.campus}/>
                        <PrivateRoute path='/teachers' component={Teacher} />
                        <PrivateRoute path='/students' component={Student} />
                        <PrivateRoute path='/transcripts' component={Transcript} />
                        <PrivateRoute path='/home' component={Home} />
                        <Redirect to='/home' />
                    </Switch>
                </div>
            )
        }  
    }
}

export default Main;