import {baseURL} from "../baseURL";
import { fetcher } from './fetcher';

class GradebookService {
    async all () {
        const response = await fetcher(`${baseURL}/gradebooks`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (gradebookObject) {
        const response = await fetcher(`${baseURL}/gradebooks`, {
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
        const response = fetcher(`${baseURL}/gradebooks/`+gradebookObject.gradebookId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    };
    async update(gradebookObject) {
        console.log(gradebookObject)
        const response = fetcher(`${baseURL}/gradebooks/`+gradebookObject.id, {
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