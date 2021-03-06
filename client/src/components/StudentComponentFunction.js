import React, { Component, useState, useEffect } from "react";
import {baseURL} from "../baseURL";
import { Card, Row, Col, CardImg, CardBody, Label, Container } from "reactstrap";
import {StudentCreator} from "./CreateStudent";
import {DeleteStudent} from "./DeleteStudent";
import {StudentUpdater} from "./UpdateStudent";
import AltStudentSchedule from "./AltStudentSchedule";
import { EmptyScheduleCreator } from "./EmptySchedule";
import { GuardianCreator } from "./CreateGuardian";
import { SpedQuestionCreator } from "./CreateSpedQuestion";
import { fetcher } from "../services/fetcher";


export default function Student()  {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState(null);
  const [id, setId] = useState(null);

  useEffect(() => {
    // Fetch Student Table from API
    fetcher(`${baseURL}/students`)
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      });
  })

  const onChange = e => {
    const studentId = Number(e.target.value)
    const student = this.state.students.find(student => student.id === studentId) 
    setStudent({ student });
    setId({ id: studentId });
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
          <Col>
            <StudentCreator></StudentCreator>
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
                <Row>
                <Col md="4">
                  <DeleteStudent 
                    studentId={this.state.student?.id}
                    studentFirstName={this.state.student?.firstName}
                    studentLastName={this.state.student?.lastName}>
                  </DeleteStudent>
                </Col>
                <Col md="4">
                  <StudentUpdater 
                    studentId={this.state.student?.id}
                    studentFirstName={this.state.student?.firstName}
                    studentLastName={this.state.student?.lastName}
                    studentGrade={this.state.student?.grade}
                    studentCampus={this.state.student?.campuses?.id}
                    studentMedInfo={this.state.student?.medical_information}
                    studentAddInfo={this.state.student?.additional_information}
                    studentIEP={this.state.student?.iep}
                    studentFunding={this.state.student?.funding?.id}
                    studentInstructionMode={this.state.student?.instructionmode?.id}>
                  </StudentUpdater>
                </Col>
                <Col md="4">
                  <EmptyScheduleCreator 
                    studentId={this.state.student?.id}
                    studentFirstName={this.state.student?.firstName}
                    studentLastName={this.state.student?.lastName}
                    campusId={this.state.student?.campuses.id}>
                  </EmptyScheduleCreator>
                </Col>
                </Row>
                <GuardianCreator
                  studentId={this.state.student?.id}
                >
                </GuardianCreator>
                <SpedQuestionCreator
                  studentId={this.state.student?.id}
                >
                </SpedQuestionCreator>
        
              </CardBody>}
            </Card>
          </div>
          <div className="col-md-9">
            {this.state.student && <AltStudentSchedule student={this.state.student}></AltStudentSchedule>}
          </div>
        </div>
        
      </Container>
    );
  }
}
