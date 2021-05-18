import React, { Component } from "react";
import { Card, CardTitle, Row, Col, CardImg, CardBody } from "reactstrap";
import StudentSchedule from "./StudentScheduleComponent";
import {StudentCreator} from "./CreateStudent";
import {DeleteStudent} from "./DeleteStudent";
import {StudentUpdater} from "./UpdateStudent";


export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [], student: null, id: null};
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
    this.setState({student: student});
    console.log(student);
  }
  
  render() {
    const first = this.state.student?.firstName;
    const last = this.state.student?.lastName;
    return (
      <section>
        <Row>
          <Col md="4"></Col>
          <Col md="1">
            <StudentCreator></StudentCreator>
          </Col>
          <Col md="1">
            <DeleteStudent 
              studentId={this.state.student?.id}
              studentFirstName={this.state.student?.firstName}
              studentLastName={this.state.student?.lastName}>
            </DeleteStudent>
          </Col>
          <Col md="1">
            <StudentUpdater 
              studentId={this.state.student?.id}
              studentFirstName={this.state.student?.firstName}
              studentLastName={this.state.student?.lastName}
              studentGrade={this.state.student?.grade}
              studentCampus={this.state.student?.campuses.id}
              studentMedInfo={this.state.student?.medical_information}
              studentAddInfo={this.state.student?.additional_information}
              studentIEP={this.state.student?.iep}>
            </StudentUpdater>
          </Col>
          <Col md="4"></Col>
        </Row>
        
        <h1>Student: {first} {last}</h1>
        <div className="row">
          <div className="col-md-3">
            <Card>
              {this.state.student && <CardImg src={`${this.state.student?.profile_image}`} alt={`${this.state.student?.firstName}`}></CardImg>}
              {this.state.student &&<CardBody>
              </CardBody>}
            </Card>
          </div>
          <div className="col-md-9">
            {this.state.student && <StudentSchedule student={this.state.student}></StudentSchedule>}
          </div>
        </div>
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
      </section>
    );
  }
}
