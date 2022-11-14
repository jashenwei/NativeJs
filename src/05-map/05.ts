export type ManType = {
    name: string
    age: number
}

export const people: ManType[] = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alex Petrov', age: 24},
    {name: 'Anna Bush', age: 18}
]

const transformator = (man: ManType) => ({
    stack: ['html+css', 'js', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
})


const devs = [
    {
        stack: ['html+css', 'js', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    }
]

const devMap = people.map(man => ({
    stack: ['html+css', 'js', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
}))

const messages = people.map( man => `hello ${man.name.split(" ")[0]}. Welcome to IT!`)

