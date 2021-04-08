
export class StudentService {

      static async getStudents() {
        const response = await fetch('http://localhost:3001/students');
        return await response.json();  
      }
      static async getStudentsSchedule() {
        const response = await fetch(`http://localhost:3001/schedule`);
        return await response.json();  
      }

      static async getStudentSchedules() {
        let periodid = 0;
        const response = await fetch(`http://localhost:3001/students/periods/${periodid}`);
        return await response.json();  
      }
      static async getStudentSchedulesById() {
        let student_id = 1;
        let periodid = 0;
        const response = await fetch(`http://localhost:3001/students/${student_id}/periods/${periodid}`);
        return await response.json();  
      }
      
      static async createStudent() {
        let student_id = prompt('Enter student_id');
        let firstname = prompt('Enter student firstname');
        let lastname = prompt('Enter student lastname');
        let campus = prompt('Enter student campus');
        let grade = prompt('Enter student grade');
        let image = prompt('Enter student image');
        const response = await fetch('http://localhost:3001/students', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, firstname, lastname, campus, grade, image}),
        });
        const data = await response.text();
        console.log(data)
      }

      static async updateStudent() {
        let student_id = prompt('Enter student_id');
        let firstname = prompt('Enter student firstname');
        let lastname = prompt('Enter student lastname');
        let campus = prompt('Enter student campus');
        let grade = prompt('Enter student grade');
        let image = prompt('Enter student image');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, firstname, lastname, campus, grade, image}),
        });
        const uData = await response.text();
        console.log(uData)
      }

      static async updateStudentSchedule() {
        let student_id = prompt('Enter student_id');
        let subject = prompt('Period Subject');
        let teacher = prompt('Period Teacher');
        let link = prompt('Period Link');
        let para = prompt('Period Para');
        let period = 0
        const response = await fetch(`http://localhost:3001/students/${student_id}/periods/${period}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, subject, teacher, link, para, period}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      
      static async updateP1StudentSchedule() {
        let student_id = prompt('Enter student_id');
        let p1subject = prompt('Period 1 Subject');
        let p1teacher = prompt('Period 1 Teacher');
        let p1link = prompt('Period 1 Link');
        let p1para = prompt('Period 1 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p1subject, p1teacher, p1link, p1para}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      static async updateP2StudentSchedule() {
        let student_id = prompt('Enter student_id');
        let p2subject = prompt('Period 2 Subject');
        let p2teacher = prompt('Period 2 Teacher');
        let p2link = prompt('Period 2 Link');
        let p2para = prompt('Period 2 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p2subject, p2teacher, p2link, p2para}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      static async updateStudentScheduleP3() {
        let student_id = prompt('Enter student_id');
        let p3subject = prompt('Period 3 Subject');
        let p3teacher = prompt('Period 3 Teacher');
        let p3link = prompt('Period 3 Link');
        let p3para = prompt('Period 3 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p3subject, p3teacher, p3link, p3para}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      static async updateStudentScheduleP4() {
        let student_id = prompt('Enter student_id');
        let p4subject = prompt('Period 4 Subject');
        let p4teacher = prompt('Period 4 Teacher');
        let p4link = prompt('Period 4 Link');
        let p4para = prompt('Period 4 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p4subject, p4teacher, p4link, p4para}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      static async updateStudentScheduleP5() {
        let student_id = prompt('Enter student_id');
        let p5subject = prompt('Period 5 Subject');
        let p5teacher = prompt('Period 5 Teacher');
        let p5link = prompt('Period 5 Link');
        let p5para = prompt('Period 5 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p5subject, p5teacher, p5link, p5para}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      static async updateStudentScheduleP6() {
        let student_id = prompt('Enter student_id');
        let p6subject = prompt('Period 6 Subject');
        let p6teacher = prompt('Period 6 Teacher');
        let p6link = prompt('Period 6 Link');
        let p6para = prompt('Period 6 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p6subject, p6teacher, p6link, p6para}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      static async updateStudentScheduleP7() {
        let student_id = prompt('Enter student_id');
        let p7subject = prompt('Period 7 Subject');
        let p7teacher = prompt('Period 7 Teacher');
        let p7link = prompt('Period 7 Link');
        let p7para = prompt('Period 7 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p7subject, p7teacher, p7link, p7para}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      static async updateStudentScheduleP8() {
        let student_id = prompt('Enter student_id');
        let p8subject = prompt('Period 8 Subject');
        let p8teacher = prompt('Period 8 Teacher');
        let p8link = prompt('Period 8 Link');
        let p8para = prompt('Period 8 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p8subject, p8teacher, p8link, p8para}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      static async updateStudentScheduleP9() {
        let student_id = prompt('Enter student_id');
        let p9subject = prompt('Period 9 Subject');
        let p9teacher = prompt('Period 9 Teacher');
        let p9link = prompt('Period 9 Link');
        let p9para = prompt('Period 9 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p9subject, p9teacher, p9link, p9para}),
        });
        const uData = await response.text();
        console.log(uData)
      }
      static async updateP10StudentSchedule() {
        let student_id = prompt('Enter student_id');
        let p10subject = prompt('Period 10 Subject');
        let p10teacher = prompt('Period 10 Teacher');
        let p10link = prompt('Period 10 Link');
        let p10para = prompt('Period 10 Para');
        const response = await fetch(`http://localhost:3001/students/${student_id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({student_id, p10subject, p10teacher, p10link, p10para}),
        });
        const uData = await response.text();
        console.log(uData)
      }

      static async deleteStudent() {
        let id = prompt('Enter student id');
        const response = await fetch(`http://localhost:3001/students/${id}`, {
          method: 'DELETE',
        })
          const dData = await response.text();
        console.log(dData)
      }
}