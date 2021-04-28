import { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Modal, ModalBody } from "reactstrap";

export class StudentCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        modal: false,
    }
}
  
    static async createStudent() {
        let firstName = document.getElementById('studentFirstName').value;
        let lastName = document.getElementById('studentLastName').value;
        let grade = document.getElementById('studentGrade').value;
        let campuses = document.getElementById('studentCampus').value;
        let iep = document.getElementById('IEP').value;
        const response = await fetch('http://localhost:3001/students', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstName, lastName, campuses, grade, iep}),
        });
        const data = await response.text();
        console.log(data)
    }
    render(){
        const toggle = () => !this.state.modal;
        return(
            <div>
                <Button color="danger" onClick={() => this.setState({ modal: true })}>Ahoy!</Button>
            <Modal isOpen={this.state.modal} toggle={toggle}>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="studentFirstName">Student First Name</Label>
                            <Input type="text" name="studentFirstName" id="studentFirstName" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="studentLastName">Student Last Name</Label>
                            <Input type="text" name="studentLastName" id="studentLastName" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="studentGrade">Student Last Name</Label>
                            <Input type="select" name="studentGrade" id="studentGrade">
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input id="IEP" type="checkbox" />{' '}
                                IEP
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="studentCampus">Student Campus</Label>
                            <Input type="select" name="studentCampus" id="studentCampus">
                                <option value='1'>Tempe</option>
                                <option value='2'>Queen Creek</option>
                                <option value='3'>Litchfield Park</option>
                                <option value='4'>Scottsdale</option>
                                <option value='5'>Tucson</option>
                            </Input>
                        </FormGroup>
                        <Button color="primary" onClick={() => {this.createStudent()}}>Submit</Button>
                        <Button color="danger" onClick={() => this.setState({ modal: false })}>Cancel</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }  
  
}