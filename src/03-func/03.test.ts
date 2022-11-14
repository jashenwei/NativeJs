import {StudentType} from '../02-objects/02';
import {addSkill, doesStudentLivesIn, makeStudentActive} from './03';

let student: StudentType;
beforeEach(() => {
    student = {
        id: 1,
        name: "Alex",
        age: 32,
        isActive: false,
        address: {
            streetTitle: "Backwoods 1/2",
            city: {
                title: "New York",
                countryTitle: "USA"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "JavaScript"
            },
        ]
    }
})

test("new test skill should be added to student", () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "React")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("React")
    expect(student.technologies[3].id).toBeDefined()
})

test("new should be made active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test("does student lives in city?", () => {

    let result1 = doesStudentLivesIn(student, "Moscow")
    let result2 = doesStudentLivesIn(student, "New York")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})