import { Component } from "react";
import {baseURL} from "../baseURL";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Container
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
    fetch(`${baseURL}/spedQuestions`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        spedQuestions: data.filter(datas => datas.student.id === this.props.student),
      });
    });
  }

  componentDidUpdate() {
    if(this.props.submitted) {
      this.createSpedResponseNinja();
      return
    }
  }
  
  async createSpedResponse(i) {
    const spedResponseObject = {
      date: document.getElementById("spedResponseDate").value,
      question: i.question,
      meet: document.getElementById("spedResponseMeet"+i.id).value,
      success: document.getElementById("spedResponseSuccess"+i.id).value,
      opportunity: document.getElementById("spedResponseOpportunity"+i.id).value,
      response: document.getElementById("spedResponseResponse"+i.id).value,
      students: this.props.student,
      spedQuestions: i.id
    };
    const spedResponse = await spedResponseService.create(spedResponseObject);
    fetch({baseURL}+"/spedResponses")
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

  createSpedResponseNinja() {this.state.spedQuestions.forEach((scheduleQuestion =>
  this.createSpedResponse(scheduleQuestion)))}
  

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
              <Container id="trackerBox">
                <FormGroup>
                  <Label for="spedResponseQuestion" id={`spedResponseQuestion${spedQuestion?.id}`} value={spedQuestion?.id}>{spedQuestion.question} </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input 
                    type="select"
                    id={`spedResponseMeet${spedQuestion?.id}`}>
                      <option></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </Input>
                    Did {spedQuestion.students?.firstName} meet this goal?
                  </Label>
                </FormGroup>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="spedResponseSuccess">Successes </Label>
                      <Input
                        type="number"
                        id={`spedResponseSuccess${spedQuestion?.id}`}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="spedResponseOpportunity">Opportunities </Label>
                      <Input
                        type="number"
                        id={`spedResponseOpportunity${spedQuestion?.id}`}
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="spedResponseResponse">Comment </Label>
                  <Input
                    type="string"
                    id={`spedResponseResponse${spedQuestion?.id}`}
                  />
                </FormGroup>
              </Container>
              </div>
              ))}
            </Form>
      </div>
    );
  }

}
