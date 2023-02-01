import Input from "../../common/Input/Input";
import Button from "../../common/Button/Button";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'; // version 5.2.0

import "./Login.css"
import axios from "axios";
import store from "../../store";
import {loginAction, testLog, userLogin} from "../../store/user/actionCreators";

export default function Login() {

    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const navigate = useNavigate()


    function onEmailChange(e) {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    function onPasswordChange(e) {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const onSubmit = (data) => {
        store.dispatch(userLogin(email, password))
        navigate("/courses")

    }
    const {register, control, handleSubmit, watch, formState: {errors}} = useForm();
    return (
        <div className={"auth_wrap"}>
            <h1 className="auth_title">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={"registration_wrap"}>
                <div className="registration_flex_wrap">
                    <Input placeholderText={"email"} labelText={"Email"} classname={"registration_input"}
                           register={register}
                           onChange={onEmailChange} required/>
                    <Input placeholderText={"password"} inputType={"password"} labelText={"Password"}
                           classname={"registration_input"} register={register}
                           onChange={onPasswordChange} required/>
                    <button className={"submit_btn"} type={"submit"}>Login</button>
                    <p>If you have an account you can <Link to={"/registration"}>Registration</Link></p>
                </div>
            </form>
        </div>
    )
}