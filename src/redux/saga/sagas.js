import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from "axios";

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
    axios.delete(`http://localhost:4000/courses/${id}`, { headers })
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((error) => {
            console.error('Error:', error);
        });;
}
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const courses = yield call(fetchCourses);
        console.log(courses)
        yield put({type: "FETCH_SUCCEEDED", courses: courses});
    }
    catch (e) {
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
    }
    catch (e) {
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
}