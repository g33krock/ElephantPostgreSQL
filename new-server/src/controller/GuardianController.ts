import {NextFunction, Request, Response} from "express";
import {Guardians} from "../entity/Guardians";

export class GuardianController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Guardians.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Guardians.findOne(request.params.id, { relations: ["students"] });
	}


    async save(request: Request, response: Response, next: NextFunction) {
        return Guardians.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let studentToRemove = await Guardians.findOne(request.params.id);
        await Guardians.remove(studentToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const student = await Guardians.findOne(request.params.id);
        const data = request.body;
        Object.assign(student, data);
        return student.save();
    }

}