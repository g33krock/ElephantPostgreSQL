import {baseURL} from "../baseURL";

class TeacherService {
    async all () {
        const response = await fetch(`${baseURL}/teachers`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (teacherObject) {
        const response = await fetch(`${baseURL}/teachers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(teacherObject),
        });
        return await response.json();
    };
    async delete(teacherObject){
        console.log(teacherObject)
        const response = fetch(`${baseURL}/teachers/`+teacherObject.teacherID, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    };
    async update(teacherObject) {
        const response = fetch(`${baseURL}/teachers/`+teacherObject.teacherID, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(teacherObject),
    });
        const data = response;
        console.log(data);
    }
}

export const teacherService = new TeacherService();