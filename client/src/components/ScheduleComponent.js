import React, { Component } from "react";
import { Card, CardTitle, Row, Col, CardImg } from "reactstrap";



export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { schedules: [], schedule: null, studentSchedules: [], studentSchedule: null};
  }

  componentDidMount() {
    // Fetch Student Table from API
    fetch("http://localhost:3001/schedules")
      // Convert response to a JSON object
      .then((response) => response.json())
      .then((data) => {
        // Create relationship between students state array and JSON object
        this.setState({
          schedules: data,
        });
      });
      fetch("http://localhost:3001/students")
      // Convert response to a JSON object
      .then((response) => response.json())
      .then((data) => {
        // Create relationship between students state array and JSON object
        this.setState({
          studentSchedules: data,
        });
      });
  }

  setSchedule(schedule) {
    // sets student property to student object.  This looks funny because they both are named student
    this.setState({schedule: schedule});
    console.log(schedule);
  }

  render() {
      return (
          <div>
              <Row dark sticky="top">
                <Col xs="2"> <h1>Student</h1></Col>
                <Col xs="1"> <h3>Period 1</h3></Col>
                <Col xs="1"> <h3>Period 2</h3></Col>
                <Col xs="1"> <h3>Period 3</h3></Col>
                <Col xs="1"> <h3>Period 4</h3></Col>
                <Col xs="1"> <h3>Period 5</h3></Col>
                <Col xs="1"> <h3>Period 6</h3></Col>
              </Row>
            {this.state.studentSchedules.map(studentSchedule => 
                <Row key={studentSchedule.id} xs="1">
                    <Col xs="2">
                        <Card onClick={() => this.setStudentSchedule(studentSchedule)}>
                        <CardImg src={`${studentSchedule.profile_image}`} alt={studentSchedule.firstName} />
                            <CardTitle className='card-title' style={{color: 'black' }}>
                            {studentSchedule.firstName} {studentSchedule.lastName} 
                            </CardTitle>
                        </Card>
                    </Col>
                    {this.state.schedules?.filter(studentClass => studentClass.student.id === studentSchedule?.id && studentClass.period ===1).map(periods => 
                        <Col key={this.state.period} xs="1">
                            <Card>
                            <CardImg src={`${periods.teacher.image}`} alt={periods.teacher.firstName} />
                                <CardTitle style={{fontSize: '10px'}}>
                                    Class: {periods.course.name} <br></br> Period: {periods.period}
                                </CardTitle>
                            </Card>
                        </Col>
                    )}
                    {this.state.schedules?.filter(studentClass => studentClass.student.id === studentSchedule?.id && studentClass.period ===2).map(periods => 
                        <Col key={this.state.period} xs="1">
                            <Card>
                            <CardImg src={`${periods.teacher.image}`} alt={periods.teacher.firstName} />
                                <CardTitle style={{fontSize: '10px'}}>
                                    Class: {periods.course.name} <br></br> Period: {periods.period}
                                </CardTitle>
                            </Card>
                        </Col>
                    )}
                    {this.state.schedules?.filter(studentClass => studentClass.student.id === studentSchedule?.id && studentClass.period ===3).map(periods => 
                        <Col key={this.state.period} xs="1">
                            <Card>
                            <CardImg src={`${periods.teacher.image}`} alt={periods.teacher.firstName} />
                                <CardTitle style={{fontSize: '10px'}}>
                                    Class: {periods.course.name} <br></br> Period: {periods.period}
                                </CardTitle>
                            </Card>
                        </Col>
                    )}
                    {this.state.schedules?.filter(studentClass => studentClass.student.id === studentSchedule?.id && studentClass.period ===4).map(periods => 
                        <Col key={this.state.period} xs="1">
                            <Card>
                            <CardImg src={`${periods.teacher.image}`} alt={periods.teacher.firstName} />
                                <CardTitle style={{fontSize: '10px'}}>
                                    Class: {periods.course.name} <br></br> Period: {periods.period}
                                </CardTitle>
                            </Card>
                        </Col>
                    )}
                    {this.state.schedules?.filter(studentClass => studentClass.student.id === studentSchedule?.id && studentClass.period ===5).map(periods => 
                        <Col key={this.state.period} xs="1">
                            <Card>
                            <CardImg src={`${periods.teacher.image}`} alt={periods.teacher.firstName} />
                                <CardTitle style={{fontSize: '10px'}}>
                                    Class: {periods.course.name} <br></br> Period: {periods.period}
                                </CardTitle>
                            </Card>
                        </Col>
                    )}
                    {this.state.schedules?.filter(studentClass => studentClass.student.id === studentSchedule?.id && studentClass.period ===6).map(periods => 
                        <Col key={this.state.period} xs="1">
                            <Card>
                            <CardImg src={`${periods.teacher.image}`} alt={periods.teacher.firstName} />
                                <CardTitle style={{fontSize: '10px'}}>
                                    Class: {periods.course.name} <br></br> Period: {periods.period}
                                </CardTitle>
                            </Card>
                        </Col>
                    )}      
              </Row>
              )}
          </div>
      )
  }
}