import {initialState} from "../index";
import {CREATE_COURSE} from "../courses/actionTypes";
import {mockedAuthorsList} from "../../constants";
import {CREATE_AUTHOR} from "./actionTypes";

export default function authorsReducer(state = mockedAuthorsList, action) {
    switch (action.type) {
        case CREATE_AUTHOR:
            console.log(state)
            return [...state,
                {
                    id: String(Math.random() * 10),
                    name: action.name
                }]
        // case SEARCH_COURSES:
        //     return [...searchByTitle(state.courses, action.title), ...searchById(state.courses, action.id)]
        default:
            return state
    }
}
// createAuthor(name) {
//     this.data = {
//         ...this.data,
//         authors: [...this.data.authors, {
//             id: String(Math.random() * 10),
//             name: name
//         }]
//     }
// },
