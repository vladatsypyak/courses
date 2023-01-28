import {CREATE_COURSE, SEARCH_COURSES} from "./actionTypes";

export function createCourse(course) {
    return {
        type: CREATE_COURSE,
        course
    }
}
// export function searchCourses(id, title) {
//     return {
//         type: SEARCH_COURSES,
//         id,
//         title
//     }
// }