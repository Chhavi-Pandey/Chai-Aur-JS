// const tinderUser = new Object() //singleton object
const tinderUser = {}
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Bonnie"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "bonnie2512@gmail.com",
    fullname:{
        userFullName:{
            firstName: "Bonnie",
            lastName: "Bennett"
        }
    }
}

// console.log(regularUser.fullname.userFullName.firstName);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"a", 4:"b"};

// const obj3 = {obj1, obj2} //Object inside object

// const obj3 = Object.assign({}, obj1, obj2); 
//Static methond: Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// Can be more sources than two
// @param target — The target object to copy to.
// @param source1 — The first source object from which to copy properties.
// @param source2 — The second source object from which to copy properties.

const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// Object.keys(object-name) //will return the array of keys and same the values : Object.values(object-name)

console.log(Object.entries(tinderUser)); // every key-value formed into array
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if that property exist?



const course ={
    coursename: "JavaScript",
    price: 999,
    courseInstructor : "Hitesh Choudhary" 
}

const {courseInstructor} = course //so that you will not have to write course.courseInstructor over and over again
console.log(courseInstructor); // const {courseInstructor: instructor} so you can also write only instructor
// this is kind of object destructuring

// Earlier the data returned by API came in form of xml but now in json format : JavaScript Object Notation

//json Format : can be in object kinda and array too

// {
//     "name" : "Care",
//     "isVampire" : true,
// }