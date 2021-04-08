import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import TeacherInfo from './TeacherInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTeacher: null
        };
    }

    onTeacherSelect(teacher) {
        this.setState({selectedTeacher: teacher});
    }

    renderSelectedTeacher(teacher) {
        if (teacher) {
            return (
                <Card>
                    <CardImg top src={`http://localhost:3001/${teacher.image}`} alt={teacher.firstname} />
                    <CardBody>
                        <CardTitle>{teacher.firstname} {teacher.lastname}</CardTitle>
                        <CardText>Name:{teacher.role}<br/> Campus:{teacher.campus}<br/> ID:{teacher.teacher_id} </CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />;
    }

    render() {
        const directory = this.props.teachers.map(teacher => {
            return (
                <div key={teacher.teacher_id} className="col-md-2 m-1">
                    <Card onClick={() => this.onTeacherSelect(teacher)}>
                        <CardImg  src={`http://localhost:3001/${teacher.image}`}alt={teacher.firstname} />
                        <CardImgOverlay>
                            <CardTitle style={{ color: 'white' }}>{teacher.firstname} {teacher.lastname} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <TeacherInfo teacher={this.state.selectedTeacher} available={2}/>
                <div className="row">
                    {directory}
                </div>
                

            </div>
        );
    }
}

export default Directory;

