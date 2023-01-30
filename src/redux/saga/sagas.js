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

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
export default function* mySaga() {
    yield takeEvery("FETCH_COURSES", fetchUser);
}