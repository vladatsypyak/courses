import Header from "./components/Header/Header";
import {userName} from "./constants";
import Button from "./common/Button/Button";
import "./App.css"
import CourseCard from "./components/Courses/components/CourseCard/CourseCard";
import Courses from "./components/Courses/Courses";
import {Route, Routes, useNavigate} from "react-router-dom"

import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import {useEffect} from "react";
import PrivateRouter from "./components/PrivateRouter/PrivateRouter";
import CreateCourse from "./components/Courses/components/CreateCourse";
import EditCourse from "./components/Courses/components/EditCourse";


function App() {
    const navigate = useNavigate()
    useEffect(() => {
        if (sessionStorage.getItem("jwt_token")) {
            navigate("/courses")
        } else {
            navigate("/login")
        }
    }, [])

    return (<div className={"container"}>
            <Header/>
            <Routes>
                <Route path="/courses" element={<Courses/>}/>
                <Route path={"/courses/createCourse"}
                       element={
                           <PrivateRouter>
                               <CreateCourse/>
                           </PrivateRouter>
                       }
                />
                <Route path={"/courses/update/:courseId"}
                       element={
                           <PrivateRouter>
                               <EditCourse/>
                           </PrivateRouter>
                       }
                />
                {/*<Route path="/courses/createCourse" element={<CreateCourse/>}/>*/}
                <Route path="/courses/:id" element={<CourseInfo/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

        </div>
    );
}

export default App;
