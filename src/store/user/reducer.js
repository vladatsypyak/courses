import {LOGIN} from "./actionTypes";

const initialState = {
    isAuth: false,
    name: "",
    email: "",
    token: ""
}


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            console.log(action)
            console.log(5)
            return {
                isAuth: true,
                email: action.email,
                token: action.token,
                name: action.name
            }
        default:
            return state
    }
}

