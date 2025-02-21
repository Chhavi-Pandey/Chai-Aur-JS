// let score = "33";
let score = "33abc"
console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score); // conversion in number using Number (first letter is capital)
console.log(typeof valueInNumber)

console.log(valueInNumber); // NaN : Not a number when we write score's value as "33abc" for null it will be 0 for undefined it will be NaN for boolean value true or false it will be 1 or 0

// Conversion can be done for boolean (Boolean) string (String) etc.
