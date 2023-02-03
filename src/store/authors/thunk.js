import axios from "axios";
import {getAllAuthors} from "./actionCreators";


async function fetchAuthors() {
    return axios({
        method: 'get',
        url: `http://localhost:4000/authors/all`,
        headers: {'Content-Type': 'application/json'},

    })
        .then((response) => {
            console.log(response)
            return response.data.result
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}




export function fetchAuthorsThunk() {
    return async (dispatch, getState) => {
        const authors = await fetchAuthors()
        dispatch(getAllAuthors(authors))
    }
}


