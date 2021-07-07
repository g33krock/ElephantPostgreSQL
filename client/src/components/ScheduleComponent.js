import React, { Component } from "react";
import {baseURL} from "../baseURL"
import { Table } from "reactstrap";
import { ScheduleUpdater } from "./UpdateSchedule";

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = { schedules: [], schedule: null, students: [], student: null };
  }

  componentDidMount() {
    this.getSchedules()
    console.log(this.props.campus)
  }

  getSchedules() {
    fetch(`${baseURL}/students`)
      // Convert response to a JSON object
      .then((response) => response.json())
      .then((students) => {
          students.sort((studenta, studentb) => studenta.lastName-studentb.lastName)
          .filter(cstudent => cstudent.campuses.id === this.props.campus?.id)
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
          <thead class="shadow">
            <tr id="scheduleHeader">
              <th>
                <h2>Student</h2>
                <br/> <br/>
              </th>
              <th>
                <br/><br/><br/>
                <h2>Period 1</h2>
                <p>7:50-8:40</p>
              </th>
              <th>
                <h3>Period 2</h3>
                <p>8:40-9:30</p>
              </th>
              <th>
                <h3>Period 3</h3>
                <p>9:30-10:20</p>
              </th>
              <th>
                <h3>Period 4</h3>
                <p>10:20-11:10</p>
              </th>
              <th>
                <h3>Period 5</h3>
                <p>11:10-12:00</p>
              </th>
              <th>
                <h3>Period 6</h3>
                <p>12:00-12:50</p>
              </th>
              <th>
                <h3>Period 7</h3>
                <p>12:50-1:40</p>
              </th>
              <th>
                <h3>Period 8</h3>
                <p>1:40-2:30</p>
              </th>
              <th>
                <h3>Period 9</h3>
                <p>2:30-3:20</p>
              </th>
              <th>
                <h3>Period 10</h3>
                <p>3:20-4:10</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.students.map((student) => (
              <tr>
                <th key={student.id}>{student.firstName} {student.lastName}</th>
                {student.schedules.sort((a, b) => a.period - b.period).map((schedule) => (
                <td className={schedule.teacher?.firstName} id="schedItem">
                  <strong>Course: </strong><small>{schedule.course.name}</small> 
                  <br /> 
                  <strong>Teacher: </strong><small>{schedule.teacher?.firstName} {schedule.teacher?.lastName}</small> <br />
                  <ScheduleUpdater callback={() => this.getSchedules()} scheduleId={schedule.id} period={schedule.period} ></ScheduleUpdater>
                </td>))}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
