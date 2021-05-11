import { Component } from "react";


export default class CampusSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = { campus: null};
  }

  componentDidUpdate(prevProps) {
    if (prevProps.campus === this.props.campus) {
      return
    }
    console.log(this.props.campus)
    fetch(`http://localhost:3001/teachers/${this.props.campus.id}/schedules`) //Fetch TeacherSchedule Table from API
      .then((response) => response.json()) //Convert response to a JSON object
      .then((data) => {
        console.log(data)
        this.setState({
          campusSchedule: data,                   //Create relationship between teacherschedule state array and JSON object
        });
      });
  }


}
