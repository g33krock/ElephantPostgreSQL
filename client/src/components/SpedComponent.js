import React, { Component } from "react";
import { Card, Row, Col, CardImg, CardBody, Label, Container } from "reactstrap";
import { SpedQuestionCreator } from "./CreateSpedQuestion";
import SpedResponse from "./SpedResponses";


export default class Sped extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], student: null, id: null};
  }

  componentDidMount() {
    // Fetch Student Table from API
    fetch("http://localhost:3001/students")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          students: data,
        });
      });
  }

  onChange = e => {
    const studentId = Number(e.target.value)
    const student = this.state.students.find(student => student.id === studentId) 
    this.setState({ student });
    console.log(this.state)
    console.log(e.target.value)
  }
  
  render() {
    const first = this.state.student?.firstName;
    const last = this.state.student?.lastName;
    return (
      <Container>
        <Row>
          <Col>
            <Label for="scheduleStudent">Select Student</Label>
            <select id="scheduleStudent" onChange={this.onChange}>
              <option selected>None</option>
              {this.state.students.map(student => 
                <option key={student.id} value={student.id}>
                  {student.firstName} {student.lastName}
                </option>
              )}
            </select>
          </Col>
        </Row>
        <h1>Student: {first} {last}</h1>
        <div className="row">
          <div className="col-md-3">
            <Card body outline color="primary">
              {this.state.student && <CardImg src={`${this.state.student?.profile_image}`} alt={`${this.state.student?.firstName}`}></CardImg>}
              {this.state.student &&<CardBody>
                <p><strong>Campus:</strong> {this.state.student.campuses.name}</p>
                <p><strong>Grade:</strong> {this.state.student.grade}</p>
                <p><strong>Additional Information:</strong> {this.state.student.additional_information}</p>
                <SpedQuestionCreator
                  studentId={this.state.student?.id}
                >
                </SpedQuestionCreator>
        
              </CardBody>}
            </Card>
          </div>
          <div className="col-md-9">
            {this.state.student && <SpedResponse student={this.state.student}></SpedResponse>}
          </div>
        </div>
        
      </Container>
    );
  }
}
