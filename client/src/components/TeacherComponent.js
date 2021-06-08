import React, { Component } from "react";
import { Label } from "reactstrap";
import TeacherSchedule from "./TeacherScheduleComponent";


export default class Teacher extends Component {
  constructor(props) {
    super(props);
    this.state = { teachers: [], teacher: null };
  }

  componentDidMount() {
    // Fetch Teacher Table from API
    fetch("http://localhost:3001/teachers")
      // Convert response to a JSON object
      .then((response) => response.json())
      .then((data) => {
        // Create relationship between teachers state array and JSON object
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
      <section>
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
      </section>
    );
  }
}
