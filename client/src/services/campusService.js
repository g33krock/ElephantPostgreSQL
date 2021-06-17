import {baseURL} from "../baseURL";

class CampusService {
    async all () {
        const response = await fetch(`${baseURL}/campuses`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    }
}

export const campusService = new CampusService();