import Searchbar from "./components/SearchBar/SearchBar";
import CourseCard from "./components/CourseCard/CourseCard";
import {useEffect, useState} from "react";
import {searchByTitleOrId} from "../../services/service";
import pipeDate from "../../helpers/pipeDate";
import {useNavigate} from "react-router-dom";
import {useSelector} from 'react-redux'
import store from "../../store";
import {deleteCourseThunk, fetchCoursesThunk} from "../../store/courses/thunk";
import {getAllAuthors} from "../../store/authors/actionCreators";
import {fetchAuthorsThunk} from "../../store/authors/thunk";


function Courses() {
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()
    const courses = useSelector(store => store.courses)
    const [coursesOnScreen, setCoursesOnScreen] = useState(courses)

    useEffect(() => {
        if (store.getState().app.firstRender) {
            getCourses()
                .then(() => {
                    setCoursesOnScreen(store.getState().courses)
                })
            store.dispatch(fetchAuthorsThunk())
            store.dispatch(({type: "FIRST_RENDER"}))
        }
    }, [])

    function getCourses() {
        return store.dispatch(fetchCoursesThunk())
    }

    function onSearchClick(e) {

        if (!inputValue) {
            setCoursesOnScreen(store.getState().courses)
            return
        }
        setCoursesOnScreen(searchByTitleOrId(inputValue))
        console.log(searchByTitleOrId(inputValue))
    }

    function handleInputChange(e) {
        setInputValue(e.target.value)
    }

    function onAddNewCourseClick() {
        console.log(8)
    }

    function onCardClick(id) {
        console.log(id)
        navigate(`/courses/${id}`)
    }

    function onDeleteCourseClick(id) {
        console.log(id)
        console.log("delete_btn")
        store.dispatch(deleteCourseThunk(id)).then(()=>  setCoursesOnScreen([...store.getState().courses]))

    }
    function onEditCourseClick(id){
        navigate(`update/${id}`)
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
                        onDeleteCourseClick={onDeleteCourseClick}
                        onEditCourseClick={onEditCourseClick}
                        courseAuthors={el.authors.map((elAuthor) => {

                            return store.getState().authors.filter((author) => author.id === elAuthor)[0]
                        })}
                    />
                })
            }

        </div>
    )
}

export default Courses