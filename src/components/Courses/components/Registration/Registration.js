import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link} from "react-router-dom";

import "./Registration.css"
import axios from "axios";

export default function Registration(){
    const[name, setName]= useState("")
    const[password, setPassword]= useState("")
    const[email, setEmail]= useState("")

    function onNameChange(e) {
        setName(e.target.value)
    }
    function onEmailChange(e) {
        setEmail(e.target.value)
    }
    function onPasswordChange(e) {
        setPassword(e.target.value)
    }
    const onSubmit = async (data) => {
        const newUser = {
            name,
            password,
            email,
        };
        // fetch('http://localhost:4000/register', {
        //     method: 'POST',
        //     body: JSON.stringify(newUser),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then((response)=> {
        //         console.log(response)
        //         if (response.ok) {
        //             return response.json()
        //         }
        //          throw new Error("email is not valid or it has already been taken")
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         alert("email is not valid or it has already been taken")
        //     })


        axios({
            method: 'post',
            url: 'http://localhost:4000/register',
            data: JSON.stringify(newUser),
            headers: {'Content-Type': 'application/json'},

        })
            .then((response) => {
                console.log(response.data)
                return response.data
            })
            .then((data) => {
                console.log( data.result.split(" ")[1]);
                return data.result.split(" ")[1]
            })
            .then((data) => sessionStorage.setItem('jwt_token', data))
            .catch((error) => {
                console.log(error.response.data.errors)
                console.error('Error:', error);
                alert(error.response.data.errors.toString())

            });






    }
    const {register, control, handleSubmit, watch, formState: {errors}} = useForm();
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={"registration_wrap"}>
            <div className="registration_flex_wrap">
                <Input  placeholderText={"name"}  labelText={"Name"} classname={"registration_input"} register={register}
                        onChange={onNameChange} required/>
                <Input  placeholderText={"email"}  labelText={"Email"} classname={"registration_input"} register={register}
                        onChange={onEmailChange} required/>
                <Input  placeholderText={"password"} inputType={"password"}  labelText={"Password"} classname={"registration_input"} register={register}
                        onChange={onPasswordChange} required/>
                <button className={"submit_btn"} type={"submit"}>Registration</button>
                <p>If you have an account you can <Link to={"/login"}>Login</Link></p>
            </div>
        </form>
    )
}