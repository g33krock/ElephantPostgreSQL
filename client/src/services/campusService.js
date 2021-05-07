class CampusService {
    async all () {
        const response = await fetch("http://localhost:3001/campuses", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    }
}

export const campusService = new CampusService();