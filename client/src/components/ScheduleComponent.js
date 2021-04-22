import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { schedule: [], sched: []};
  }

  componentDidMount() {
    fetch("http://localhost:3001/schedules") //Fetch Schedule Table from API
      .then((response) => response.json()) //Convert response to a JSON object
      .then((data) => {
        this.setState({
          schedule: data,                   //Create relationship between schedule state array and JSON object
        });
      });
  }

  setSchedule(sched) {
    this.setState({sched: sched})
    // this.setState({student: sched.students})       //sets sched property to sched object.  This looks funny because they both are named sched
  }


  render() {
    const student = this.props.student;
    const schedBox = this.state.schedule
      .filter(schedule => schedule.student?.id === student.id)
      .sort((a, b) => (a.student.firstName > b.student.firstName) ? 1 : (a.student.firstName === b.student.firstName) ? ((a.period > b.period) ? 1 : -1) : -1)
      .map(sched => {
        return (
            <div key={sched.id} className="col-md-2 m-1">
                <Card onClick={() => this.setSchedule(sched)}>
                <CardImg src={`${sched.teacher.image}`} alt={sched.teacher.firstName} />
                    <CardImgOverlay>
                      <CardTitle style={{color: 'white'}}>
                          Period: {sched.period}
                        </CardTitle>
                    </CardImgOverlay>
                    <CardText style={{color: 'black'}}>
                      <p>Student:{sched.student.firstName} {sched.student.lastName}</p>
                      <p>Teacher:{sched.teacher.firstName} {sched.teacher.lastName}</p>
                      <p>Course Name:{sched.course.name}</p>
                      <p>Subject:{sched.course.subject}</p>
                    </CardText>
                </Card>
            </div>
        )
      });

      return (
        <div className = "col">
            <p>{schedBox}</p>
        </div>
    )
  }

}
