import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

export default class TeacherSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = { teacherschedule: [], teachersched: []};
  }

  componentDidMount() {
    fetch("http://localhost:3001/schedules") //Fetch TeacherSchedule Table from API
      .then((response) => response.json()) //Convert response to a JSON object
      .then((data) => {
        this.setState({
          teacherschedule: data,                   //Create relationship between teacherschedule state array and JSON object
        });
      });
  }

  setSchedule(teachersched) {
    this.setState({teachersched: teachersched})
    // this.setState({teacher: teachersched.teachers})       //sets teachersched property to teachersched object.  This looks funny because they both are named teachersched
  }


  render() {
    const teacher = this.props.teacher;
    const teacherSchedBox = this.state.teacherschedule
      .filter(teacherschedule => teacherschedule.teacher?.id === teacher.id)
      .sort((a, b) => (a.teacher.firstName > b.teacher.firstName) ? 1 : (a.teacher.firstName === b.teacher.firstName) ? ((a.period > b.period) ? 1 : -1) : -1)
      .map(teachersched => {
        return (
            <div key={teachersched.id} className="col">
                <Card onClick={() => this.setSchedule(teachersched)}>
                <CardImg src={`${teachersched.student.profile_image}`} alt={teachersched.student.firstName} />
                    <CardImgOverlay>
                      <CardTitle style={{color: 'white'}}>
                          Period: {teachersched.period}
                        </CardTitle>
                    </CardImgOverlay>
                    <CardText style={{color: 'black'}}>
                      <p>Student:{teachersched.student.firstName} {teachersched.student.lastName}</p>
                      <p>Teacher:{teachersched.teacher.firstName} {teachersched.teacher.lastName}</p>
                      <p>Course Name:{teachersched.course.name}</p>
                      <p>Subject:{teachersched.course.subject}</p>
                    </CardText>
                </Card>
            </div>
        )
      });

      return (
        <div className = "container" id="schedBox">
          TeacherSchedule for {teacher.firstName} {teacher.lastName}
          <div className = "row">
            {teacherSchedBox}
          </div>
        </div>
    )
  }

}
