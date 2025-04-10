// let score = "33";
let score = "33abc"
// console.log(typeof(score));
// console.log(typeof score);

let valueInNumber = Number(score); // conversion in number using Number (first letter is capital)
// console.log(typeof valueInNumber)

// console.log(valueInNumber); // NaN : Not a number when we write score's value as "33abc" ; for null it will be 0; for undefined it will be NaN; for boolean value true or false it will be 1 or 0

// Conversion can be done for boolean (Boolean) string (String) etc.
let isLoggedIn = "";
let booleanLoggedIn = Boolean(isLoggedIn);
// console.log(booleanLoggedIn);
// 1 => true; 0 => false;
// "" => false; "chhavi" => true

// ***********************************************************Operations*********************************************************

let value = 3;
let negValue = -value;

// console.log(negValue);

let str1 = "Hello";
let str2 = " brother!";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// So if the first conversion is string then all of it gonna consider in string otherwise in number if first conversion is number

// console.log(+true);
// console.log(+ "");

// + used for conversion

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;  //Not bad but also not perferable this type of writing code

let gameCounter = 100;
++gameCounter;
// read about prefix and postfix increment on mdn js and also about type conversion on ecmascript documentation
console.log(gameCounter);


