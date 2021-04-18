import { UserController } from "./controller/UserController";
import { StudentController } from "./controller/StudentController";
import { ScheduleController } from "./controller/ScheduleController";
import { CampusController } from "./controller/CampusController";
import { GuardianController } from "./controller/GuardianController";
import { RoleController } from "./controller/RoleController";
import { School_AdminController } from "./controller/School_AdminController";
import { TeacherController } from "./controller/TeacherController";

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
// Student
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
}, {
	method: "post",
	route: "/students",
	controller: StudentController,
	action: "save"
}, {
	method: "delete",
	route: "/students/:id",
	controller: StudentController,
	action: "remove"
},

// Schedule
{
	method: "get",
	route: "/schedules",
	controller: ScheduleController,
	action: "all"
}, {
	method: "get",
	route: "/schedules/:id",
	controller: ScheduleController,
	action: "one"
}, {
	method: "put",
	route: "/schedules/:id",
	controller: ScheduleController,
	action: "update"
}, {
	method: "post",
	route: "/schedules",
	controller: ScheduleController,
	action: "save"
}, {
	method: "delete",
	route: "/schedules/:id",
	controller: ScheduleController,
	action: "remove"
},

// Campus
{
	method: "get",
	route: "/campuses",
	controller: CampusController,
	action: "all"
}, {
	method: "get",
	route: "/campuses/:id",
	controller: CampusController,
	action: "one"
}, {
	method: "put",
	route: "/campuses/:id",
	controller: CampusController,
	action: "update"
}, {
	method: "post",
	route: "/campuses",
	controller: CampusController,
	action: "save"
}, {
	method: "delete",
	route: "/campuses/:id",
	controller: CampusController,
	action: "remove"
},

// Guardian
{
	method: "get",
	route: "/guardians",
	controller: GuardianController,
	action: "all"
}, {
	method: "get",
	route: "/guardians/:id",
	controller: GuardianController,
	action: "one"
}, {
	method: "put",
	route: "/guardians/:id",
	controller: GuardianController,
	action: "update"
}, {
	method: "post",
	route: "/guardians",
	controller: GuardianController,
	action: "save"
}, {
	method: "delete",
	route: "/guardians/:id",
	controller: GuardianController,
	action: "remove"
},

// Role
{
	method: "get",
	route: "/roles",
	controller: RoleController,
	action: "all"
}, {
	method: "get",
	route: "/roles/:id",
	controller: RoleController,
	action: "one"
}, {
	method: "put",
	route: "/roles/:id",
	controller: RoleController,
	action: "update"
}, {
	method: "post",
	route: "/roles",
	controller: RoleController,
	action: "save"
}, {
	method: "delete",
	route: "/roles/:id",
	controller: RoleController,
	action: "remove"
},

// School_Admin
{
	method: "get",
	route: "/school_admins",
	controller: School_AdminController,
	action: "all"
}, {
	method: "get",
	route: "/school_admins/:id",
	controller: School_AdminController,
	action: "one"
}, {
	method: "put",
	route: "/school_admins/:id",
	controller: School_AdminController,
	action: "update"
}, {
	method: "post",
	route: "/school_admins",
	controller: School_AdminController,
	action: "save"
}, {
	method: "delete",
	route: "/school_admins/:id",
	controller: School_AdminController,
	action: "remove"
},

// Teacher
{
	method: "get",
	route: "/teachers",
	controller: TeacherController,
	action: "all"
}, {
	method: "get",
	route: "/teachers/:id",
	controller: TeacherController,
	action: "one"
}, {
	method: "put",
	route: "/teachers/:id",
	controller: TeacherController,
	action: "update"
}, {
	method: "post",
	route: "/teachers",
	controller: TeacherController,
	action: "save"
}, {
	method: "delete",
	route: "/teachers/:id",
	controller: TeacherController,
	action: "remove"
}
];