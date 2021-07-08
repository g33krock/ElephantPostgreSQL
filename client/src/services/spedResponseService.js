import {baseURL} from "../baseURL";
import { fetcher } from './fetcher';

class SpedResponseService {
    async all () {
        const response = await fetcher(`${baseURL}/spedResponses`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (spedResponseObject) {
        const response = await fetcher(`${baseURL}/spedResponses`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(spedResponseObject),
        });
        return await response.json();
    };
    async delete(spedResponseObject){
        console.log(spedResponseObject)
        const response = fetcher(`${baseURL}/spedResponses/`+spedResponseObject.spedResponseId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    };
    async update(spedResponseObject) {
        console.log(spedResponseObject)
        const response = fetcher(`${baseURL}/spedResponses/`+spedResponseObject.spedResponseId, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(spedResponseObject),
    });
        const data = response;
        console.log(data);
    }
}

export const spedResponseService = new SpedResponseService();