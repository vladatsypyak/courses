import "../../../Courses/Courses.css"
import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";
import {Link} from "react-router-dom";

function Searchbar(props) {
    return (
        <div className={"searchbar_wrap"}>
            <div className="search_wrap">
                <Input onChange={props.handleInputChange}/>
                <Button onClick={props.onSearchClick} buttonText={"Search"}/>
            </div>
            <Link to={"createCourse"}>
                <Button onClick={props.onAddNewCourseClick} buttonText={"Add new course"}/>
            </Link>
        </div>)
}

export default Searchbar