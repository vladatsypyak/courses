import "../../Header.css"
import {Link} from "react-router-dom";

const Logo = ()=>{
    return(
        <Link to={"/"}>
            <img className={"logo"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScHXkxgYzdD7eE9nrLMLlkkVH9jFkcAnJnzQ&usqp=CAU" alt=""/>

        </Link>
    )
 }
 export default Logo