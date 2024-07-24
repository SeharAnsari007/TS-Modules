import students from "./data";

export const getAllStudents = () => {
    return students
}

export const getOnsiteStudent = () => {
    const result = students.filter((student) => student.isOnsiteAllowed)
    return result
}

export const isPassedEntryTest = () => {
    const result = students.filter((student) => student.entryTest.isPassed)
    return result
}

export const particularStudent = (id: number) => {
    const getUser = students.find((student) => student.id === id)
    return getUser
}