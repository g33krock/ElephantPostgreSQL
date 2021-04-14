import {NextFunction, Request, Response} from "express";
import {School_Admins} from "../entity/School_Admins";

export class School_AdminController {

	async all(request: Request, response: Response, next: NextFunction) {
		return School_Admins.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return School_Admins.findOne(request.params.id, { relations: ["campuses"] });
	}


    async save(request: Request, response: Response, next: NextFunction) {
        return School_Admins.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let studentToRemove = await School_Admins.findOne(request.params.id);
        await School_Admins.remove(studentToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const student = await School_Admins.findOne(request.params.id);
        const data = request.body;
        Object.assign(student, data);
        return student.save();
    }

}