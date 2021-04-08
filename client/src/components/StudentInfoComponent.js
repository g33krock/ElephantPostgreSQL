import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Table } from 'reactstrap';
import { StudentService } from '../services/StudentService';

export default class StudentInfo extends React.Component {
    
    renderStudent(student){
        return <div class="row">
                <div class="col-md-3 m-1">
                <Card>
                    <CardImg top src={`${student.profile_image}`} alt={`${student.firstName}`}  />
                    <CardBody>
                        <CardTitle><h2>{student.firstName} {student.lastName}</h2></CardTitle>
                        <CardText className="text-center text-md-left"><strong>Grade:</strong>{student.grade}<br/> <strong>Campus:</strong>{student.campus}<br/> <strong>ID:</strong>{student.id} </CardText>
                    </CardBody>
                    
                </Card>
            </div>
            <div class="col-md-6 m-6">
            <Table>
                        <thead>
                            <tr>
                                <th>Period 0</th>
                                <th>Period 1</th>
                                <th>Period 2</th>
                                <th>Period 3</th>
                                <th>Period 4</th>
                                <th>Period 5</th>
                                <th>Period 6</th>
                                <th>Period 7</th>
                                <th>Period 8</th>
                                <th>Period 9</th>
                                <th>Period 10</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><button onClick={() => StudentService.updateP0StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p0subject}<br/><strong>Teacher:</strong>{student.p0teacher}<br/><strong>Link:</strong>{student.p0link}<br/><strong>Para:</strong>{student.p0para}</th>
                                <th><button onClick={() => StudentService.updateP1StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p1subject}<br/><strong>Teacher:</strong>{student.p1teacher}<br/><strong>Link:</strong>{student.p1link}<br/><strong>Para:</strong>{student.p1para}</th>
                                <th><button onClick={() => StudentService.updateP2StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p2subject}<br/><strong>Teacher:</strong>{student.p2teacher}<br/><strong>Link:</strong>{student.p2link}<br/><strong>Para:</strong>{student.p2para}</th>
                                <th><button onClick={() => StudentService.updateP3StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p3subject}<br/><strong>Teacher:</strong>{student.p3teacher}<br/><strong>Link:</strong>{student.p3link}<br/><strong>Para:</strong>{student.p3para}</th>
                                <th><button onClick={() => StudentService.updateP4StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p4subject}<br/><strong>Teacher:</strong>{student.p4teacher}<br/><strong>Link:</strong>{student.p4link}<br/><strong>Para:</strong>{student.p4para}</th>
                                <th><button onClick={() => StudentService.updateP5StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p5subject}<br/><strong>Teacher:</strong>{student.p5teacher}<br/><strong>Link:</strong>{student.p5link}<br/><strong>Para:</strong>{student.p5para}</th>
                                <th><button onClick={() => StudentService.updateP6StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p6subject}<br/><strong>Teacher:</strong>{student.p6teacher}<br/><strong>Link:</strong>{student.p6link}<br/><strong>Para:</strong>{student.p6para}</th>
                                <th><button onClick={() => StudentService.updateP7StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p7subject}<br/><strong>Teacher:</strong>{student.p7teacher}<br/><strong>Link:</strong>{student.p7link}<br/><strong>Para:</strong>{student.p7para}</th>
                                <th><button onClick={() => StudentService.updateP8StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p8subject}<br/><strong>Teacher:</strong>{student.p8teacher}<br/><strong>Link:</strong>{student.p8link}<br/><strong>Para:</strong>{student.p8para}</th>
                                <th><button onClick={() => StudentService.updateP9StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p9subject}<br/><strong>Teacher:</strong>{student.p9teacher}<br/><strong>Link:</strong>{student.p9link}<br/><strong>Para:</strong>{student.p9para}</th>
                                <th><button onClick={() => StudentService.updateP10StudentSchedule()}>Edit</button><strong>Subject:</strong>{student.p10subject}<br/><strong>Teacher:</strong>{student.p10teacher}<br/><strong>Link:</strong>{student.p10link}<br/><strong>Para:</strong>{student.p10para}</th>
                            </tr>
                        </tbody>
                    </Table>
            </div>
        </div>
    }
    render(){
        if (this.props.student) {
           return  <div class='row'>
            {this.renderStudent(this.props.student)}
            {this.renderSchedule(this.props.student.schedule)}
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