import {mockedCoursesList} from "../../constants";
import {CREATE_COURSE, SEARCH_COURSES} from "./actionTypes";
import {initialState} from "../index";

export default function coursesReducer(state = mockedCoursesList, action) {
    switch (action.type) {
        case CREATE_COURSE:
            console.log(state)
            return [...state, action.course]
        default:
            return state
    }
}

