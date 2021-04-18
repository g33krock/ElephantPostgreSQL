import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";


const cors = require('cors')



createConnection().then(async connection => {

	// create express app
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());

	// register express routes from defined application routes
	Routes.forEach(route => {
		(app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
			const result = (new (route.controller as any))[route.action](req, res, next);
			if (result instanceof Promise) {
				result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

			} else if (result !== null && result !== undefined) {
				res.json(result);
			}
		});
	});

	// setup express app here
	// ...

	// start express server
	app.listen(3001);

	// insert new users for test
	// const teacher = new Teacher();
	// teacher.firstName = "James";
	// teacher.lastName = "Gear";
	// teacher.campus = "Unicorn Town";
	// teacher.role = "Captain McAwesome";
	// teacher.image = 'assets/images/District Dallas.jpg';
	// await teacher.save();

	console.log("Express server has started on port 3001. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));
