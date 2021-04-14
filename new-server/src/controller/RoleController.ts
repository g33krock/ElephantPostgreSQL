import {NextFunction, Request, Response} from "express";
import {Roles} from "../entity/Roles";

export class RoleController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Roles.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Roles.findOne(request.params.id, { relations: ["teachers"] });
	}


    async save(request: Request, response: Response, next: NextFunction) {
        return Roles.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let studentToRemove = await Roles.findOne(request.params.id);
        await Roles.remove(studentToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const student = await Roles.findOne(request.params.id);
        const data = request.body;
        Object.assign(student, data);
        return student.save();
    }

}