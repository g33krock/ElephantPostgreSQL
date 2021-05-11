import { Component } from "react";
import { Button, Modal, ModalBody, Form } from "reactstrap"; 
import { studentService } from "../services/studentService";
  export class DeleteStudent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
      };
    }
    render() {
      return (
        <div>
          <Button outline color="danger" onClick={() => this.setState({ modal: true })}>
            Delete Student
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              <Form>
                <h2>Are you sure you want to delete {this.props.studentFirstName} {this.props.studentLastName}?</h2>
                <Button
                  outline color="primary"
                  onClick={() => {
                    this.deleteStudent();
                    this.setState({ modal: false });
                  }}
                >
                  Submit
                </Button>
                <Button
                  outline color="danger"
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
    deleteStudent(){
      const studentObject = {
        studentID: this.props.studentId
      };
      const student =  studentService.delete(studentObject);
      console.log(student)
    }
  }

    
    
