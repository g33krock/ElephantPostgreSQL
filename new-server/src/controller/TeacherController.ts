import { NextFunction, Request, Response } from "express";
import { Schedule } from "../entity/Schedule";
import { Teacher } from "../entity/Teacher";

export class TeacherController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Teacher.find();
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return Teacher.findOne(request.params.id, { relations: ["campus", "role", "schedules"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return Teacher.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let studentToRemove = await Teacher.findOne(request.params.id);
		await Teacher.remove(studentToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const student = await Teacher.findOne(request.params.id);
		const data = request.body;
		Object.assign(student, data);
		return student.save();
	}

	async loadTeacherSchedules(request: Request, response:Response, next: NextFunction) {
		return await (await Teacher.findOne(request.params.id, { relations: ["schedules", "schedules.student", "schedules.course"]})).schedules
	}

}