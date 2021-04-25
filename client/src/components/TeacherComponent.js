import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";
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

  setTeacher(teacher) {
    // sets teacher property to teacher object.  This looks funny because they both are named teacher
    this.setState({teacher: teacher})
  }
  
  render() {
      console.log(this.state.teachers)
    return (
      <section>
        <h1>Teachers</h1>
        {this.state.teacher && <TeacherSchedule teacher={this.state.teacher}></TeacherSchedule>}
        <div className = "row">
          {this.state.teachers.map(teacher => 
            <div key={teacher.id} className="col-md-2 m-1">
              <Card onClick={() => this.setTeacher(teacher)}>
                  <CardTitle className='card-title' style={{color: 'black' }}>
                    {teacher.firstName} {teacher.lastName} 
                  </CardTitle>
              </Card>
            </div>
          )}
        </div>
      </section>
    );
  }
}
