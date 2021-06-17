import {baseURL} from "../baseURL";

class StudentService {
    async all () {
        const response = await fetch(`${baseURL}/students`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (studentObject) {
        const response = await fetch(`${baseURL}/students`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(studentObject),
        });
        return await response.json();
    };
    async delete(studentObject){
        console.log(studentObject)
        const response = fetch(`${baseURL}/students/`+studentObject.studentID, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    };
    async update(studentObject) {
        const response = fetch(`${baseURL}/students/`+studentObject.studentID, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(studentObject),
    });
        const data = response;
        console.log(data);
    }
}

export const studentService = new StudentService();