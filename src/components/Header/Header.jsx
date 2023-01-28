import Logo from "./components/Logo/Logo";
import react, {useEffect} from "react"
import {userName} from "../../constants";
import Button from "../../common/Button/Button";
import "./Header.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Header = ()=>{
    const navigate = useNavigate()
    const name = ""
    useEffect(()=>{
        // axios({
        //     method: 'get',
        //     url: 'http://localhost:4000/users/me',
        //     headers: {'Content-Type': 'application/json'},
        //     Authorization: 'Bearer ' + sessionStorage.getItem('jwt_token')
        //
        // })
        //     .then((response) => {
        //         console.log(response)
        //         return response.data
        //     })
        //
        //
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });
    })
    function onLogoutClick(){
        sessionStorage.removeItem("jwt_token")
        navigate("/login")
    }
    return(
       <div className={"header"}>
           <Logo/>
           <div className="flex_wrap">
               <p>{userName}</p>
               <Button onClick={onLogoutClick} buttonText={"logout"}/>
           </div>
       </div>
    )
}
export default Header