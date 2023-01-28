import {CREATE_AUTHOR} from "./actionTypes";


export function createAuthor(name) {
    return {
        type: CREATE_AUTHOR,
        name
    }
}
