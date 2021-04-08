import { Component } from "react";

export class ScheduleService extends Component {

    static async getStudentsSchedule() {
      const response = await fetch(`http://localhost:3001/schedule/7`);
      return await response.json();  
    }
}