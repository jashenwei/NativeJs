import {cheapPredicate, courses, predicate} from './04';
import exp from 'constants';

test("should take old peoples older then 90", ()=>{
    const ages = [18, 28, 22, 1, 100, 92, 14]

    const oldAges = ages.filter(predicate)

    expect(oldAges.length).toBe(2)
    expect(oldAges[0]).toBe(100)
})

test("should take courses chipper 160", ()=>{

    const chipCourses = courses.filter(course => course.price < 160)

    expect(chipCourses.length).toBe(2)
    expect(chipCourses[0].title).toBe('css')
    expect(chipCourses[1].title).toBe('react')
})

test("get only completed tasks", ()=>{
    const tasks = [
        {id:1,title: 'bread', isDone:false},
        {id:2,title: 'milk', isDone:true},
        {id:3,title: 'salt', isDone:false},
        {id:4,title: 'sugar', isDone:true},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].title).toBe('milk')
    expect(completedTasks[1].title).toBe('sugar')
})