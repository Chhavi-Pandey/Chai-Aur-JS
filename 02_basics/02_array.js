const tvd_heros = ["Stefan", "Damon", "Tyler"];
const TheOriginals = ["Klaus", "Elijah", "Kol"];

tvd_heros.push(TheOriginals); // this consider a whole array as single element

// console.log(tvd_heros);
// console.log(tvd_heros[3][1]);

const allHeros = tvd_heros.concat(TheOriginals); // concat returns a new array
console.log(allHeros);

const all_new_heros = [...tvd_heros, ...TheOriginals]; //spread operator '...': expand an iterable into multiple (individual) values

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. depth:infinty: means you don't need to specify as it will do with all of depths but you can provide number here
console.log(real_another_array);


console.log(Array.isArray("Haylay"))  //isArray: to check if it is array

console.log(Array.from("Haylay")) // Array.from():  Creates an array from an iterable object. 
// iterable — An iterable object to convert to an array.

console.log(Array.from({name: "Haylay"})) // interesting with object : as it has to be specifiy that make array of key or value so if not specified it will return empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array.of: Returns a new array from a set of elements.
//  items — A set of elements to include in the new array object.