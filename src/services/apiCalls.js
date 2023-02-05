import axios from "axios";

export async function getCourseByIdApi(id) {
    const headers = {
        'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token"),
        'Content-Type': 'application/json'
    };

    try {
        const fetch = await axios.get(`http://localhost:4000/courses/${id}`, {headers})
        const response = await fetch
        console.log(response)
        return response
    } catch (e) {
        console.log('We have the error', e);
    }

}