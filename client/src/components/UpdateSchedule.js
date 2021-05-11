import { Component } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalBody,
} from "reactstrap";
import { scheduleService } from "../services/scheduleService";

export class ScheduleUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      teachers: null,
      courses: null,
    };
  }

  componentDidMount() {
    // Fetch Student Table from API
    fetch("http://localhost:3001/teachers")
      // Convert response to a JSON object
      .then((response) => response.json())
      .then((data) => {
        // Create relationship between students state array and JSON object
        this.setState({
          teachers: data,
        });
      });
    fetch("http://localhost:3001/courses")
      // Convert response to a JSON object
      .then((response) => response.json())
      .then((data) => {
        // Create relationship between students state array and JSON object
        this.setState({
          courses: data,
        });
      });
  }

  async updateSchedule() {
    const scheduleObject = {
      scheduleID: this.props.scheduleId,
      teacherID: document.getElementById("scheduleTeacher").value,
      courseID: document.getElementById("scheduleCourse").value,
    };
    const schedule = await scheduleService.update(scheduleObject);
    console.log(schedule);
  }

  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
      <div>
        <Button
          outline
          color="success"
          onClick={() => this.setState({ modal: true })}
        >
          Update Schedule
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="scheduleTeacher">Select Teacher</Label>
                <Input type="select">
                  {this.state.teachers?.map((teacher) => (
                    <option value={teacher?.id}>
                      {teacher.firstName} {teacher.lastName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select">
                  {this.state.courses?.map((course) => (
                    <option value={course.id}>{course.name}</option>
                  ))}
                </Input>
              </FormGroup>
              <Button
                color="primary"
                onClick={() => {
                  this.updateStudent();
                  this.setState({ modal: false });
                }}
              >
                Submit
              </Button>
              <Button
                color="danger"
                onClick={() => this.setState({ modal: false })}
              >
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
