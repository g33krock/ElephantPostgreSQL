import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { schedule: [], sched: [] };
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
    this.setState({student: sched.students})       //sets sched property to sched object.  This looks funny because they both are named sched
  }


  render() {
      let schedBox = this.state.schedule
      .sort((a, b) => (a.student.firstName > b.student.firstName) ? 1 : (a.student.firstName === b.student.firstName) ? ((a.period > b.period) ? 1 : -1) : -1)
      .filter(function(stuId) {return stuId.student.id === 1})
      .map(sched => {
        return (
            <div key={sched.student.firstName} className="col-md-2 m-1">
                <Card onClick={() => this.setSchedule(sched)}>
                <CardImg src={`${sched.teacher.image}`} alt={sched.teacher.firstName} />
                    <CardImgOverlay>
                      <CardTitle style={{color: 'white'}}>
                          Period: {sched.period}
                        </CardTitle>
                    </CardImgOverlay>
                        <CardText style={{color: 'black'}}>
                        Student:{sched.student.firstName} {sched.student.lastName} <br/>Teacher:{sched.teacher.firstName} {sched.teacher.lastName} <br/> Course Name:{sched.course.name}<br/> Subject:{sched.course.subject}
                        </CardText>
                    
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
