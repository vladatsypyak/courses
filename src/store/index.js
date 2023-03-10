import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import coursesReducer from "./courses/reducer";
import {mockedCoursesList} from "../constants";
import authorsReducer from "./authors/reducer";

import appReducer from "./appReducer";
import userReducer from "./user/reducer";
import thunk from 'redux-thunk';


export const initialState = {
    user: {
        isAuth: true,
        name: "",
        email: "",
        login: "",
        token: localStorage.getItem("jwt_token")
    },
    courses: mockedCoursesList,
    authors: [],
    firstRender: false

}
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    courses: coursesReducer,
    authors: authorsReducer,
    app: appReducer,
    user: userReducer
})
// This would produce the following state object

const store = createStore(rootReducer, applyMiddleware(thunk))

// sagaMiddleware.run(mySaga)
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

export default store