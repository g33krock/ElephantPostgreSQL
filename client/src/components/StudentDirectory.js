import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Table} from 'reactstrap';
import StudentInfo from './StudentInfoComponent';
import { StudentService } from '../services/StudentService';
import  Schedule  from './ScheduleComponent'

class StudentDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStudent: null,
            selectedPeriod: 7
        };
        
    }

    onStudentSelect(student) {
        this.setState({selectedStudent: student});
    }
    onPeriodSelect(period) {
        this.setState({selectedPeriod: period});
    }


    render() {
        const directory = this.props.students.map(student => {
            console.log(student)
            return (
                
                <div key={student.id} className="col-md-2 m-1">
                    <Card onClick={() => this.onStudentSelect(student)}>
                        <CardImg  src={`${student.profile_image}`}alt={student.firstname} />
                        <CardImgOverlay>
                            <CardTitle style={{ color: 'white' }}>{student.firstName} {student.lastName} {student.subject} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
                
                
            );
        });

        
            // const fullSchedule = this.props.periods.map(period => {
            //     return (
            //         <div key={period.studentsId}>
            //              <div>
            //         <Table hover bordered>
            //                 <thead>
            //                     <tr>
            //                         <th className="sheader">Student</th>
            //                         <th className="sheader">Period 0</th>
            //                         <th className="sheader">Period 1</th>
            //                         <th className="sheader">Period 2</th>
            //                         <th className="sheader">Period 3</th>
            //                         <th className="sheader">Period 4</th>
            //                         <th className="sheader">Period 5</th>
            //                         <th className="sheader">Period 6</th>
            //                         <th className="sheader">Period 7</th>
            //                         <th className="sheader">Period 8</th>
            //                         <th className="sheader">Period 9</th>
            //                         <th className="sheader">Period 10</th>
            //                     </tr>
            //                 </thead>
            //                 <tbody>
            //                     <tr>
            //                         <th><strong>{period.firstname} {period.lastname}</strong></th>
            //                         <th className="sentry"><button className="editbutton" onClick={(studentid, periodid) => StudentService.updateStudentSchedule(period.student_id, 0)} ><br/>Edit</button><strong>Subject:</strong>{period.subject}<br/><strong>Teacher:</strong>{period.teacher}<br/><strong>Link:</strong>{period.link}<br/><strong>Para:</strong>{period.para}</th>
                                    
            //                     </tr>
            //                 </tbody>
            //             </Table>
            //         </div>
            //         </div>
            //     );
            // });
        

        return (
            <div className="container">
                <StudentInfo student={this.state.selectedStudent} available={2}/>
                <div className="row">
                    {directory}
                    {/* {fullSchedule} */}
                </div>
                

            </div>
        );
    }
}

export default StudentDirectory;
