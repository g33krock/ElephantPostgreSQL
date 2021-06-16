import { Component } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Modal,
  ModalBody,
  Row,
  Col,
  Container
} from "reactstrap";
import { trackerService } from "../services/trackerService";
import { SpedResponseCreator } from "./CreateSpedResponse";

export class TrackerCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      submitted:false
    };
  }

  async createTracker() {
    const trackerObject = {
      students: this.props.student.id,
      teachers: this.props.teacher.id,
      courses: this.props.course.id,
      period: this.props.period,
      attendance: document.getElementById("attendance").value,
      lesson: document.getElementById("lesson").value,
      comprehension: document.getElementById("comprehension").value,
      comprehensionAI: document.getElementById("comprehensionAI").value,
      comprehensionComment: document.getElementById("comprehensionComment").value,
      engagement: document.getElementById("engagement").value,
      engagementAI:document.getElementById("engagementAI").value,
      engagementComment: document.getElementById("engagementComment").value,
      behavior: document.getElementById("behavior").value,
      behaviorAI: document.getElementById("behaviorAI").value,
      behaviorComment: document.getElementById("behaviorComment").value,
      assessment: document.getElementById("assessment").value,
    };
    const tracker = await trackerService.create(trackerObject);
    console.log(tracker)
  }

  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
      <div>
        <Button
          color="link"
          onClick={() => this.setState({ modal: true })}
        >
          Student Tracking
        </Button>
        <Modal isOpen={this.state.modal} toggle={() => this.toggle()}>
          <ModalBody id="fancy-cursor" style={{ backgroundColor: "lightgray", color: 'black', fontSize: '21px', textAlign: 'center'}}>
            <p>
              <strong>Student: </strong>
              {this.props.student.firstName} {this.props.student.lastName}
            </p>
            <p>
              <strong>Teacher: </strong>
              {this.props.teacher.firstName} {this.props.teacher.lastName}
            </p>
            <p>
              <strong>Course: </strong>
              {this.props.course.name}
            </p>
            <p>
              <strong>Period: </strong>
              {this.props.period}
            </p>
            <Form className="fancy-cursor">
              <FormGroup id="trackerBox">
                <Label for="attendance">
                  <h3>Attendance</h3>
                </Label>
                <Input type="select" name="attendance" id="attendance" className="fancy-cursor">
                  <option></option>
                  <option>Present</option>
                  <option>Absent</option>
                </Input>
              </FormGroup>
              <FormGroup id="trackerBox">
                <Label for="lesson">
                  <h3>Lesson Description</h3>
                </Label>
                <Input type="text" name="lesson" id="lesson" className="fancy-cursor" />
              </FormGroup>
              <Container style={{ backgroundColor: "tan" }} id="trackerBox">
                <h3>Check for Understanding</h3>
                <Row form>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="comprehension">Check for Understanding</Label>
                      <Input
                        type="select"
                        name="comprehension"
                        id="comprehension"
                        className="fancy-cursor"
                      >
                        <option></option>
                        <option value="1">Not Understanding</option>
                        <option value="2">Superficial Understanding</option>
                        <option value="3">Developing</option>
                        <option value="4">Solid Mastery</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup>
                      <Label for="comprehensionAI">
                        Check for Understanding Additional Information
                      </Label>
                      <Input
                        type="select"
                        name="comprehensionAI"
                        id="comprehensionAI"
                        className="fancy-cursor"
                        multiple
                      >
                        <option>Requires review of basic content</option>
                        <option>Processing/Memory/Retrieval issues</option>
                        <option>Requires review of current content</option>
                        <option>Requires modifications to content</option>
                        <option>
                          Requires differentiation and infusion to enhance
                          understanding
                        </option>
                        <option>
                          Requires assistance/ support from leadership
                        </option>
                        <option>
                          Requires use of support materials/ tools
                        </option>
                        <option>Reading/ Comprehension issues</option>
                        <option>Specific Learning Disabilities</option>
                        <option>Requires behavioral support</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="comprehensionComment">
                    Check for Understanding Comment
                  </Label>
                  <Input
                    type="text"
                    name="comprehensionComment"
                    id="comprehensionComment"
                    className="fancy-cursor"
                  />
                </FormGroup>
              </Container>
              <Container style={{ backgroundColor: "lightblue" }} id="trackerBox">
                <h3>Engagement</h3>
                <Row form>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="engagement">Engagement</Label>
                      <Input type="select" name="engagement" id="engagement" className="fancy-cursor">
                        <option></option>
                        <option value="1">
                          Disengaged: No demonstration of learning, disruptive/
                          defiant/ avoidant
                        </option>
                        <option value="2">
                          Retreatism: Little to no effort, productivity or
                          inquiry, interest, or collaboration, no demonstrated
                          inquiry
                        </option>
                        <option value="3">
                          Ritual: Minimal effort to avoid negative consequences,
                          no self-directed/ motivated, minimal inquiry
                        </option>
                        <option value="4">
                          Strategic: Clear effort, focus on directions and task
                          completion to meet standard, minimal inquiry
                        </option>
                        <option value="5">
                          High: Persistent, sustained inquiry, self-directed
                          learning, self motivated, highly engaged in learning
                        </option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup>
                      <Label for="engagementAI">
                        Engagement Additional Information
                      </Label>
                      <Input
                        type="select"
                        name="engagementAI"
                        id="engagementAI"
                        className="fancy-cursor"
                        multiple
                      >
                        <option>Work refusal</option>
                        <option>Oppositionality</option>
                        <option>Disruptive to others</option>
                        <option>Aggression (verbal)</option>
                        <option>Aggression (physical)</option>
                        <option>
                          Involved in other tasks/ activities/ behaviors
                        </option>
                        <option>Attention seeking behaviors (negative)</option>
                        <option>
                          Self-harm behaviors (verbally or physically)
                        </option>
                        <option>Negative attitude</option>
                        <option>Shut down/ lack of participation</option>
                        <option>Minimal Effort</option>
                        <option>Requires Incentives</option>
                        <option>Not interested in topic/ content</option>
                        <option>Highly interested in topic/ content</option>
                        <option>Emotional Difficulty Anxiety</option>
                        <option>Emotional Difficulty Depression</option>
                        <option>Medical Issue</option>
                        <option>
                          Requires Assistance/ Support from Leadership
                        </option>
                        <option>Requires Behavioral Support</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="engagementComment">Engagement Comment</Label>
                  <Input
                    type="text"
                    name="engagementComment"
                    id="engagementComment"
                    className="fancy-cursor"
                  />
                </FormGroup>
              </Container>
              <Container style={{ backgroundColor: "gold" }} id="trackerBox">
                <h3>Behavior/Zone</h3>
                <Row form>
                  <Col md={3}>
                    <FormGroup>
                      <Label for="behavior">Behavior/Zone of Regulation</Label>
                      <Input type="select" name="behavior" id="behavior" className="fancy-cursor">
                        <option></option>
                        <option
                          id="zone"
                          style={{ backgroundColor: "green", color:"white" }}
                          value="1"
                        >
                          Green Zone (happy, focused, calm, ready to learn)
                        </option>
                        <option
                          id="zone"
                          style={{ backgroundColor: "orange" }}
                          value="2"
                        >
                          Yellow Zone (loss of some control, excited,
                          silly/wiggly, frustrated)
                        </option>
                        <option
                          id="zone"
                          style={{ backgroundColor: "blue", color:"white" }}
                          value="3"
                        >
                          Blue Zone (sad, sick, moving slowly, shut down, tired,
                          anxious)
                        </option>
                        <option
                          id="zone"
                          style={{ backgroundColor: "red", color:"white" }}
                          value="4"
                        >
                          Red Zone (angry, mad, aggressive verbally/physically)
                        </option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={9}>
                    <FormGroup>
                      <Label for="behaviorAI">
                        Behavior/Zone Additional Information
                      </Label>
                      <Input
                        type="select"
                        name="behaviorAI"
                        id="behaviorAI"
                        className="fancy-cursor"
                        multiple
                      >
                        <option>Out of seat</option>
                        <option>Loss of Control</option>
                        <option>Talking Out</option>
                        <option>Unfocused</option>
                        <option>Low Attention</option>
                        <option>Sick</option>
                        <option>Sad</option>
                        <option>Head Down</option>
                        <option>Anxious</option>
                        <option>Low attention due to being tired</option>
                        <option>Low communication</option>
                        <option>Physical aggression toward teachers</option>
                        <option>Physical aggression toward peers</option>
                        <option>Verbal aggression toward teachers</option>
                        <option>Verbal aggression toward peers</option>
                        <option>Self-injurious behavior</option>
                        <option>Property Destruction</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <FormGroup>
                  <Label for="behaviorComment">Behavior/Zone Comment</Label>
                  <Input
                    type="text"
                    name="behaviorComment"
                    id="behaviorComment"
                    className="fancy-cursor"
                  />
                </FormGroup>
              </Container>
              <FormGroup id="trackerBox">
                <Label for="assessment">
                  <h3>Assessment</h3>
                </Label>
                <Input type="text" name="assessment" id="assessment" className="fancy-cursor"/>
              </FormGroup>
              <SpedResponseCreator submitted={this.state.submitted}
              student={this.props.student.id} ></SpedResponseCreator>
              <Button
                color="primary"
                onClick={() => {
                  this.createTracker();
                  this.setState({ modal: false, submitted:true });
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
