import {CREATE_AUTHOR, GET_ALL_AUTHORS} from "./actionTypes";


export function createAuthor(name) {
    return {
        type: CREATE_AUTHOR,
        name
    }
}
export function getAllAuthors(authors) {
    return {
        type: GET_ALL_AUTHORS,
        authors
    }
}