import {NextFunction, Request, Response} from "express";
import {Students} from "../entity/Students";

export class StudentController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Students.find({ relations: ["schedule", "campuses"] });
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Students.findOne(request.params.id, { relations: ["schedule", "campuses"] });
	}


    async save(request: Request, response: Response, next: NextFunction) {
        return Students.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let studentToRemove = await Students.findOne(request.params.id);
        await Students.remove(studentToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const student = await Students.findOne(request.params.id);
        const data = request.body;
        Object.assign(student, data);
        return student.save();
    }
	

}
