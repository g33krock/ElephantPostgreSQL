import React, { Component } from "react";
import {baseURL} from "../baseURL";
import { Container, Label } from "reactstrap";
import TeacherSchedule from "./TeacherScheduleComponent";


export default class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = { teachers: [], teacher: null };
  }

  componentDidMount() {
    // Fetch Student Table from API
    fetch(`${baseURL}/teachers`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          teachers: data,
        });
      });
  }

  onChange = e => {
    const teacherId = Number(e.target.value)
    const teacher = this.state.teachers.find(teacher => teacher.id === teacherId) 
    this.setState({ teacher });
    console.log(this.state)
    console.log(e.target.value)
  }
  
  render() {
    return (
      <Container>
        <h1>Teachers {this.state.teacher?.firstName}</h1>
        <div className = "row">
          <Label for="scheduleTeacher">Select Teacher</Label>
          <select id="scheduleTeacher" onChange={this.onChange}>
            <option selected>None</option>
            {this.state.teachers.map(teacher => 
              <option key={teacher.id} value={teacher.id}>
                {teacher.firstName} {teacher.lastName}
              </option>
            )}
          </select>
        </div>
        {this.state.teacher && <TeacherSchedule teacher={this.state.teacher}></TeacherSchedule>}
      </Container>
    );
  }
}
