import axios from "axios";
import {loginAction} from "./actionCreators";

async function getUserInfo() {
    return axios({
        method: 'get',
        url: 'http://localhost:4000/users/me',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token"),
        },

    })
        .then((response) => {
            return response.data.result
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("password or login is incorrect")
        });
}

async function login(email, password) {

    const user = {
        password,
        email,
    };

    return axios({
        method: 'post',
        url: 'http://localhost:4000/login',
        data: JSON.stringify(user),
        headers: {'Content-Type': 'application/json'},

    })
        .then((response) => {
            console.log(response)
            return response.data
        })
        .then((data) => {
            return data.result.split(" ")[1]
        })
        .then((data) => {
            sessionStorage.setItem('jwt_token', data)
            return data
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("password or login is incorrect")
        });
}


export function loginThunk(email, password) {
    return async (dispatch, getState) => {
        const response = await login(email, password)
        const userName = await getUserInfo()
        console.log(response)
        dispatch(loginAction(email, response,userName.name ))
    }
}

