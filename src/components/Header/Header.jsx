import Logo from "./components/Logo/Logo";
import react, {useEffect} from "react"
import Button from "../../common/Button/Button";
import "./Header.css"
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";

const Header = ()=>{
    const user = useSelector(state => state.user)
    const navigate = useNavigate()
    const name = ""
    useEffect(()=>{

    })
    function onLogoutClick(){
        sessionStorage.removeItem("jwt_token")
        navigate("/login")
    }
    return(
       <div className={"header"}>
           <Logo/>
           <div className="flex_wrap">
               <p>{user.name}</p>
               <Button onClick={onLogoutClick} buttonText={"logout"}/>
           </div>
       </div>
    )
}
export default Header