import React, { Component } from 'react';
import {baseURL} from "../baseURL";
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
import { fetcher } from "../services/fetcher";

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

    componentDidMount() {
        fetcher(`${baseURL}/teachers`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then(response => {
              return response.json();
          })
          .then((teachers) => {
              this.setState({teachers});
          })
          .then(this.setState({teacher: this.state.teachers.find(teacher => teacher?.email === this.props?.userEmail)}))
          .then(console.log(this.state.teacher))
    }

    

    // async componentDidMount() {
    //     await this.setState({teachers:teacherService.all()});
    //     console.log(this.state.teachers);
    //     await this.setTeachers();
    // }

    // setTeachers() {
    //     const teacher = (this.state.teachers.find(teacher => teacher.email === this.props.userEmail))
    //     this.setState({teacher});
    //     console.log(this.state.teacher)
    // }

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