import {mockedCoursesList} from "../../constants";
import {CREATE_COURSE, DELETE_COURSE_SUCCEED, FETCH_COURSES_SUCCEED} from "./actionTypes";


export default function coursesReducer(state = mockedCoursesList, action) {
    switch (action.type) {
        case CREATE_COURSE:
            console.log(state)
            return [...state, action.course]
        case FETCH_COURSES_SUCCEED:
            console.log(state, action)
            return [...state, ...action.courses]
        case DELETE_COURSE_SUCCEED:
            console.log(state, action)

            return state.filter((el)=> el.id !== action.courseId)
        default:
            return state
    }
}

