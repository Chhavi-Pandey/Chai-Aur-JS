// Primitive data type : Call by value

// 7 types:  String, Boolean, null, undefined, Number, Symbol, BigInt(Scientific value)

// Dynamically typed language

// reference type or Non-Primitive : Call by reference

// Array, Objects, Functions

const id = Symbol('123') // USe for making unique

const bigNumber = 674927479274n
console.log(typeof bigNumber) // Just use n in the last and it become bigint

// Array use square brackets [], object : in form of key-value pair use {} : Non primitive always object datatype



// ***********************************************************************************************************************
// Stack(Primitive)=> gives copy   Heap(non- primitive)=> gives reference

let myFavChar = "Klaus Mikaelson";
let favTvdChar = myFavChar;

console.log(myFavChar);
console.log(favTvdChar);

favTvdChar = "Damon Salvatore";

console.log(myFavChar);
console.log(favTvdChar);

let userOne = {
    email: "haylay@yahoo.com",
    upiId : "hay@apl"
}

let userTwo = userOne;

userTwo.email = "hope@google.com"
console.log(userOne.email);
console.log(userTwo.email);

