import {mockedAuthorsList, mockedCoursesList} from "./constants";

export const service = {
    data: {
        courses: mockedCoursesList,
        authors: mockedAuthorsList
    },
    searchByTitle(title) {
        return this.data.courses.filter((el) => {
                const regex = new RegExp(title.toUpperCase(), 'g'); // correct way
                return regex.test(el.title.toUpperCase())
            }
        )
    },
    searchById(id) {
        return this.data.courses.filter((el) => {
                const regex = new RegExp(id.toUpperCase(), 'g'); // correct way
                return regex.test(el.id.toUpperCase())
            }
        )
    },
    searchByTitleOrId(value) {
        return [...this.searchByTitle(value), ...this.searchById(value)]
    },
    createAuthor(name) {
        this.data = {
            ...this.data,
            authors: [...this.data.authors, {
                id: String(Math.random() * 10),
                name: name
            }]
        }
    },
    createCourse(course){
        this.data.courses = [... this.data.courses, course]

    }
}