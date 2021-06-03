import React, { Component } from "react";
import { Table } from "reactstrap";

export default class AltStudentSchedule extends Component {
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
      .sort((a, b) => (a.student?.firstName > b.student?.firstName) ? 1 : (a.student?.firstName === b.student?.firstName) ? ((a.period > b.period) ? 1 : -1) : -1)
      .map(studentsched => {
        return (
            <Table key={studentsched.id}>
                <thead>
                    <tr>
                        <th>Period {studentsched.period}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id={`${studentsched.teacher.firstName}`}><strong>Teacher:</strong> <p style={{fontSize: 'small'}}>{studentsched.teacher.firstName} {studentsched.teacher.lastName}</p> <strong>Course:</strong> <p style={{fontSize: 'small'}}>{studentsched.course.name}</p></td>
                    </tr>
                </tbody>
                
                 
                        
            </Table>
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
