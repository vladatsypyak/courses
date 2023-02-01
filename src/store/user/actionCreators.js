import {CREATE_COURSE} from "../courses/actionTypes";
import {LOGIN_SUCCESS} from "./actionTypes";

export function loginAction(email, token, name) {
    return {
        type: LOGIN_SUCCESS, email, token, name
    }
}

export function userLogin(email, password) {
    return {
        type: "USER_LOGIN", email, password
    }
}