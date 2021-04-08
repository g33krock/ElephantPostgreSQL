import React, { Component } from 'react';
import StudentDirectory from './StudentDirectory';
import { StudentService } from '../services/StudentService';
import { ScheduleService } from '../services/ScheduleService';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      periods: []
    }
  }
  componentDidMount() {
    StudentService.getStudents().then((students) => {
      this.setState({students})
    })  
  }
  async loadStudents() {
    await StudentService.getStudentsSchedule();
    const students = await StudentService.getStudentsSchedule();
    this.setState({students}); 
  }
  async createAndLoadStudent() {
    await StudentService.createStudent();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadStudent() {
    await StudentService.updateStudent();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP0StudentSchedule() {
    await StudentService.updateP0StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP1StudentSchedule() {
    await StudentService.updateP1StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP2StudentSchedule() {
    await StudentService.updateP2StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP3StudentSchedule() {
    await StudentService.updateP3StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP4StudentSchedule() {
    await StudentService.updateP4StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP5StudentSchedule() {
    await StudentService.updateP5StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP6StudentSchedule() {
    await StudentService.updateP6StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP7StudentSchedule() {
    await StudentService.updateP7StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP8StudentSchedule() {
    await StudentService.updateP8StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP9StudentSchedule() {
    await StudentService.updateP9StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async updateAndLoadP10StudentSchedule() {
    await StudentService.updateP10StudentSchedule();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
  async deleteAndLoadStudent() {
    await StudentService.deleteStudent();
    const students = await StudentService.getStudents();
    this.setState({students}); 
  }
    render() {
        return (
            <div className="App">
                <button onClick={() => this.createAndLoadStudent()}>Add student</button>
                <button onClick={() => this.updateAndLoadStudent()}>Update student</button>
                <button onClick={() => this.deleteAndLoadStudent()}>Delete student</button>
                <StudentDirectory students={this.state.students} />
            </div>
        );
    }
}


export default Student;