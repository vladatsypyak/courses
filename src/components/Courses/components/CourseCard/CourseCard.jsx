import "../../../Courses/Courses.css"
import Button from "../../../../common/Button/Button";
function CourseCard(props) {
    console.log(props.courseDuration)
return (
<div className={"course_card"}>
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
                <p><span className="card_info_title">Authors</span>{props.courseAuthors}</p>
                <p><span className="card_info_title">Duration</span>{props.courseDuration}</p>
                <p><span className="card_info_title">Created</span>{props.courseCreationDate}</p>
            </div>
            <Button buttonText={"Show course"}/>
        </div>
    </div>
</div>)
}
export default CourseCard