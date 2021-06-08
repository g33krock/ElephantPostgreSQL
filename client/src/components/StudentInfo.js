import { Component } from "react";
import {
  Button,
  Modal,
  ModalBody,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";

export class StudentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
      <div>
        <Button color="link" onClick={() => this.setState({ modal: true })}>
          Student Info
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Card>
              <CardTitle>
                {this.props.student.firstName} {this.props.student.lastName}
              </CardTitle>
              <CardBody>
                <p>Grade: {this.props.student.grade}</p>
                <p>
                  Medical Information: {this.props.student.medical_information}
                </p>
                <p>
                  Additional Information:{" "}
                  {this.props.student.additional_information}
                </p>
                {this.props.student.guardians.map((guardian) => (
                  <div>
                    <p>
                      Parent: {guardian.firstName} {guardian.lastName}
                    </p>
                    <p>Email: {guardian.email}</p>
                    <p>Phone: {guardian.phone}</p>
                    <p>Address: {guardian.address}</p>
                  </div>
                ))}
              </CardBody>
            </Card>
            <Button
              color="danger"
              onClick={() => this.setState({ modal: false })}
            >
              Close
            </Button>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
