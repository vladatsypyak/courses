import {mockedAuthorsList, mockedCoursesList} from "./constants";
import store from "./store";

export const service = {

    // searchByTitle(courses, title) {
    //     return courses.filter((el) => {
    //             const regex = new RegExp(title.toUpperCase(), 'g'); // correct way
    //             return regex.test(el.title.toUpperCase())
    //         }
    //     )
    // },
    // searchById(courses, id) {
    //     return courses.filter((el) => {
    //             const regex = new RegExp(id.toUpperCase(), 'g'); // correct way
    //             return regex.test(el.id.toUpperCase())
    //         }
    //     )
    // },
    // searchByTitleOrId(value) {
    //     return [...this.searchByTitle(store.getState().courses, value), ...this.searchById(store.getState().courses, value)]
    // },
    // createAuthor(name) {
    //     this.data = {
    //         ...this.data,
    //         authors: [...this.data.authors, {
    //             id: String(Math.random() * 10),
    //             name: name
    //         }]
    //     }
    // },
    // createCourse(course) {
    //     this.data.courses = [...this.data.courses, course]
    //
    // },
    // getCourseAuthors(courseAuthors) {
    //    return courseAuthors.map((elAuthor) => {
    //        console.log(elAuthor)
    //         return service.data.authors.filter((author) => author.id === elAuthor)[0]
    //     }).filter(el => el)
    //
    // }
}

function searchByTitle(courses, title) {
    return courses.filter((el) => {
            const regex = new RegExp(title.toUpperCase(), 'g'); // correct way
            return regex.test(el.title.toUpperCase())
        }
    )
}
function searchById(courses, id) {
    return courses.filter((el) => {
            const regex = new RegExp(id.toUpperCase(), 'g'); // correct way
            return regex.test(el.id.toUpperCase())
        }
    )
}
export function searchByTitleOrId ( value) {
        return [...searchByTitle(store.getState().courses, value), ...searchById(store.getState().courses, value)]
}