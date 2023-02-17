import axios from "axios";
import {createCourse, deleteCourseAction, editCourse, fetchCoursesAction} from "./actionCreators";


async function fetchCourses() {
    return axios({
        method: 'get',
        url: `http://localhost:4000/courses/all`,
        headers: {'Content-Type': 'application/json'},

    })
        .then((response) => {
            return response.data.result
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

async function createCourseApi(course) {
    console.log(course)
    return axios({
        method: 'post',
        url: `http://localhost:4000/courses/add`,
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token"),
            'Content-Type': 'application/json'
        },
        data: course

    })
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
async function editCourseApi(course, id) {
    console.log(course)
    console.log(id)
    return axios({
        method: 'put',
        url: `http://localhost:4000/courses/${id}`,
        headers: {
            'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token"),
            'Content-Type': 'application/json'
        },
        data: course

    })
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
async function deleteCourseApi(id) {
    const headers = {
        'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token"),
        'Content-Type': 'application/json'
    };
    axios.delete(`http://localhost:4000/courses/${id}`, {headers})
        .then((response) => {
            console.log(response)
            return response
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    ;
}


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

export function createCourseThunk(course) {
    return async (dispatch, getState) =>{
        console.log(course)
        const result = await createCourseApi(course)
        const createdCourse = await result.data.result
        console.log(createdCourse)
        dispatch(createCourse(createdCourse))
    }
}
export function editCourseThunk(course, id) {
    return async (dispatch, getState) =>{
        const result = await editCourseApi(course, id)
        dispatch(editCourse(course, id))
    }
}
// export function getCourseByIdThunk(id) {
//     return async (dispatch, getState) =>{
//         const result = await getCourseByIdThunk(id)
//         dispatch(createCourse(course))
//     }
// }
