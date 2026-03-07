//const tinderUser = new Object() //singleton object, it is created using the Object constructor, it is an empty object, it does not have any properties or methods
const tinderUser = {} //non-singleton object, it is created using the object literal syntax, it is an empty object, it does not have any properties or methods
tinderUser.id = "123abc"
tinderUser.name = "Saransh"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email:"saransh@chatgpt",
    fullname:{
        userfullname:{
            firstname:"Saransh",
            lastname:"Kotuli"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}

//const obj3 = Object.assign({},obj1,obj2,obj4) //it is used to copy the values of all enumerable own properties from one or more source objects to a target object.
//  It returns the target object. {} is the target object, obj1, obj2 and obj4 are the source objects. The properties of the source objects are copied to the target object.
//  If there are properties with the same name in the source objects, the value of the property in the target object will be overwritten by the value of the property in the last source object. 
// In this case, there are no properties with the same name in the source objects, so all properties are copied to the target object. The resulting object will have all properties from obj1, obj2 and obj4.

const obj3 = {...obj1,...obj2,}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// } //json is javascript object notation

[
    {},
    {},
    {}
]