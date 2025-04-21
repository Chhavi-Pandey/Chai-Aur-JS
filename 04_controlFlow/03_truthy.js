// const userEmail = "Mikaelson@originals.com" // truthy

// if (userEmail) {
//     console.log("Got User email");
// } else{
//     console.log("Don't have user Email");
// }

// falsy values : false, 0, -0, BigInt 0n, "", null, undefined, NaN

// const userEmail = {} // truthy; empty object,  while empty string "" is falsy.
const userEmail = [] //truthy ; empty array
if (userEmail) {
    //console.log("Got User email");
} else{
    //console.log("Don't have user Email");
}

// truthy values (truthy values are which is not falsy but here are some surprising turthy values) : "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0){ // To check whether array is empty
    // console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj).length === 0){ // to check whether object is empty
    // console.log("Object is empty");
} // Object.keys(emptyObj) : will give array of keys so we write length property like array.

// false == 0  // result: true
// false == '' //true
// 0 == '' // true

// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;

val1 = null ?? 10;

val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

// console.log(val1);


// ternary operator

//condition ? true : false

let price = 100;
price <= 80 ? console.log("less than 80") : console.log("more than 80");

