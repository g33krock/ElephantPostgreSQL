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
import { studentService } from "../services/studentService";
import { EmptyScheduleCreator } from "./EmptySchedule";

export class StudentCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  async createStudent() {
    const studentObject = {
      firstName: document.getElementById("studentFirstName").value,
      lastName: document.getElementById("studentLastName").value,
      grade: document.getElementById("studentGrade").value,
      campuses: document.getElementById("studentCampus").value,
      iep: document.getElementById("IEP").value
    };
    const student = await studentService.create(studentObject);
    fetch("http://localhost:3001/students")
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        students: data,
      });
    });
    const studentES = this.state.students.find(student => student.firstName === studentObject.firstName && student.lastName === studentObject.lastName)
    const studentId = studentES.id
    await EmptyScheduleCreator.emptySchedule(studentId)
    console.log(student);
  }

  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
      <div>
        <Button outline color="primary" onClick={() => this.setState({ modal: true })}>
          Add Student
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="studentFirstName">Student First Name</Label>
                <Input
                  type="text"
                  name="studentFirstName"
                  id="studentFirstName"
                />
              </FormGroup>
              <FormGroup>
                <Label for="studentLastName">Student Last Name</Label>
                <Input
                  type="text"
                  name="studentLastName"
                  id="studentLastName"
                />
              </FormGroup>
              <FormGroup>
                <Label for="studentGrade">Grade Level</Label>
                <Input type="select" name="studentGrade" id="studentGrade">
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                </Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input id="IEP" type="checkbox" /> IEP
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="studentCampus">Student Campus</Label>
                <Input type="select" name="studentCampus" id="studentCampus">
                  <option value="1">Tempe</option>
                  <option value="2">Queen Creek</option>
                  <option value="3">Litchfield Park</option>
                  <option value="4">Scottsdale</option>
                  <option value="5">Tucson</option>
                </Input>
              </FormGroup>
              <Button
                color="primary"
                onClick={() => {
                  this.createStudent();
                  this.setState({ modal: false })
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
