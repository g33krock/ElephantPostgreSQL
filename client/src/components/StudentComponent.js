import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], student: null };
  }

  componentDidMount() {
    fetch("http://localhost:3001/students") //Fetch Student Table from API
      .then((response) => response.json()) //Convert response to a JSON object
      .then((data) => {
        this.setState({
          students: data,                   //Create relationship between students state array and JSON object
        });
      });
  }

  setStudent(student) {
    this.setState({student: student})       //sets student property to student object.  This looks funny because they both are named student
  }

  render() {
    return (
      <section>
        <h1>Students</h1>
        {this.state.students.map(student => 
            <div key={student.id} className="col-md-2 m-1">
                <Card onClick={() => this.setStudent(student)}>
                    <CardImg src={`${student.profile_image}`} alt={student.firstName} />
                </Card>
            </div>
        )}
        <span>{JSON.stringify(this.state.student)}</span>
      </section>
    );
  }
}
