import CourseForm from "../../CourseForm/CourseForm";
import {createCourseThunk} from "../../../store/courses/thunk";
import store from "../../../store";
import {useParams} from "react-router-dom";
import {getCourseByIdApi} from "../../../services/apiCalls";
import axios from "axios";
import {useEffect, useState} from "react";

export default function EditCourse(props) {
    const [course, setCourse] = useState({})
    const [courseAuthorsIds, setCourseAuthorsIds] = useState([])

    const {courseId} = useParams()
    console.log(courseId)
    useEffect(() => {
            (async () => {
                const courseResult = await getCourseByIdApi(courseId);
                setCourse(courseResult)
                setCourseAuthorsIds(courseResult.authors)
            })();
    }, [])
    console.log(course)
    console.log(courseAuthorsIds)
    const authors = store.getState().authors.filter(author =>{
        return courseAuthorsIds.filter(el => el === author.id).length <= 0;

    })
    console.log(authors)
    const courseAuthors = store.getState().authors.filter(author =>{
        return courseAuthorsIds.filter(el => el === author.id).length > 0})
    function onCreateCourseClick(course) {
        store.dispatch(createCourseThunk(course))
        console.log(store.getState().courses)
    }

    console.log(courseAuthors)

    return (

        <CourseForm course={course} courseAuthorsFromApi={courseAuthors} authors={authors} onSubmit={onCreateCourseClick}/>
    )
}