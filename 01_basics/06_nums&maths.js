const score = 400;

const balance = new Number(1000);
console.log(balance); // fixed that the value will be number type using heap memory(new keyword)

console.log(score); //dynamically typed of course but it is number

console.log(balance.toString()); //it will convert balance into string and then we can also use string properties and methods into this

console.log(balance.toString().length);//will give ans 4 as because 1000 is of length of 4

console.log(balance.toFixed(2)) // tofixed(): Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.Returns a string representing a number in fixed-point notation.


console.log(balance.toPrecision(3)) //toPrecision(precision?: number): stringNumber of significant digits. Must be in the range 1 - 21, inclusive.Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.

console.log(balance.toLocaleString()); //by default give some other country standard for indian: en-IN

// +++++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math); //It's an object
console.log(Math.abs(-9));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.random()); //between 0 and 1
console.log((Math.random()*10) + 1); //if you don't want the random value to be 0


// also min and max functions available in Math Object

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)+min));
