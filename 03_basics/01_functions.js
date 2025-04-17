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
