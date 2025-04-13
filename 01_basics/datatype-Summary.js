// Primitive data type : Call by value
// Difference:- How they stored in memory and how can we access them (Primitive and non-primitive data type)
// primitive 7 types:  String, Boolean, null, undefined, Number, Symbol, BigInt(Scientific value)

// Dynamically typed language

// reference type or Non-Primitive : Call by reference

// Array, Objects, Functions

const id = Symbol('123') // USe for making unique
const anotherId = Symbol('123');
// console.log(id === anotherId);

const bigNumber = 674927479274n
// console.log(typeof bigNumber) // Just use n in the last and it become bigint

// Array use square brackets [], object : in form of key-value pair use {} : Non primitive always object datatype

const vampires = ["Rebekah", "Katherine", "Caroline"];

let myObj ={
    name : "Klaus",
    age : 1000
}

const myFunction = function(){
    console.log("Hello Vampires");
    
} // function object

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

