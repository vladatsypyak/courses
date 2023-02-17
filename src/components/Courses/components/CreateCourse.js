import CourseForm from "../../CourseForm/CourseForm";
import {createCourseThunk} from "../../../store/courses/thunk";
import store from "../../../store";
import {useNavigate} from "react-router-dom";

export default function  CreateCourse(props){
    const navigate= useNavigate()
const authors = store.getState().authors
    function onCreateCourseClick(course) {
        store.dispatch(createCourseThunk(course)).then(()=> navigate("/courses"))
        console.log(store.getState().courses)
    }
    return (
        <CourseForm authors={authors} onSubmit={onCreateCourseClick}/>
    )
}