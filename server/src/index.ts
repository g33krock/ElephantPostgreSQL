import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";

const cors = require('cors');
const port = process.env.PORT || 3001;

createConnection().then(async connection => {

	// create express app
	const app = express();
	app.use(bodyParser.json());
	app.use(cors());
	app.use(express.static("../../client/build"))
	// app.use(function (req, res, next) {
	// 	console.log('Time:', Date.now())
	// 	next()
	//   })

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

	app.listen(port);

	console.log(`Express server has started on port ${port}. Open http://localhost:${port}/users to see results`);

}).catch(error => console.log(error));
