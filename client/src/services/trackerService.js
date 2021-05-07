class TrackerService {
    async create (trackerObject) {
        const response = await fetch("http://localhost:3001/trackers", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(trackerObject),
          });
          return await response.json();
    }
}

export const trackerService = new TrackerService();