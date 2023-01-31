import "../../../Courses/Courses.css"
import Button from "../../../../common/Button/Button";
function CourseCard(props) {

function onClick(){
    props.onClick(props.id)
}
return (
<div onClick={onClick} className={"course_card"}>
    <div className="card_flex_wrap">
        <div className="flex_item card_main">
            <h2 className="card_title">
                {props.courseTitle}
            </h2>
            <p className="card_desc">
                {props.courseDescription}
            </p>
        </div>
        <div className="flex_item card_info_section">
            <div className="card_info">
                <div><span className="card_info_title">Authors</span>{props.courseAuthors.map(el=>{
                    return <p>{el?.name}</p>
                })}</div>
                <p><span className="card_info_title">Duration</span>{props.courseDuration}</p>
                <p><span className="card_info_title">Created</span>{props.courseCreationDate}</p>
            </div>
            <div className={"buttons_wrap"}>
                <Button buttonText={"Show course"}/>
                <Button buttonText={"Edit"}/>
                <Button onClick={()=> props.onDeleteCourseClick(props.id)} buttonText={"Delete"}/>

            </div>
        </div>
    </div>
</div>)
}
export default CourseCard