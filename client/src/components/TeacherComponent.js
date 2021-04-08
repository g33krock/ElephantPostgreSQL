import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { UserService } from '../services/UserService';


class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: []
    }
  }
  componentDidMount() {
    UserService.getTeachers().then((teachers) => {
      this.setState({teachers})
    })  
  }
  async loadTeachers() {
    await UserService.getTeachers();
    const teachers = await UserService.getTeachers();
    this.setState({teachers}); 
  }
  async createAndLoadTeacher() {
    await UserService.createTeacher();
    const teachers = await UserService.getTeachers();
    this.setState({teachers}); 
  }
  async updateAndLoadTeacher() {
    await UserService.updateTeacher();
    const teachers = await UserService.getTeachers();
    this.setState({teachers}); 
  }
  async deleteAndLoadTeacher() {
    await UserService.deleteTeacher();
    const teachers = await UserService.getTeachers();
    this.setState({teachers}); 
  }
    render() {
        return (
            <div className="App">
                <button onClick={() => this.createAndLoadTeacher()}>Add teacher</button>
                <button onClick={() => this.updateAndLoadTeacher()}>Update teacher</button>
                <button onClick={() => this.deleteAndLoadTeacher()}>Delete teacher</button>
                <Directory teachers={this.state.teachers} />
            </div>
        );
    }
}


export default Teacher;