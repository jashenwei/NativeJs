const ages = [18, 28, 22, 1, 100, 92, 14]

export const predicate = (age: number) =>  age > 90;


const oldAges = [100]

type CourseType = {
    title:string
    price: number
}

export const courses = [
    {title: 'css', price: 100},
    {title:'js', price: 200},
    {title:'react',price: 150}
]

export const cheapPredicate= (course:CourseType) => course.price < 160;


const chipCourses = [
    {title: 'css', price: 100},
    {title:'react',price: 150}
]