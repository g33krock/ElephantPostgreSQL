import {NextFunction, Request, Response} from "express";
import {Courses} from "../entity/Courses";

export class CourseController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Courses.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Courses.findOne(request.params.id, { relations: ["schedule"] });
	}


    async save(request: Request, response: Response, next: NextFunction) {
        return Courses.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let studentToRemove = await Courses.findOne(request.params.id);
        await Courses.remove(studentToRemove);
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const student = await Courses.findOne(request.params.id);
        const data = request.body;
        Object.assign(student, data);
        return student.save();
    }

}