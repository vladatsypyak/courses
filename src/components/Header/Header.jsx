import Logo from "./components/Logo/Logo";
import react from "react"
import {userName} from "../../constants";
import Button from "../../common/Button/Button";
import "./Header.css"

const Header = ()=>{
    return(
       <div className={"header"}>
           <Logo/>
           <div className="flex_wrap">
               <p>{userName}</p>
               <Button buttonText={"logout"}/>
           </div>
       </div>
    )
}
export default Header