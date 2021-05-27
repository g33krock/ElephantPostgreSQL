class GradebookService {
    async all () {
        const response = await fetch("http://localhost:3001/gradebooks", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (gradebookObject) {
        const response = await fetch("http://localhost:3001/gradebooks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(gradebookObject),
        });
        return await response.json();
    };
    async delete(gradebookObject){
        console.log(gradebookObject)
        const response = fetch("http://localhost:3001/gradebooks/"+gradebookObject.gradebookId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    };
    async update(gradebookObject) {
        console.log(gradebookObject)
        const response = fetch("http://localhost:3001/gradebooks/"+gradebookObject.id, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(gradebookObject),
    });
        const data = response;
        console.log(data);
    }
}

export const gradebookService = new GradebookService();