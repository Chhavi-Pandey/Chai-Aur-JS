const myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr[0]);

const mySuperNaturalHero = ["Klaus", "Elijah", "Damon"];

const myArr2 = new Array(2, 3, 5, 7, 11) //no need of square brackets as it will be automatically taken

// console.log(myArr2.length);

// Array Methods

// myArr.push(7);
// myArr.push(8); //Appends new elements to the end of an array, and returns the new length of the array.

// console.log(myArr);
// myArr.pop();                     //Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.

myArr.unshift(6)              //Inserts new elements at the start of an array, and returns the new length of the array.

// unshift is not optimized as it shift all the elements of array.

myArr.shift(); //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.


// console.log(myArr);


// console.log(myArr.includes(9))      //Determines whether an array includes a certain element, returning true or false as appropriate.

// console.log(myArr.indexOf(9));   //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

const newArr = myArr.join();   //Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(newArr);

// console.log(typeof myArr);           // object
// console.log(typeof newArr);         //string



// .........................Slice, Splice.................................................................
// slice : The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array.
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

console.log("A ",myArr );

const myn1 = myArr.slice(1,3);

console.log(myn1);
console.log("B ",myArr);

// splice(start: number, deleteCount?: number): number[].  The number of elements to remove.
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.@returns — An array containing the elements that were deleted.

const myn2 = myArr.splice(1,3)

console.log("C ",myArr);
console.log(myn2);

