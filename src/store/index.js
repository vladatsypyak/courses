import {combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import coursesReducer from "./courses/reducer";
import {mockedCoursesList} from "../constants";
import authorsReducer from "./authors/reducer";
import mySaga from "../redux/saga/sagas"


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
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    courses: coursesReducer,
    authors: authorsReducer
})
// This would produce the following state object

const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mySaga)
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

export default store