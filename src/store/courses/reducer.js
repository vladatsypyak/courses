import {mockedCoursesList} from "../../constants";
import {CREATE_COURSE} from "./actionTypes";


export default function coursesReducer(state = mockedCoursesList, action) {
    switch (action.type) {
        case CREATE_COURSE:
            console.log(state)
            return [...state, action.course]
        case "FETCH_SUCCEEDED":
            console.log(state, action)
            return [...state, ...action.courses]
        case "DELETE_SUCCEEDED":
            console.log(state, action)
            return state.filter((el)=> el.id !== action.id)
        default:
            return state
    }
}

