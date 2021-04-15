import React, { Component } from "react";

export class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], student: null };
  }

  componentDidMount() {
    fetch("http://localhost:3001/students")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          students: data,
        });
      });
  }

  setStudent(student) {
    this.setState({student: student})
  }

  render() {
    return (
      <section>
        <h1>Students</h1>
        {this.state.students.map(student => <button onClick={() => this.setStudent(student)}>{student.firstName}</button>)}
        <span>{JSON.stringify(this.state.student)}</span>
      </section>
    );
  }
}
