import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Table } from 'reactstrap';

export default class TeacherInfo extends React.Component {
    renderTeacher(teacher){
        return <div class="col-md-3 m-1">
            <Card>
                    <CardImg top src={`http://localhost:3001/${teacher.image}`} alt={`http://localhost:3001/${teacher.firstname}`}  />
                    <CardBody>
                        <CardTitle><h1>{teacher.firstname} {teacher.lastname}</h1></CardTitle>
                        <CardText className="text-center text-md-left"><strong>Title:</strong>{teacher.role}<br/> <strong>Campus:</strong>{teacher.campus}<br/> <strong>ID:</strong>{teacher.teacher_id} </CardText>
                    </CardBody>
                </Card>
        </div>
    }
    render(){
        if (this.props.teacher) {
           return  <div class='row'>
            {this.renderTeacher(this.props.teacher)}
            {this.renderSchedule(this.props.teacher.schedule)}
            </div>
        } else {
           return <div></div>
        }
    }
    renderSchedule(schedule) {
        if(schedule) {
            return(
                <div class="col-md-6 m-1">
                    <Table>
                        <thead><strong>Schedule</strong></thead>
                        <tr>
                            <th>Class Period</th>
                            <th>Subject</th>
                            <th>Student</th>
                            <th>Para Supported</th>
                        </tr>
                        {schedule.map((pig) => {
                        return [
                            <tbody>
                                <tr>
                                    <td>{pig.period}</td>
                                    <td>{pig.subject}</td>
                                    <td>{pig.student}</td>
                                    <td><input type="radio" value="true" name="pradio" />Yes <br/><input type="radio" value="false" name="pradio" />No</td>
                                    
                                </tr>
                            </tbody>
                        ]
                    })}
                    </Table>
                    
                </div>
            )
        } else {
            return <div></div>
        }
    }
}