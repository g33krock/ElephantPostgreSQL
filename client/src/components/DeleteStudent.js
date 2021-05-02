import { useState } from "react";
import Student from "./StudentComponent";



  
  export function DeleteStudent() {
    const [student, setStudent ] = useState(Student.student);
    return (
      <div>
        <p>Student ID is: {student}</p>
        <button onClick={() => setStudent(student)}>
          Delete Student
        </button>
      </div>
    );
    }
    // const response = fetch(`http://localhost:3001/students/${id}`, {
    //   method: 'DELETE',
    // })
    //   const dData = response.text();
    // console.log(dData);
    
