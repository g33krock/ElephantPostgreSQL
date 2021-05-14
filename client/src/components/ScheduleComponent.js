import React, { Component } from "react";
import { Card, CardTitle, Row, Col, CardImg } from "reactstrap";
import { ScheduleUpdater } from "./UpdateSchedule";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { schedules: [], schedule: null, students: [], student: null };
  }

  componentDidMount() {
    fetch("http://localhost:3001/students")
      // Convert response to a JSON object
      .then((response) => response.json())
      .then((students) => {
          students.sort((studenta, studentb) => studenta.lastName-studentb.lastName)
          .forEach(student => student.schedules.sort((schedulea, scheduleb) => schedulea.period-scheduleb.period))
        this.setState({
          students,
        });
      });
  }

  setSchedule(schedule) {
    // sets student property to student object.  This looks funny because they both are named student
    this.setState({ schedule: schedule });
    console.log(schedule);
  }

  releaseKraken() {
    ScheduleUpdater.toggle();
  }

  render() {
    return (
      <div>
        <Row dark sticky="top">
          <Col xs="2">
            {" "}
            <h1>Student</h1>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 1</h3>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 2</h3>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 3</h3>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 4</h3>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 5</h3>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 6</h3>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 7</h3>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 8</h3>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 9</h3>
          </Col>
          <Col xs="1">
            {" "}
            <h3>Period 10</h3>
          </Col>
        </Row>
        {this.state.students.map((student) => (
          <Row key={student.id} xs="1">
            <Col xs="2">
              <Card>
                <CardImg
                  src={`${student.profile_image}`}
                  alt={student.firstName}
                />
                <CardTitle className="card-title" style={{ color: "black" }}>
                  {student.firstName} {student.lastName}
                </CardTitle>
              </Card>
            </Col>
            {student.schedules.map((schedule) => (
              <Col key={schedule.period} xs="1">
                <Card>
                  <CardImg
                    src={`${schedule.teacher.image}`}
                    alt={schedule.teacher.firstName}
                  />
                  <CardTitle style={{ fontSize: "10px" }}>
                    Class: {schedule.course.name} <br></br> Period:{" "}
                    {schedule.period}
                  </CardTitle>
                </Card>
                <ScheduleUpdater scheduleId={schedule.id}></ScheduleUpdater>
              </Col>
            ))}
          </Row>
        ))}
      </div>
    );
  }
}
