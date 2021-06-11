import { Component } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";
import { spedResponseService } from "../services/spedResponseService";


export class SpedResponseCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      spedQuestions:[]
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/spedQuestions")
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        spedQuestions: data.filter(datas => datas.student.id === this.props.student),
      });
    });
  }
  
  async createSpedResponse(i) {
    const spedResponseObject = {
      date: document.getElementById("spedResponseDate").value,
      question: i.question,
      response: document.getElementById("spedResponseResponse"+i.id).value,
      students: this.props.student,
      spedQuestions: i.id
    };
    const spedResponse = await spedResponseService.create(spedResponseObject);
    fetch("http://localhost:3001/spedResponses")
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        spedResponse: data,
      });
    });
    console.log(spedResponse);
  }

  toggle() {
    return !this.state.modal;
  }
  

  render() {
    return (
      <div>
            <Form>
            
              <FormGroup>
                <Label for="spedResponseDate">Date</Label>
                <Input
                  type="date"
                  name={`spedResponseDate`}
                  id={`spedResponseDate`}
                />
              </FormGroup>
              {this.state.spedQuestions.map((spedQuestion => 
            <div>
              <FormGroup>
                <Label for="spedResponseQuestion" id={`spedResponseQuestion${spedQuestion?.id}`} value={spedQuestion?.id}>{spedQuestion.question} </Label>
              </FormGroup>
              <FormGroup>
                <Label for="spedResponseResponse">Response </Label>
                <Input
                  type="string"
                  id={`spedResponseResponse${spedQuestion?.id}`}
                />
              </FormGroup>
              </div>
              ))}
              <Button
                color="primary"
                onClick={() => {
                  this.state.spedQuestions.map((scheduleQuestion =>
                  this.createSpedResponse(scheduleQuestion)))
                  
                }}
              >
                Submit
              </Button>
            </Form>
      </div>
    );
  }

}
