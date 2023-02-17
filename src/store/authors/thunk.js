import axios from "axios";
import {createAuthor, getAllAuthors} from "./actionCreators";


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

async function createAuthorApi(name) {
    return axios({
        method: 'post',
        url: `http://localhost:4000/authors/add`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.getItem("jwt_token"),

        },
        data: {"name": name}

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
        console.log(authors)
        dispatch(getAllAuthors(authors))
    }
}

export function createAuthorThunk(name) {
    return async (dispatch, getState) => {
        const author = await createAuthorApi(name)
        console.log(author)
        dispatch(createAuthor(author))
    }
}


