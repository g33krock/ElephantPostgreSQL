import {NextFunction, Request, Response} from "express";
import {Teachers} from "../entity/Teachers";

export class TeacherController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Teachers.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Teachers.findOne(request.params.id, { relations: ["campuses"] });
	}


    async save(request: Request, response: Response, next: NextFunction) {
        return Teachers.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let studentToRemove = await Teachers.findOne(request.params.id);
        await Teachers.remove(studentToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const student = await Teachers.findOne(request.params.id);
        const data = request.body;
        Object.assign(student, data);
        return student.save();
    }

}