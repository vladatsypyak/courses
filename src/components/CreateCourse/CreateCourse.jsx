import {useState} from "react";
import {service} from "../../service";
import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import "./CreateCourse.css"
import pipeDuration from "../../helpers/pipeDuration";
import {useForm, Controller} from "react-hook-form";

function CreateCourse() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [authorName, setAuthorName] = useState("")
    const [duration, setDuration] = useState("")
    const [courseAuthors, setCourseAuthors] = useState([])
    const [authors, setAuthors] = useState(service.data.authors)


    function onTitleChange(e) {
        console.log(e.target.value)
        setTitle(e.target.value)
    }

    function onDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function onAuthorNameChange(e) {
        setAuthorName(e.target.value)
    }

    function onDurationChange(e) {
        console.log(5)
        setDuration(e.target.value)
    }

    function onCreateAuthorClick() {
        service.createAuthor(authorName)
        setAuthors(service.data.authors)
        console.log(service.data)
    }

    function onAddAuthor(author) {
        setCourseAuthors([...courseAuthors, author])
        setAuthors(authors.filter((el) => el.id !== author.id))

    }

    function onAuthorDelete(author) {
        setAuthors([...authors, author])
        setCourseAuthors(courseAuthors.filter((el) => el.id !== author.id))


    }

    function onCreateCourseClick() {
        service.createCourse({
            id: String(Math.random()),
            title,
            description,
            creationDate: String(new Date()),
            duration,
            authors: courseAuthors
        })
        console.log(service.data.courses)
    }

    const onSubmit = (data) => {

        onCreateCourseClick()
        console.log(data);
    }
    const {register, control, handleSubmit, watch, formState: {errors}} = useForm();


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"create_course_wrap"}>

            <div className="create_course_flex_wrap">
                <Input labelText={"Title"} classname={"create_course_input"} register={register}
                       onChange={onTitleChange} required/>
                <button type={"submit"}>Create course</button>
            </div>
            <p className={"create_course_text"}>Description</p>
            <textarea className={"create_course_description"} onChange={onDescriptionChange}/>
            <div className="create_course_authors_section">
                <div className="create_course_add_author create_course_authors_section_item">
                    <h2 className={"create_course_title"}>Add author</h2>
                    <div className="test">
                        <Input register={register}  labelText={"Author name"}
                               classname={"create_course_section_input"} onChange={onAuthorNameChange}/>

                    </div>
                    <Button onClick={onCreateAuthorClick} buttonText={"Create author"}/>
                </div>
                <div className="create_course_authors create_course_authors_section_item">
                    <h2 className={"create_course_title"}>Authors</h2>
                    <div className="create_course_authors_wrap">
                        {authors.map(el => {

                            return <div className={"authors_item"}>
                                <p>{el.name}</p>
                                <Button onClick={() => {
                                    onAddAuthor(el)
                                }} buttonText={"Add author"}/>

                            </div>
                        })}
                    </div>
                </div>
                <div className="create_course_duration create_course_authors_section_item">
                    <h2 className={"create_course_title"}>Duration</h2>
                    <Input inputType={"number"} labelText={"Duration"} register={register} required
                           classname={"create_course_section_input"} onChange={onDurationChange}/>

                    <p className="create_course_duration_value">
                        Duration {pipeDuration(duration)} hours
                    </p>
                </div>
                <div className="create_course_course_authors create_course_authors_section_item">
                    <h2 className={"create_course_title"}>Course authors</h2>
                    {courseAuthors.map(el => {
                        return <div className="authors_item">
                            <p>{el.name}</p>
                            <Button onClick={() => {
                                onAuthorDelete(el)
                            }} buttonText={"Delete author"}/>
                        </div>
                    })}


                </div>
            </div>
        </form>
    )
}

export default CreateCourse