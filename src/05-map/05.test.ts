import {people} from './05';

beforeEach(() => {

})
test('should get array of greeting messages', () => {

    const oldCurrentPeople = people.filter(old => old.age > 18)
    const messages = oldCurrentPeople.map(man => `hello ${man.name.split(" ")[0]}. Welcome to IT!`)


    expect(messages.length).toBe(2)
    expect(messages[0]).toBe('hello Andrew. Welcome to IT!')
    expect(messages[1]).toBe('hello Alex. Welcome to IT!')

    expect(oldCurrentPeople.length).toBe(2)
    expect(oldCurrentPeople[0].age).toBe(33)
    expect(oldCurrentPeople[1].age).toBe(24)
})