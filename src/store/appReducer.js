import {mockedCoursesList} from "../constants";
import {CREATE_COURSE} from "./courses/actionTypes";

export default function appReducer(state = {firstRender: true}, action) {
    switch (action.type) {
        case "FIRST_RENDER":
            console.log(state)
            return {firstRender: false}
        default:
            return state
    }
}
