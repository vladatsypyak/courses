import { LOGIN_SUCCESS} from "./actionTypes";

const initialState = {
    isAuth: false,
    name: "",
    email: "",
    token: "",
    role: ""
}


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isAuth: true,
                email: action.email,
                token: action.token,
                name: action.name,
                role: action.role
            }
        default:
            return state
    }
}

