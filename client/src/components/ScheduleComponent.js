import React, { Component } from "react";
import { Card, CardTitle } from "reactstrap";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { schedule: [], sched: null };
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
    this.setState({sched: sched})       //sets sched property to sched object.  This looks funny because they both are named sched
  }

  render() {
    return (
      <section>
        <h1>Schedule</h1>
        <span>{JSON.stringify(this.state.sched)}</span>
        {this.state.schedule.map(sched => 
            <div key={sched.id} className="col-md-2 m-1">
                <Card onClick={() => this.setSchedule(sched)}>
                      <CardTitle style={{color: 'black'}}>
                          {sched.students.map(stuSched => 
                            <div key={stuSched.id} className="col-md-2 m-1">
                                <p>{stuSched.firstName} {stuSched.lastName}</p>
                            </div>)}
                            {sched.courses.map(course => 
                            <div key={course.id} className="col-md-2 m-1">
                                <p>{course.name} {course.subject} {course.grade} {course.credit}</p>
                            </div>)}
                            {sched.teachers.map(teacher => 
                            <div key={teacher.id} className="col-md-2 m-1">
                                <p>{teacher.firstName} {teacher.lastName}</p>
                            </div>)}
                        </CardTitle>
                </Card>
            </div>
        )}
        
      </section>
    );
  }
}
