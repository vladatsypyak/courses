import Searchbar from "./components/SearchBar/SearchBar";
import {mockedAuthorsList, mockedCoursesList} from "../../constants";
import CourseCard from "./components/CourseCard/CourseCard";
import {useEffect, useState} from "react";
import {searchByTitleOrId, service} from "../../redux/service";
import pipeDate from "../../helpers/pipeDate";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux'
import store from "../../store";
import {createAuthor} from "../../store/authors/actionCreators";
import logo from "../Header/components/Logo/Logo";

function Courses() {
    const [inputValue, setInputValue] = useState("")
    const [coursesOnScreen, setCoursesOnScreen] = useState(store.getState().courses)
    const navigate = useNavigate()
    const courses = useSelector(store => store.courses)
    useEffect(() => {
        getCourses()
        console.log(courses)
    }, [])

    console.log(courses)

    function getCourses() {
        return store.dispatch(({type: "FETCH_COURSES"}));
    }

    function onSearchClick(e) {

        console.log(inputValue)
        if (!inputValue) {
            setCoursesOnScreen(store.getState().courses)

            return
        }
        setCoursesOnScreen(searchByTitleOrId(inputValue))
        console.log(searchByTitleOrId(inputValue))

    }

    function handleInputChange(e) {
        console.log(1)
        setInputValue(e.target.value)
    }

    function onAddNewCourseClick() {
        console.log(8)
    }

    function onCardClick(id) {
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
            <Searchbar onAddNewCourseClick={onAddNewCourseClick} onSearchClick={onSearchClick}
                       handleInputChange={handleInputChange}/>
            {
                coursesOnScreen.map((el) => {
                    return <CourseCard
                        onClick={onCardClick}
                        id={el.id}
                        courseTitle={el.title}
                        courseDescription={el.description}
                        courseDuration={el.duration}
                        courseCreationDate={pipeDate(el.creationDate)}
                        courseAuthors={el.authors.map((elAuthor) => {

                            return store.getState().authors.filter((author) => author.id === elAuthor)[0]
                        })}
                    />
                })
            }
            {courses.map((el)=>{
                return <p>{el.title}</p>
            })}
        </div>
    )
}

export default Courses