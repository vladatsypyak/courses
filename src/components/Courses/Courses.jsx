import Searchbar from "./components/SearchBar/SearchBar";
import {mockedAuthorsList, mockedCoursesList} from "../../constants";
import CourseCard from "./components/CourseCard/CourseCard";
import {useState} from "react";
import {service} from "../../service";

function Courses() {
    const [inputValue, setInputValue] = useState("")
    const [coursesOnScreen, setCoursesOnScreen] = useState(mockedCoursesList)

    function onSearchClick() {
        console.log(inputValue)
        if (!inputValue) {
            setCoursesOnScreen(mockedCoursesList)
            return
        }
        setCoursesOnScreen(service.searchByTitleOrId(inputValue))
        console.log(coursesOnScreen)

    }

    function handleInputChange(e) {
        setInputValue(e.target.value)
    }
    function onAddNewCourseClick() {
        console.log(8)
    }

    return (
        <div>
            <Searchbar onAddNewCourseClick={onAddNewCourseClick} onSearchClick={onSearchClick} handleInputChange={handleInputChange}/>
            {
                coursesOnScreen.map((el) => {
                    return <CourseCard
                        courseTitle={el.title}
                        courseDescription={el.description}
                        courseDuration={el.duration}
                        courseCreationDate={el.creationDate}

                    />
                })
            }
        </div>
    )
}

export default Courses