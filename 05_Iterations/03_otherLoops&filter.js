// for of

let arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num);
    
// }

const greetings = "Hello World !";

// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

// Maps : The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive value) may be used as either a key or a value. No duplicate value

const map = new Map();
map.set('In', +91);  //Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

map.set('USA', +1);
// console.log(map);


// for (const mpp of map) {
//     console.log(mpp);
// }

// for (const [mpp,value] of map) {
//     console.log(mpp, ':-', value);
// }

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }  // object is not iterable


//***********************  For in ******************************//

let prog = {
    js : 'javascript',
    cpp : 'C++',
    py : 'python',
    java: 'java'
}

// for (const key in prog) {
//     // console.log(key);
//     // console.log(`${key} extension is for ${prog[key]}`);
    
// }

let programming = ["js", "cpp", "py", "java"];

// for (const key in programming) {
//    console.log(key);
    // console.log(programming[key]);
    
//}

// for of won't work on object

// for of and for in both works on array
// for in won't work on map



// ******************************* For each *****************************

let coding = ["js", "ruby", "java", "python", "cpp"]

// for each : Performs the specified action for each element in an array.
// coding.forEach(function (item) {
//     console.log(item); 
// } )

// coding.forEach((item) =>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        language : "javaScript",
        fileName : "js"
    },
    {
        language : "python",
        fileName : "py"
    },
    {
        language : "c++",
        fileName : "cpp"
    }
]

// myCoding.forEach((item) => {
//     // console.log(item.fileName);
//     // console.log(item.language);
// } )

// for each is also work for array of objects




// const code = ["js", "ruby", "java", "python", "cpp"]
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item; // for each doesn't return
// })

// console.log(values); // undefined



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums); // will return an array [5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return (num > 4) // if you are using curly braces in arrow fun you must write return keyword
// })



// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num);
//     }
// })

// console.log(newNums);    // Same work can also be done with filter eve more efficiently and above we've done the same


const books = [
    {title : 'One', genre : 'Fiction', publish : 1981, edition : 2002},
    {title : 'Two', genre : 'History', publish : 1991, edition : 2006},
    {title : 'Three', genre : 'Science', publish : 1987, edition : 2005},
    {title : 'Four', genre : 'Fiction', publish : 1989, edition : 2010},
    {title : 'Five', genre : 'History', publish : 1999, edition : 2019},
    {title : 'Six', genre : 'Non- Fiction', publish : 1992, edition : 2000},
]

let userBooks = books.filter( (bk) => bk.genre === 'History')
userBooks = books.filter( (bk) => { 
    return (bk.edition >= 2000 && bk.publish <= 1990)
} )
console.log(userBooks);
