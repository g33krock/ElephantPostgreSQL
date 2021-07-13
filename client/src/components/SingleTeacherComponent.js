import React, { Component } from "react";
import {baseURL} from "../baseURL";
import { Container } from "reactstrap";
import TeacherSchedule from "./TeacherScheduleComponent";
import { fetcher } from "../services/fetcher";


export default class SingleTeacher extends Component {
  constructor(props) {
    super(props);
    this.state = { teachers: [], teacher: null };
  }

  componentDidMount() {
    // Fetch Student Table from API
    fetcher(`${baseURL}/teachers`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          teachers: data,
          teacher: this.state.teachers.find(teacher => teacher.email === this.props?.userEmail)
        });
      });
  }

  
  render() {
    return (
      <Container>
        <h1 className="perfectdark">Hello {this.state.teacher?.firstName}</h1>
        {this.state.teacher && <TeacherSchedule teacher={this.state.teacher}></TeacherSchedule>}
      </Container>
    );
  }
}
