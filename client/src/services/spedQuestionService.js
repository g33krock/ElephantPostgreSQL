import {baseURL} from "../baseURL";

class SpedQuestionService {
    async all () {
        const response = await fetch(`${baseURL}/spedQuestions`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (spedQuestionObject) {
        const response = await fetch(`${baseURL}/spedQuestions`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(spedQuestionObject),
        });
        return await response.json();
    };
    async delete(spedQuestionObject){
        console.log(spedQuestionObject)
        const response = fetch(`${baseURL}/spedQuestions/`+spedQuestionObject.spedQuestionId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return await response;
    };
    async update(spedQuestionObject) {
        console.log(spedQuestionObject)
        const response = await fetch(`${baseURL}/spedQuestions/`+spedQuestionObject.id, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(spedQuestionObject),
    });
        const data = response;
        console.log(data);
    }
}

export const spedQuestionService = new SpedQuestionService();