import { Component } from "react";
import { Button, Modal, ModalBody, Form } from "reactstrap"; 
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
      console.log(`${this.props.studentId}`)
      const response = fetch("http://localhost:3001/students/"+this.props.studentId, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      const dData = response;
    console.log(dData);
    }
  }

    
    
