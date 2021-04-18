import { NextFunction, Request, Response } from "express";
import { Student } from "../entity/Student";

export class StudentController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Student.find({ relations: ["schedules", "campuses"] });
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Student.findOne(request.params.id, { relations: ["schedules", "campuses"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return Student.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let studentToRemove = await Student.findOne(request.params.id);
		await Student.remove(studentToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const student = await Student.findOne(request.params.id);
		const data = request.body;
		Object.assign(student, data);
		return student.save();
	}


}
