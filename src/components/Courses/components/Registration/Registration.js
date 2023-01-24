import Input from "../../../../common/Input/Input";
import Button from "../../../../common/Button/Button";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link} from "react-router-dom";

import "./Registration.css"

export default function Registration(){
    const[name, setName]= useState("")
    function onNameChange(e) {
        console.log(e.target.value)
        setName(e.target.value)
    }
    function onEmailChange(e) {
        console.log(e.target.value)
        setName(e.target.value)
    }
    function onPasswordChange(e) {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const onSubmit = (data) => {

        console.log(data);
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