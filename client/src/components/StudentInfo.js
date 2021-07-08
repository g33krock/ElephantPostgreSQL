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
                <h3>{this.props.student?.firstName} {this.props.student?.lastName}</h3>
              </CardTitle>
              <CardBody>
                <p><strong>Grade:</strong> {this.props.student?.grade}</p>
                <p>
                  <strong>Medical Information:</strong> {this.props.student?.medical_information}
                </p>
                <p>
                  <strong>Additional Information:</strong>{" "}
                  {this.props.student?.additional_information}
                </p>
                {this.props.student?.guardians.map((guardian) => (
                  <div>
                    <p>
                      <strong>Parent:</strong> {guardian?.firstName} {guardian?.lastName}
                    </p>
                    <p><strong>Email:</strong> {guardian?.email}</p>
                    <p><strong>Phone:</strong> {guardian?.phone}</p>
                    <p><strong>Address:</strong> {guardian?.address}</p>
                  </div>
                ))}
                <p><strong>Funding:</strong> {this.props.student?.funding.type}</p>
                <p><strong>Instruction Mode:</strong> {this.props.student?.instructionmode.type}</p>
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
