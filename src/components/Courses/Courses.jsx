import Searchbar from "./components/SearchBar/SearchBar";
import {mockedAuthorsList, mockedCoursesList} from "../../constants";
import CourseCard from "./components/CourseCard/CourseCard";
import {useState} from "react";
import {service} from "../../service";
import pipeDate from "../../helpers/pipeDate";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Courses() {
    const [inputValue, setInputValue] = useState("")
    const [coursesOnScreen, setCoursesOnScreen] = useState(service.data.courses)
    const navigate = useNavigate()
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
    function onCardClick(id){
        console.log(id)
        navigate(`/courses/${id}`)
        // axios({
        //     method: 'get',
        //     url: `http://localhost:4000/courses/${id}`,
        //     headers: {'Content-Type': 'application/json'},
        //
        // })
        //     .then((response) => {
        //         console.log(response)
        //         return response.data
        //     })
        //     // .then((data) => sessionStorage.setItem('jwt_token', data))
        //     // .then(()=> navigate("/courses"))
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    }

    return (
        <div>
            <Searchbar onAddNewCourseClick={onAddNewCourseClick} onSearchClick={onSearchClick} handleInputChange={handleInputChange}/>
            {
                coursesOnScreen.map((el) => {
                    return <CourseCard
                        onClick={onCardClick}
                        id={el.id}
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