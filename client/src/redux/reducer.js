import { teacherService } from "../services/teacherService";
import { studentService } from "../services/studentService";
import { campusService } from "../services/campusService";

export const initialState = {
    teachers: teacherService.all,
    students: studentService.all,
    campuses: campusService.all
};

export const Reducer = (state = initialState, action) => {
    return state;
}