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

export class StudentUpdater extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  async updateStudent() {
    const studentObject = {
      studentID: this.props.studentId,
      firstName: document.getElementById("studentFirstName").value,
      lastName: document.getElementById("studentLastName").value,
      grade: document.getElementById("studentGrade").value,
      campuses: document.getElementById("studentCampus").value,
      iep: document.getElementById("IEP").value
    };
    const student = await studentService.update(studentObject);
    console.log(student)
  }

  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
      <div>
        <Button outline color="success" onClick={() => this.setState({ modal: true })}>
          Update Student
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="studentFirstName">Student First Name</Label>
                <Input
                  defaultValue={this.props.studentFirstName}
                  type="text"
                  name="studentFirstName"
                  id="studentFirstName"
                />
              </FormGroup>
              <FormGroup>
                <Label for="studentLastName">Student Last Name</Label>
                <Input
                  defaultValue={this.props.studentLastName}
                  type="text"
                  name="studentLastName"
                  id="studentLastName"
                />
              </FormGroup>
              <FormGroup>
                <Label for="studentGrade">Grade Level</Label>
                <Input type="select" name="studentGrade" id="studentGrade" defaultValue={this.props.studentGrade}>
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
                  <Input id="IEP" type="checkbox" defaultValue={this.props.studentIEP}/> IEP
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="studentCampus">Student Campus</Label>
                <Input type="select" name="studentCampus" id="studentCampus" defaultValue={this.props.studentCampus}>
                  <option value="1">Tempe</option>
                  <option value="2">Queen Creek</option>
                  <option value="3">Litchfield Park</option>
                  <option value="4">Scottsdale</option>
                  <option value="5">Tucson</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="medInfo">Medical Information</Label>
                <Input
                  defaultValue={this.props.studentMedInfo}
                  type="text"
                  name="medInfo"
                  id="medInfo"
                />
              </FormGroup>
              <FormGroup>
                <Label for="addInfo">Additional Information</Label>
                <Input
                  defaultValue={this.props.studentAddInfo}
                  type="text"
                  name="addInfo"
                  id="addInfo"
                />
              </FormGroup>
              <Button
                color="primary"
                onClick={() => {
                  this.updateStudent();
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
