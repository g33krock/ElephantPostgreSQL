import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, Col, CardLink, Row } from "reactstrap";
import { TrackerCreator } from "./CreateTracker";

export default class StudentSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = { studentschedule: [], studentsched: []};
  }

  componentDidMount() {
    fetch("http://localhost:3001/schedules") //Fetch StudentSchedule Table from API
      .then((response) => response.json()) //Convert response to a JSON object
      .then((data) => {
        this.setState({
          studentschedule: data,                   //Create relationship between studentschedule state array and JSON object
        });
      });
  }

  setSchedule(studentsched) {
    this.setState({studentsched: studentsched})
    // this.setState({student: studentsched.students})       //sets studentsched property to studentsched object.  This looks funny because they both are named studentsched
  }


  render() {
    const student = this.props.student;
    const schedBox = this.state.studentschedule
      .filter(studentschedule => studentschedule.student?.id === student.id)
      .sort((a, b) => (a.student.firstName > b.student.firstName) ? 1 : (a.student.firstName === b.student.firstName) ? ((a.period > b.period) ? 1 : -1) : -1)
      .map(studentsched => {
        console.log(studentsched.course.link)
        return (
            <Col key={studentsched.id}>
                <Card onClick={() => this.setSchedule(studentsched)}>
                <CardImg src={`${studentsched.teacher.image}`} alt={studentsched.teacher.firstName} />
                    <CardImgOverlay>
                      <CardTitle style={{color: 'white'}}>
                          Period: {studentsched.period}
                        </CardTitle>
                    </CardImgOverlay>
                    <CardText style={{color: 'black', fontSize: '10px'}} >
                      <p>Student:{studentsched.student.firstName} {studentsched.student.lastName}</p>
                      <p>Teacher:{studentsched.teacher.firstName} {studentsched.teacher.lastName}</p>
                      <p>Course Name:{studentsched.course.name}</p>
                      <p>Subject:{studentsched.course.subject}</p>
                      <CardLink href={studentsched.teacher.link}>{studentsched.teacher.link}</CardLink>
                      <Row>
                        <Col sm="12" md={{ size: 3, offset: 3 }}>
                          <TrackerCreator
                          student={studentsched.student}
                          teacher={studentsched.teacher}
                          course={studentsched.course}
                          period={studentsched.period}
                          >
                          </TrackerCreator>
                        </Col>
                      </Row>
                    </CardText>
                </Card>
            </Col>
        )
      });

      return (
        <div id="schedBox" >
        
          StudentSchedule for {student.firstName} {student.lastName}
          <div className = "schedule-container">
            {schedBox}
          </div>
          
        </div>
    )
  }

}
