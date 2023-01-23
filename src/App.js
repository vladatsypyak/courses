import Header from "./components/Header/Header";
import {userName} from "./constants";
import Button from "./common/Button/Button";
import "./App.css"
import CourseCard from "./components/Courses/components/CourseCard/CourseCard";
import Courses from "./components/Courses/Courses";
import {Route, Routes} from "react-router-dom"
import CreateCourse from "./components/CreateCourse/CreateCourse";
import Registration from "./components/Courses/components/Registration/Registration";


function App() {
    return (<div className={"container"}>
        <Header/>
        <Routes>
            <Route path="/" element={<Courses/>}/>
            <Route path="/createCourse" element={<CreateCourse/>}/>
            <Route path="/registration" element={<Registration/>}/>
        </Routes>
    </div>);
}

export default App;
