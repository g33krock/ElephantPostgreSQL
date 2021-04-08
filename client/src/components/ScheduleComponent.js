import React, { Component } from 'react';
import { ScheduleService } from '../services/ScheduleService';

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      periods: 7
    }
  }
  componentDidMount() {
    ScheduleService.getStudentsSchedule().then((periods) => {
      this.setState({periods})
    })  
  }
}


export default Schedule;