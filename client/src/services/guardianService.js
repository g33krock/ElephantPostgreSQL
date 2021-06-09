class GuardianService {
    async all () {
        const response = await fetch("http://localhost:3001/guardians", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (guardianObject) {
        const response = await fetch("http://localhost:3001/guardians", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(guardianObject),
        });
        return await response.json();
    };
    async delete(guardianObject){
        console.log(guardianObject)
        const response = fetch("http://localhost:3001/guardians/"+guardianObject.guardianID, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    };
    async update(guardianObject) {
        const response = fetch("http://localhost:3001/guardians/"+guardianObject.guardianID, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(guardianObject),
    });
        const data = response;
        console.log(data);
    }
}

export const guardianService = new GuardianService();