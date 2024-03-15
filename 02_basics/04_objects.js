const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Ansh"
tinderUser.isLoggedIn = false

// const.log(tinderUser);

const regularUser = {
    email: "ansh@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Ansh",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = Object.assign({}, obj1, obj2)
// in Object.assign(target,source) => all the elements of the source are put in the target and made an single object... we take empty curly to make a new object containing all the objects... or else the first object (obj1) will change and will be included with all the other elements of all the other objects

const obj3 = {...obj1, ...obj2}
console.log(obj3); 

const users = [
    {

    },
    {

    },
    {

    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Oject.entries(tinderUser));
// in entries each keys and values is taken in as an array in an complete array

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor: instructor} = course 

// console.log(courseInstructor);
console.log(instructor);
