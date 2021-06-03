import React, { Component } from "react";
import { Table } from "reactstrap";
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
        })
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
      <div class="tableFixHead">
        <Table bordered hover size="sm">
          <thead>
            <tr>
              <th>Student</th>
              <th>Period 1</th>
              <th>Period 2</th>
              <th>Period 3</th>
              <th>Period 4</th>
              <th>Period 5</th>
              <th>Period 6</th>
              <th>Period 7</th>
              <th>Period 8</th>
              <th>Period 9</th>
              <th>Period 10</th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr>
                <th key={student.id}>{student.firstName} {student.lastName}</th>
                {student.schedules.map((schedule) => (
                <td className={schedule.teacher.firstName} id="schedItem">
                  <strong>Course: </strong><small>{schedule.course.name}</small> 
                  <br /> 
                  <strong>Teacher: </strong><small>{schedule.teacher.firstName} {schedule.teacher.lastName}</small> <br />
                  <ScheduleUpdater scheduleId={schedule.id} ></ScheduleUpdater>
                </td>))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
