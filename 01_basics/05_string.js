const name = "Haylay";
const codeRepo = 5;

// console.log(name + codeRepo); // it's old fashioned and not preferable

console.log(`Hello my name is ${name} and I have ${codeRepo} code repos on github`) // comparatively better and also called STRING INTERPOLOATION :- In sting interpolation we create placeholders where we can inject variable

const gameName = "HopeKlausMikaelson";

// console.log(gameName[0]);

// console.log(gameName.__proto__); // access to prototype of this string
console.log(gameName.length);

const gameNameNew = new String("hope-kl")

console.log(gameName.toUpperCase());
console.log(gameNameNew.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('M'));

const newString = gameName.substring(0,5); //In substring method we must not use -ve index value as it doesn't consider
console.log(newString);

const anotherString = gameName.slice(-18,5)
console.log(anotherString);


const newStringOne = "     Klaus    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // trim.start and trim.end also exist. it also works on whitespaces and terminate line


const url = "https://theOriginal.com/klaus%20Mikaelson";

console.log(url.replace('%20', '-'))

// url.includes() : includes() will help with finding the given string is exist or not. It is also a string method

// Go through with all of the methods of string in js. on console you will get the list

console.log(gameName.split('-')); // What does it do?
