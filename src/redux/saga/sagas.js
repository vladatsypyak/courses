import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import axios from "axios";
import {loginAction} from "../../store/user/actionCreators";
import {LOGIN} from "../../store/user/actionTypes";

async function fetchCourses() {
    return axios({
        method: 'get',
        url: `http://localhost:4000/courses/all`,
        headers: {'Content-Type': 'application/json'},

    })
        .then((response) => {
            console.log(response)
            return response.data.result
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

async function deleteCourseApi(id) {
    console.log(id)
    console.log(sessionStorage.getItem("jwt_token"))
    const headers = {
        'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token"),
        'Content-Type': 'application/json'
    };
    axios.delete(`http://localhost:4000/courses/${id}`, {headers})
        .then((response) => {
            return response
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    ;
}


async function login(email, password) {

    const user = {
        password,
        email,
    };

    return axios({
        method: 'post',
        url: 'http://localhost:4000/login',
        data: JSON.stringify(user),
        headers: {'Content-Type': 'application/json'},

    })
        .then((response) => {
            console.log(response)
            return response.data
        })
        .then((data) => {
            return data.result.split(" ")[1]
        })
        .then((data) => {
            sessionStorage.setItem('jwt_token', data)
            return data
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("password or login is incorrect")
        });
}

async function getUserInfo() {
    return axios({
        method: 'get',
        url: 'http://localhost:4000/users/me',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token"),
        },

    })
        .then((response) => {
            return response.data.result
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("password or login is incorrect")
        });
}

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const courses = yield call(fetchCourses);
        console.log(courses)
        yield put({type: "FETCH_SUCCEEDED", courses: courses});
    } catch (e) {
        console.log(e)
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* deleteCourse(action) {
    try {
        console.log(action)
        const courses = yield call(deleteCourseApi, action.payload);
        console.log(courses)
        yield put({type: "DELETE_SUCCEEDED", id: action.payload});
    } catch (e) {
        console.log(e)
    }
}

function* loginSaga(action) {
    try {

        const token = yield call(login, action.email, action.password);
        console.log(token)
        const user = yield call(getUserInfo)
        console.log(user)
        yield put({type: LOGIN, email: action.email, token: token, name: user.name});
    } catch (e) {
        console.log(e)
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export default function* mySaga() {
    yield takeEvery("FETCH_COURSES", fetchUser);
    yield takeEvery("DELETE_COURSE", deleteCourse);
    yield takeEvery("USER_LOGIN", loginSaga);
}