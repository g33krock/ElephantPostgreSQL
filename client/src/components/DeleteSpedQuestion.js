import { Component } from "react";
import { Button, Modal, ModalBody, Form } from "reactstrap"; 
import { spedQuestionService } from "../services/spedQuestionService";
  export class DeleteSpedQuestion extends Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false,
      };
    }
    render() {
      return (
        <div>
          <Button outline color="danger" size="sm" onClick={() => this.setState({ modal: true })}>
            Delete Question
          </Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalBody>
              <Form>
                <h2>Are you sure you want to delete: {this.props.spedQuestion}?</h2>
                <Button
                  outline color="primary"
                  onClick={() => {
                    this.deleteSpedQuestion();
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
    deleteSpedQuestion(){
      const spedQuestionObject = {
        spedQuestionId: this.props.spedQuestionId
      };
      const spedQuestion =  spedQuestionService.delete(spedQuestionObject);
      console.log(spedQuestion)
    }
  }

    
    
