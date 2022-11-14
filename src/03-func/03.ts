import {student, StudentType} from '../02-objects/02'

const sum = (a:number, b:number) => {
    return a + b;
}

export const addSkill = (student:StudentType, skill:string) => {
    student.technologies.push({
        id: new Date().getDate(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export const doesStudentLivesIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName
}