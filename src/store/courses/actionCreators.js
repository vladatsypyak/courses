import {CREATE_COURSE, DELETE_COURSE_SUCCEED, EDIT_COURSE, FETCH_COURSES_SUCCEED, SEARCH_COURSES} from "./actionTypes";

export function createCourse(course) {
    return {
        type: CREATE_COURSE,
        course
    }
}
export function fetchCoursesAction(courses) {
    return {
        type: FETCH_COURSES_SUCCEED,
        courses
    }
}

export function deleteCourseAction(courseId) {
    return {
        type: DELETE_COURSE_SUCCEED,
        courseId
    }
}
export function editCourse(course, id) {
    return {
        type: EDIT_COURSE,
        course,
        id
    }
}

// export function searchCourses(id, title) {
//     return {
//         type: SEARCH_COURSES,
//         id,
//         title
//     }
// }