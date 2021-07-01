import React, { Component } from "react";
import { baseURL } from "../baseURL";
import {
  Card,
  Row,
  Col,
  CardImg,
  CardBody,
  Label,
  Container,
  NavLink,
  NavItem,
  Nav,
  TabContent,
  TabPane,
  Table,
} from "reactstrap";
import { TranscriptCreator } from "./CreateTranscript";
import classnames from "classnames";

export default class Transcript extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
    };
    this.state = { students: [], student: null, id: null, transcripts: [] };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  componentDidMount() {
    // Fetch Student Table from API
    fetch(`${baseURL}/students`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          students: data,
        });
      });
    fetch(`${baseURL}/transcripts`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          transcripts: data,
        });
      });
  }


  onChange = (e) => {
    const studentId = Number(e.target.value);
    const student = this.state.students.find(
      (student) => student.id === studentId
    );
    this.setState({ student });
    console.log(this.state);
    console.log(e.target.value);
  };

  render() {
    const first = this.state.student?.firstName;
    const last = this.state.student?.lastName;
    return (
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Raw Data
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Transcript Entries
            </NavLink>
          </NavItem>
        </Nav>

        <Row>
          <Col>
            <Label for="scheduleStudent">Select Student</Label>
            <select id="scheduleStudent" onChange={this.onChange}>
              <option selected>None</option>
              {this.state.students.map((student) => (
                <option key={student.id} value={student.id}>
                  {student.firstName} {student.lastName}
                </option>
              ))}
            </select>
          </Col>
        </Row>
        <h1>
          Student: {first} {last}
        </h1>
        <div className="row">
          <div className="col-md-3">
            <Card body outline color="primary">
              {this.state.student && (
                <CardImg
                  src={`${this.state.student?.profile_image}`}
                  alt={`${this.state.student?.firstName}`}
                ></CardImg>
              )}
              {this.state.student && (
                <CardBody>
                  <p>
                    <strong>Campus:</strong> {this.state.student.campuses.name}
                  </p>
                  <p>
                    <strong>Grade:</strong> {this.state.student.grade}
                  </p>
                  <p>
                    <strong>Additional Information:</strong>{" "}
                    {this.state.student.additional_information}
                  </p>
                  <TranscriptCreator
                    student={this.state.student}
                    studentId={this.state.student?.id}
                  ></TranscriptCreator>
                </CardBody>
              )}
            </Card>
          </div>
          <div className="col-md-9">
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                Heyo!
              </TabPane>
              <TabPane tabId="2">
                <div class="tableFixHead">
                  <Table bordered hover size="sm">
                    <thead class="shadow">
                      <tr>
                        <th>
                          <h3>Date</h3>
                        </th>
                        <th>
                          <h3>Category</h3>
                        </th>
                        <th>
                          <h3>Course</h3>
                        </th>
                        <th>
                          <h3>Teacher</h3>
                        </th>
                        <th>
                          <h3>Grade</h3>
                        </th>
                        <th>
                          <h3>Credit</h3>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.transcripts
                        .filter(
                          (studentQ) =>
                            studentQ.student?.id === this.state.student?.id
                        )
                        .map((tran) => (
                          <tr>
                            <th key={tran.id}>{tran.date}</th>
                            <td>
                              <small>{tran.category}</small>
                            </td>
                            <td>
                              <small>{tran.courses?.name}{tran?.altCourse}</small>
                            </td>
                            <td>
                              <small>{tran.teachers?.firstName} {tran.teachers?.lastName}{tran?.altTeacher}</small>
                            </td>
                            <td>
                              <small>{tran.grade}</small>
                            </td>
                            <td>
                              <small>{tran.credit}</small>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </Container>
    );
  }
}
