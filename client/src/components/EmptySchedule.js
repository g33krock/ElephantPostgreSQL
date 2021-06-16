import { Component } from "react";
import {
  Button,
} from "reactstrap";
import { scheduleService } from "../services/scheduleService";

export class EmptyScheduleCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async emptySchedule() {
    for(let i=1; i < 11; i++) {
    const scheduleObject = {
      student: this.props.studentId,
      period:i, 
      teacher: 1, 
      course: 1, 
      campus: this.props.campusId
      
    };
    console.log(scheduleObject.student)
    
    const schedule = await scheduleService.create(scheduleObject);
    console.log(schedule)}
  }

  render() {
    return (
      <div>
        <Button outline color="primary" size="sm" onClick={() => this.emptySchedule()}>
          Add Schedule
        </Button>
    </div>
    )}
}