import { teacherService } from "../services/teacherService";
import { studentService } from "../services/studentService";
import { campusService } from "../services/campusService";
import { useAuth } from '../contexts/Auth'

export const initialState = {
    teachers: teacherService.all,
    students: studentService.all,
    campuses: campusService.all,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    users: useAuth()
};

export const Reducer = (state = initialState, action) => {
    return state;
}