function sayName(){
    console.log('C');
    console.log('A');
    console.log('R');
    console.log('O');
    console.log('L');
    console.log('I');
    console.log('N');
    console.log('E');  
}

// sayName();  // sayName : reference of function sayName(): execution of function

// function addTwoNums(num1, num2) { // num1, num2 are parameters
//     // num1 + num2
//     console.log(num1 + num2);
    
// }


// addTwoNums(3,4) //          3, 4 are arguments
// addTwoNums(3, 'a');      // 3a 
// addTwoNums(3, '4');     // 34
// addTwoNums(3, null);   // 3

// So it is advisable to check type of parameters 

// const result = addTwoNums(4, 9); // 13
// console.log("Result: ", result); // undefined: because function doesn't return anything. And we know what return concept is?


function addTwoNums(num1, num2) { // num1, num2 are parameters
    // num1 + num2
    let sum = num1 + num2;
    return sum;
    console.log("Sum is done"); // Won't print: After encountering return keyword function terminate.
}

// const answer = addTwoNums(3,5);
// console.log(answer);

function loginUserMessage(userName){ // userName = "Care" we can also pass param like this and then there will be no such conditions like "undefined"

    if (userName == undefined) {
        console.log("Please enter a Username");
        return;
    }
    return `${userName} just logged in`;
}

// loginUserMessage("Caroline"); //It won't print anything as no console log 

// console.log(loginUserMessage("Caroline"));
// console.log(loginUserMessage("")); //just logged in
// console.log(loginUserMessage()); //undefined just logged in


function calculateCartPrice(...num1) { // ... here this means rest operator yeah it is also called spread operator but their name changes according to use context.
    //Here Rest operator means that different elements should be bundled and then executed actually it store or bundle elements in array 
    return num1;
}
// console.log(calculateCartPrice(200, 400, 500)); //[200,400,500]

function calculateCartPrice(val1, val2,...num1) { 
    return num1;
}
console.log(calculateCartPrice(200,400,500,1000)); // 500,1000 because 200 and 400 is for val1 and val2

const user = {
    username : "Care",
    price  : 8000
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`); //typesafety to be check becuase if price typo to prices then the result will be undefined
    
}

// handleObject(user);

// handleObject({
//     username : "Nik",
//     price : 9000
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
