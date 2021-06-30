import {baseURL} from "../baseURL";

class TranscriptService {
    async all () {
        const response = await fetch(`${baseURL}/transcripts`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          return await response.json();
    };
    async create (transcriptObject) {
        const response = await fetch(`${baseURL}/transcripts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(transcriptObject),
        });
        return await response.json();
    };
    async delete(transcriptObject){
        console.log(transcriptObject)
        const response = fetch(`${baseURL}/transcripts/`+transcriptObject.transcriptId, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        return response;
    };
    async update(transcriptObject) {
        console.log(transcriptObject)
        const response = fetch(`${baseURL}/transcripts/`+transcriptObject.id, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(transcriptObject),
    });
        const data = response;
        console.log(data);
    }
}

export const transcriptService = new TranscriptService();