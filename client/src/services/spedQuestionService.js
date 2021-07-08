import {baseURL} from "../baseURL";
import { fetcher } from './fetcher';

class SpedQuestionService {
    async all () {
        const response = await fetcher(`${baseURL}/spedQuestions`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (spedQuestionObject) {
        const response = await fetcher(`${baseURL}/spedQuestions`, {
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
        const response = fetcher(`${baseURL}/spedQuestions/`+spedQuestionObject.spedQuestionId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return await response;
    };
    async update(spedQuestionObject) {
        console.log(spedQuestionObject)
        const response = await fetcher(`${baseURL}/spedQuestions/`+spedQuestionObject.id, {
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