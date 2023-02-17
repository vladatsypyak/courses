import {CREATE_AUTHOR, GET_ALL_AUTHORS} from "./actionTypes";


export function createAuthor(author) {
    return {
        type: CREATE_AUTHOR,
        author
    }
}
export function getAllAuthors(authors) {
    return {
        type: GET_ALL_AUTHORS,
        authors
    }
}