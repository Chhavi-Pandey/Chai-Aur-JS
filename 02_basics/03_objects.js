// singleton : only made when the objects get created by constructor otherwise multiple instances get created
//Object.create // that is the constructor method through which singleton made.

//Object literals: when we declare as object literal then not singleton

// using symbol as key
const mySym = Symbol("Key1");

const jsUser = {
    name: "Damon",
    "full name": "Damon Salvatore",
    [mySym]: "Mykey1", //without braces it is not considered as symbol
    age: 25,
    location: "Mystic Falls",
    email: "damonSalvatore@vampire.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(jsUser.email);
// // console.log(jsUser[email]); // It will throw an error as js is dynamically typed language so it is string.
// console.log(jsUser["email"]);
// //Above both the methods are neccesary to learn because key "full name" can not be accessed with dot operator only 2nd way will work
// console.log(jsUser[mySym]);

//Now if we want to change our value
jsUser.email = "damonSalvatore@yahoo.com";
// Object.freeze(jsUser) // freeze the value so that it can't be modified further
//let's try
jsUser.email = "damonSalvatore@google.com"; //won't give error but also won't change cause it's freezed

console.log(jsUser);

jsUser.greeting = function(){
    console.log(`Hello Js User, ${jsUser.name}`);
}

console.log(jsUser.greeting); // function(anonymous): the function reference is given even though the function has not executed yet

console.log(jsUser.greeting()); // now the fuction will get printed and also printed undefined...why??

