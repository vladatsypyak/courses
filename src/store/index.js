import {combineReducers, createStore} from 'redux'
import coursesReducer from "./courses/reducer";
import {mockedCoursesList} from "../constants";
import authorsReducer from "./authors/reducer";

export const initialState = {
    user: {
        isAuth: true,
        name: "",
        email: "",
        login: "",
        token: localStorage.getItem("jwt_token")
    },
    courses: mockedCoursesList,
    authors: [] ,

}
const rootReducer = combineReducers({
    courses: coursesReducer,
    authors: authorsReducer
})
// This would produce the following state object

const store = createStore(rootReducer)

export default store