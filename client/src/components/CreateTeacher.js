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
      highschoolMath: document.getElementById("teacherHighschoolMath").value,
      highschoolELA: document.getElementById("teacherHighschoolELA").value,
      highschoolHistory: document.getElementById("teacherHighschoolHistory").value,
      highschoolScience: document.getElementById("teacherHighschoolScience").value,
      elective: document.getElementById("teacherElective").value,
      p1: document.getElementById("teacherP1").value,
      p2: document.getElementById("teacherP2").value,
      p3: document.getElementById("teacherP3").value,
      p4: document.getElementById("teacherP4").value,
      p5: document.getElementById("teacherP5").value,
      p6: document.getElementById("teacherP6").value,
      p7: document.getElementById("teacherP7").value,
      p8: document.getElementById("teacherP8").value,
      p9: document.getElementById("teacherP9").value,
      p10: document.getElementById("teacherP10").value

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
                    <Label for="teacherEmail">Email</Label>
                    <Input
                      type="text"
                      name="teacherEmail"
                      id="teacherEmail"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="teacherPhone">Phone</Label>
                    <Input
                      type="text"
                      name="teacherPhone"
                      id="teacherPhone"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <Label for="teacherLink">Link</Label>
                    <Input
                      type="text"
                      name="teacherLink"
                      id="teacherLink"
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
              <Container>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="teacherElementary">Elementary</Label>
                      <Input type="select" name="teacherElementary" id="teacherElementary">
                        <option></option>
                        <option value="1">Uncomfortable</option>
                        <option value="2">Comfortable</option>
                        <option value="3">Preferred</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherMiddle">Middle School</Label>
                      <Input type="select" name="teacherMiddle" id="teacherMiddle">
                        <option></option>
                        <option value="1">Uncomfortable</option>
                        <option value="2">Comfortable</option>
                        <option value="3">Preferred</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherElective">Elective</Label>
                      <Input type="select" name="teacherElective" id="teacherElective">
                        <option></option>
                        <option value="1">Uncomfortable</option>
                        <option value="2">Comfortable</option>
                        <option value="3">Preferred</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="teacherHighschoolMath">Highschool Math</Label>
                      <Input type="select" name="teacherHighschoolMath" id="teacherHighschoolMath">
                        <option></option>
                        <option value="1">Uncomfortable</option>
                        <option value="2">Comfortable</option>
                        <option value="3">Preferred</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherHighschoolELA">Highschool ELA</Label>
                      <Input type="select" name="teacherHighschoolELA" id="teacherHighschoolELA">
                        <option></option>
                        <option value="1">Uncomfortable</option>
                        <option value="2">Comfortable</option>
                        <option value="3">Preferred</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherHighschoolHistory">Highschool History</Label>
                      <Input type="select" name="teacherHighschoolHistory" id="teacherHighschoolHistory">
                        <option></option>
                        <option value="1">Uncomfortable</option>
                        <option value="2">Comfortable</option>
                        <option value="3">Preferred</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherHighschoolMath">Highschool Science</Label>
                      <Input type="select" name="teacherHighschoolMath" id="teacherHighschoolMath">
                        <option></option>
                        <option value="1">Uncomfortable</option>
                        <option value="2">Comfortable</option>
                        <option value="3">Preferred</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
              <Container>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP1">Period 1</Label>
                      <Input type="select" name="teacherP1" id="teacherP1">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP2">Period 2</Label>
                      <Input type="select" name="teacherP2" id="teacherP2">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP3">Period 3</Label>
                      <Input type="select" name="teacherP3" id="teacherP3">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP4">Period 4</Label>
                      <Input type="select" name="teacherP4" id="teacherP4">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP5">Period 5</Label>
                      <Input type="select" name="teacherP5" id="teacherP5">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP6">Period 6</Label>
                      <Input type="select" name="teacherP6" id="teacherP6">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP7">Period 7</Label>
                      <Input type="select" name="teacherP7" id="teacherP7">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP8">Period 8</Label>
                      <Input type="select" name="teacherP8" id="teacherP8">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP9">Period 9</Label>
                      <Input type="select" name="teacherP9" id="teacherP9">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="teacherP10">Period 10</Label>
                      <Input type="select" name="teacherP10" id="teacherP10">
                        <option>Yes</option>
                        <option>No</option>
                      </Input>
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
