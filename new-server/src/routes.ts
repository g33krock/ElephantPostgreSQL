import {UserController} from "./controller/UserController";
import {StudentController} from "./controller/StudentController";
import {ScheduleController} from "./controller/ScheduleController";

export const Routes = [{
	method: "get",
	route: "/users",
	controller: UserController,
	action: "all"
}, {
	method: "get",
	route: "/users/:id",
	controller: UserController,
	action: "one"
}, {
	method: "post",
	route: "/users",
	controller: UserController,
	action: "save"
}, {
	method: "delete",
	route: "/users/:id",
	controller: UserController,
	action: "remove"
},
// Students
{
	method: "get",
	route: "/students",
	controller: StudentController,
	action: "all"
},
{
	method: "get",
	route: "/students/:id",
	controller: StudentController,
	action: "one"
},
{
	method: "put",
	route: "/students/:id",
	controller: StudentController,
	action: "update"
},

// Schedule
{
	method: "get",
	route: "/schedule",
	controller: ScheduleController,
	action: "all"
}
];