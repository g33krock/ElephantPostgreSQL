import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";
import StudentSchedule from "./StudentScheduleComponent";
import {StudentCreator} from "./CreateStudent";


export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], student: null };
  }

  componentDidMount() {
    // Fetch Student Table from API
    fetch("http://localhost:3001/students")
      // Convert response to a JSON object
      .then((response) => response.json())
      .then((data) => {
        // Create relationship between students state array and JSON object
        this.setState({
          students: data,
        });
      });
  }

  setStudent(student) {
    // sets student property to student object.  This looks funny because they both are named student
    this.setState({student: student})
  }

  
  
  render() {
    return (
      <section>
        <h1>Students</h1>
        {this.state.student && <StudentSchedule student={this.state.student}></StudentSchedule>}
        <div className = "row">
          {this.state.students.map(student => 
            <div key={student.id} className="col-md-2 m-1">
              <Card onClick={() => this.setStudent(student)}>
                  <CardTitle className='card-title' style={{color: 'black' }}>
                    {student.firstName} {student.lastName} 
                  </CardTitle>
              </Card>
              
            </div>
          )}
        </div>
        <StudentCreator></StudentCreator>
        <button onClick={StudentCreator.createStudent}>Create Student</button>
      </section>
    );
  }
}
