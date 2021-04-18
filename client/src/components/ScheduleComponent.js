import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { schedule: [], sched: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3001/schedule") //Fetch Schedule Table from API
      .then((response) => response.json()) //Convert response to a JSON object
      .then((data) => {
        this.setState({
          schedule: data,                   //Create relationship between schedule state array and JSON object
        });
      });
  }

  setSchedule(sched) {
    this.setState({sched: sched})
    this.setState({student: sched.students})       //sets sched property to sched object.  This looks funny because they both are named sched
  }


  render() {
      let schedBox = this.state.schedule.sort((a, b) => (a.students.firstName > b.students.firstName) ? 1 : (a.students.firstName === b.students.firstName) ? ((a.period > b.period) ? 1 : -1) : -1).students.filter(function(stuId) {return stuId.id === this.state.student.id}).map(sched => {
        return (
            <div key={sched.students.firstName} className="col-md-2 m-1">
                <Card onClick={() => this.setSchedule(sched)}>
                <CardImg src={`${sched.teachers.image}`} alt={sched.teachers.firstName} />
                    <CardImgOverlay>
                      <CardTitle style={{color: 'white'}}>
                          Period: {sched.period}<br/>Student:{sched.students.firstName} {sched.students.lastName} <br/>Teacher:{sched.teachers.firstName} {sched.teachers.lastName} <br/> Course Name:{sched.courses.name}<br/> Subject:{sched.courses.subject}
                        </CardTitle>
                    </CardImgOverlay>
                </Card>
            </div>
        )
      }
      );
      return (
        <div className = "row">
            {schedBox}
        </div>
    )   
  }

}
