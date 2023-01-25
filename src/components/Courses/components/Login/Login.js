import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link} from "react-router-dom";

import "./Login.css"

export default function Login(){

    const[password, setPassword]= useState("")
    const[email, setEmail]= useState("")


    function onEmailChange(e) {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    function onPasswordChange(e) {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    const onSubmit =  (data) => {
        const user = {
            password,
            email,
        };
        fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'},
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong')
            })

            .then((data) => {
                console.log( data.result.split(" ")[1]);
                return data.result.split(" ")[1]
            })
            .then((data) => sessionStorage.setItem('jwt_token', data))
            .catch((error) => {
                console.log(1)
                console.error('Error:', error);
                alert("password or login is incorrect")
            });

    }
    const {register, control, handleSubmit, watch, formState: {errors}} = useForm();
    return (
       <div className={"auth_wrap"}>
           <h1 className="auth_title">Login</h1>
           <form onSubmit={handleSubmit(onSubmit)} className={"registration_wrap"}>
               <div className="registration_flex_wrap">
                   <Input  placeholderText={"email"}  labelText={"Email"} classname={"registration_input"} register={register}
                           onChange={onEmailChange} required/>
                   <Input  placeholderText={"password"} inputType={"password"}  labelText={"Password"} classname={"registration_input"} register={register}
                           onChange={onPasswordChange} required/>
                   <button className={"submit_btn"} type={"submit"}>Login</button>
                   <p>If you have an account you can <Link to={"/registration"}>Registration</Link></p>
               </div>
           </form>
       </div>
    )
}