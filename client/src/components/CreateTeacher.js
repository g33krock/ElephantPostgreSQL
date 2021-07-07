import { Component } from "react";
import {baseURL} from "../baseURL";
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
import { teacherService } from "../services/teacherService";


export class TeacherCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  async createTeacher() {
    const teacherObject = {
      firstName: document.getElementById("teacherFirstName").value,
      lastName: document.getElementById("teacherLastName").value,
      birthDate: document.getElementById("birthDate").value,
      role: document.getElementById("teacherRole").value,
      campuses: document.getElementById("teacherCampus").value,
      email: document.getElementById("teacherEmail").value,
      phone: document.getElementById("teacherPhone").value,
      link: document.getElementById("teacherLink").value,
      elementary: document.getElementById("teacherElementary").value,
      middle: document.getElementById("teacherMiddle").value,
      highschoolAlgebraOne: document.getElementById("teacherHighschoolMath").value,
      highschoolELA: document.getElementById("teacherHighschoolELA").value,
      highschoolHistory: document.getElementById("teacherHighschoolHistory").value,
      highschoolScience: document.getElementById("teacherHighschoolScience").value,
      elective: document.getElementById("teacherElective").value,
    };
    const teacher = await teacherService.create(teacherObject);
    fetch(`${baseURL}/teachers`)
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        teachers: data,
      });
    });
    console.log(teacher);
  }

  toggle() {
    return !this.state.modal;
  }

  render() {
    return (
      <div>
        <Button color="link" onClick={() => this.setState({ modal: true })}>
          Add Teacher
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalBody>
            <Form>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="teacherFirstName">First Name</Label>
                    <Input
                      type="text"
                      name="teacherFirstName"
                      id="teacherFirstName"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="teacherLastName">Last Name</Label>
                    <Input
                      type="text"
                      name="teacherLastName"
                      id="teacherLastName"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="birthDate">Date of Birth</Label>
                    <Input
                      type="date"
                      name="birthDate"
                      id="birthDate"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="teacherRole">Role</Label>
                    <Input type="select" name="teacherRole" id="teacherRole">
                      <option></option>
                      <option value="1">Campus Director</option>
                      <option value="2">Teacher Lead</option>
                      <option value="3">Teacher</option>
                      <option value="4">Paraprofessional</option>
                      <option value="7">Sped Coordinator</option>
                      <option value="5">District Administrator</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="IEP">IEP</Label>
                    <Input type="select" name="IEP" id="IEP">
                      <option></option>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="teacherCampus">Teacher Campus</Label>
                    <Input type="select" name="teacherCampus" id="teacherCampus">
                      <option></option>
                      <option value="1">Tempe</option>
                      <option value="2">Queen Creek</option>
                      <option value="3">Litchfield Park</option>
                      <option value="4">Scottsdale</option>
                      <option value="5">Tucson</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="teacherFunding">Funding Source</Label>
                    <Input type="select" name="teacherFunding" id="teacherFunding">
                      <option></option>
                      <option value="1">ESA</option>
                      <option value="2">District</option>
                      <option value="3">Private Pay</option>
                      <option value="4">Scholarship</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="teacherInstructionMode">Instruction Mode</Label>
                    <Input type="select" name="teacherInstructionMode" id="teacherInstructionMode">
                      <option></option>
                      <option value="1">Ground</option>
                      <option value="2">Home</option>
                      <option value="3">Virtual</option>
                      <option value="4">Campus/Home</option>
                      <option value="5">Campus/Virtual</option>
                      <option value="6">Home/Virtual</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="previousSchools">Previous School(s)</Label>
                    <Input
                      type="text"
                      name="previousSchools"
                      id="previousSchools"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Container>
                <Row>
                  <Col>
                    <h3>Medical</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="hearingLimitations">Hearing</Label>
                      <Input
                        type="text"
                        name="hearingLimitations"
                        id="hearingLimitations"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="visionLimitations">Vision</Label>
                      <Input
                        type="text"
                        name="visionLimitations"
                        id="visionLimitations"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="mobilityLimitations">Mobility</Label>
                      <Input
                        type="text"
                        name="mobilityLimitations"
                        id="mobilityLimitations"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="allergies">Allergies</Label>
                    <Input
                      type="text"
                      name="allergies"
                      id="allergies"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="therapies">Therapies</Label>
                    <Input
                      type="text"
                      name="therapies"
                      id="therapies"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="sensitivities">Sensitivities</Label>
                    <Input
                      type="text"
                      name="sensitivities"
                      id="sensitivities"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Container>
                <Row>
                  <Col>
                    <h3>Describe your teacher in the following areas:</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="social">Social</Label>
                      <Input
                        type="text"
                        name="social"
                        id="social"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="emotional">Emotional</Label>
                      <Input
                        type="text"
                        name="emotional"
                        id="emotional"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="physical">Physical</Label>
                      <Input
                        type="text"
                        name="physical"
                        id="physical"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="math">Math</Label>
                      <Input
                        type="text"
                        name="math"
                        id="math"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="reading">Reading</Label>
                      <Input
                        type="text"
                        name="reading"
                        id="reading"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="writing">Writing</Label>
                      <Input
                        type="text"
                        name="writing"
                        id="writing"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>
                    <h3>What are your teacher's interests?</h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="interests">Interests</Label>
                      <Input
                        type="text"
                        name="interests"
                        id="interests"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
              <Button
                color="primary"
                onClick={() => {
                  this.createTeacher();
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
