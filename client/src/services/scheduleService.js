import {baseURL} from "../baseURL";

class ScheduleService {
    async all () {
        const response = await fetch(`${baseURL}/schedules`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create(scheduleObject) {
        const response = await fetch(`${baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(scheduleObject),
        });
        return await response.json();
    };
    async delete(scheduleObject){
        console.log(scheduleObject)
        const response = await fetch(`${baseURL}/schedules/`+scheduleObject.scheduleId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    };
    async update(scheduleObject) {
        console.log(scheduleObject)
        const response = await fetch(`${baseURL}/schedules/`+scheduleObject.id, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(scheduleObject),
    });
        const data = response;
        console.log(data);
    }
}

export const scheduleService = new ScheduleService();