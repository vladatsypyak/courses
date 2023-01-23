import Searchbar from "./components/SearchBar/SearchBar";
import {mockedAuthorsList, mockedCoursesList} from "../../constants";
import CourseCard from "./components/CourseCard/CourseCard";
import {useState} from "react";
import {service} from "../../service";
import pipeDate from "../../helpers/pipeDate";

function Courses() {
    const [inputValue, setInputValue] = useState("")
    const [coursesOnScreen, setCoursesOnScreen] = useState(service.data.courses)

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
        console.log(1)
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
                        courseCreationDate={pipeDate(el.creationDate)}
                        courseAuthors={el.authors.map((elAuthor)=>{
                            return service.data.authors.filter((author)=> author.id === elAuthor )[0]
                        })}
                    />
                })
            }
        </div>
    )
}

export default Courses