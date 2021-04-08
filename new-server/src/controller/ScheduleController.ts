import {NextFunction, Request, Response} from "express";
import {Schedule} from "../entity/Schedule";

export class ScheduleController {

	async all(request: Request, response: Response, next: NextFunction) {
		return Schedule.find();
	}

}