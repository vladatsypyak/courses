import CourseForm from "../../CourseForm/CourseForm";
import {createCourseThunk} from "../../../store/courses/thunk";
import store from "../../../store";

export default function  CreateCourse(props){
const authors = store.getState().authors
    function onCreateCourseClick(course) {
        store.dispatch(createCourseThunk(course))
        console.log(store.getState().courses)
    }
    return (
        <CourseForm onSubmit={onCreateCourseClick}/>
    )
}