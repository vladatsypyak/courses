import {mockedCoursesList} from "../../constants";
import {CREATE_COURSE, DELETE_COURSE_SUCCEED, EDIT_COURSE, FETCH_COURSES_SUCCEED} from "./actionTypes";


export default function coursesReducer(state = [], action) {
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
        case EDIT_COURSE:
            console.log(8888)
            console.log(action)
            return state.map(el=>{
                if(el.id === action.id){
                    return action.course
                }
                return el
            })
        default:
            return state
    }
}

