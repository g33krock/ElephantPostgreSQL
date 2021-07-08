import { Component } from "react";
import {baseURL} from "../baseURL";
import { fetcher } from '../services/fetcher';


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
    fetcher(`${baseURL}/teachers/${this.props.campus.id}/schedules`) //Fetch TeacherSchedule Table from API
      .then((response) => response.json()) //Convert response to a JSON object
      .then((data) => {
        console.log(data)
        this.setState({
          campusSchedule: data,                   //Create relationship between teacherschedule state array and JSON object
        });
      });
  }


}
