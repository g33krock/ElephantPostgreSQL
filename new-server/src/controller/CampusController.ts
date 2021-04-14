import {NextFunction, Request, Response} from "express";
import {Campuses} from "../entity/Campuses";

export class CampusController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Campuses.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Campuses.findOne(request.params.id, { relations: ["school_admin"] });
	}


    async save(request: Request, response: Response, next: NextFunction) {
        return Campuses.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let studentToRemove = await Campuses.findOne(request.params.id);
        await Campuses.remove(studentToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const student = await Campuses.findOne(request.params.id);
        const data = request.body;
        Object.assign(student, data);
        return student.save();
    }

}