import {Link, useParams} from "react-router-dom";
import {service} from "../../service";
import pipeDuration from "../../helpers/pipeDuration";
import pipeDate from "../../helpers/pipeDate";

export default function CourseInfo(props){
    let { id } = useParams();
    const course = service.data.courses.filter((el)=>el.id === id)[0]
    console.log(service.getCourseAuthors(course.authors));
    return(
        <div>
            <Link to={"/courses"}>Back to courses</Link>
            <h1>{props.title}</h1>
            <div className="course_info_flex_wrap">
                <div className="course_info_description">

                </div>
                <div className="course_info_details_wrap">
                    <p className="course_info_details_title">ID: {id} </p>
                    <p className="course_info_details_title">Duration: {pipeDuration(course.duration)} </p>
                    <p className="course_info_details_title">Created: {pipeDate(course.creationDate)} </p>
                    <div className="course_info_details_title">Authors: {service.getCourseAuthors(course.authors).map((el)=>{
                        return <p>{el.name}</p>
                    })} </div>
                </div>
            </div>
        </div>
    )
}