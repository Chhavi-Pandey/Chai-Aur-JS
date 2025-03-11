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

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2); // Object.assign(target, source) : so here {} is a target so it is up to you.
//OR
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    },
    {
        id: 1,
        email: "c@gmail.com"
    }
]

users[1].email;

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));