class ScheduleService {
    async all () {
        const response = await fetch("http://localhost:3001/schedules", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (scheduleObject) {
        const response = await fetch("http://localhost:3001/schedules", {
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
        const response = fetch("http://localhost:3001/schedules/"+scheduleObject.scheduleID, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    };
    async update(scheduleObject) {
        const response = fetch("http://localhost:3001/schedules/"+scheduleObject.scheduleID, {
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