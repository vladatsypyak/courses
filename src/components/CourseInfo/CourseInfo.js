import {Link, useParams} from "react-router-dom";
import {service} from "../../service";
import pipeDuration from "../../helpers/pipeDuration";
import pipeDate from "../../helpers/pipeDate";
import "./CourseInfo.css"
import store from "../../store";

export default function CourseInfo(props){
    let { id } = useParams();
    const course = store.getState().courses.filter((el)=>el.id === id)[0]

    return(
        <div className={"container"}>
            <Link to={"/courses"}>Back to courses</Link>
            <h1 className={"course_info_title"}>{course.title}</h1>
            <div className="course_info_flex_wrap">
                <div className="course_info_description">
                    {course.description}
                </div>
                <div className="course_info_details_wrap">
                    <p className="course_info_details_title"><span>ID</span>: {id} </p>
                    <p className="course_info_details_title"><span>Duration</span>: {pipeDuration(course.duration)} </p>
                    <p className="course_info_details_title"><span>Created</span>: {pipeDate(course.creationDate)} </p>
                    <div className="course_info_details_title"><span>Authors</span>: {service.getCourseAuthors(course.authors).map((el)=>{
                        return <p>{el.name}</p>
                    })} </div>
                </div>
            </div>
        </div>
    )
}