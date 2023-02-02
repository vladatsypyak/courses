import axios from "axios";
import {deleteCourseAction, fetchCoursesAction} from "./actionCreators";


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

// function* deleteCourse(action) {
//     try {
//         console.log(action)
//         const courses = yield call(deleteCourseApi, action.payload);
//         console.log(courses)
//         yield put({type: "DELETE_SUCCEEDED", id: action.payload});
//     } catch (e) {
//         console.log(e)
//     }
// }


export function fetchCoursesThunk() {
    return async (dispatch, getState) => {
        const courses = await fetchCourses()
        dispatch(fetchCoursesAction(courses))
    }
}
export function deleteCourseThunk(id) {
    return async (dispatch, getState) => {
        const result = await deleteCourseApi(id)
        dispatch(deleteCourseAction(id))
    }
}
