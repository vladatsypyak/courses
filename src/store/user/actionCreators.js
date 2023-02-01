import {CREATE_COURSE} from "../courses/actionTypes";
import {LOGIN} from "./actionTypes";

export function loginAction(email, password) {
    return {
        type: LOGIN, email
    }
}