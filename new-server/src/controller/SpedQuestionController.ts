import { NextFunction, Request, Response } from "express";
import { SpedQuestion } from "../entity/SpedQuestion";

export class SpedQuestionController {

	async all(request: Request, response: Response, next: NextFunction) {
		return SpedQuestion.find({ relations: ["student"] });
	}

	async one(request: Request, response: Response, next: NextFunction) {
		return SpedQuestion.findOne(request.params.id, { relations: ["student"] });
	}


	async save(request: Request, response: Response, next: NextFunction) {
		return SpedQuestion.save(request.body);
	}

	async remove(request: Request, response: Response, next: NextFunction) {
		let spedQuestionToRemove = await SpedQuestion.findOne(request.params.id);
		await SpedQuestion.remove(spedQuestionToRemove);
	}

	async update(request: Request, response: Response, next: NextFunction) {
		const spedQuestion = await SpedQuestion.findOne(request.params.id);
		const data = request.body;
		Object.assign(spedQuestion, data);
		return spedQuestion.save();
	}

}