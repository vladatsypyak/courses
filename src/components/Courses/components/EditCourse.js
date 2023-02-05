import CourseForm from "../../CourseForm/CourseForm";
import {createCourseThunk} from "../../../store/courses/thunk";
import store from "../../../store";
import {useParams} from "react-router-dom";
import {getCourseByIdApi} from "../../../services/apiCalls";
import axios from "axios";
import {useEffect, useState} from "react";

export default function EditCourse(props) {
    const [course, setCourse] = useState({})
    const {courseId} = useParams()
    console.log(courseId)
    useEffect(() => {
            (async () => {
                const course = await getCourseByIdApi(courseId);
                console.log(course)
                setCourse(course)
            })();
    }, [])

    const authors = store.getState().authors

    function onCreateCourseClick(course) {
        store.dispatch(createCourseThunk(course))
        console.log(store.getState().courses)
    }

    return (
        <div>hi</div>
        // <CourseForm authors={authors} onSubmit={onCreateCourseClick}/>
    )
}