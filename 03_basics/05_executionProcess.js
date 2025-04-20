// When the execution starts in js {}: Firstly it creates Global execution context. And we store it in our 'this' variable. And the value of this kewyword or variable is window object in browser environment case.

// There are mainly two execution context : 1. Global execution context 2. Functional execution context 3. Eval execution context (optioanl)

// How js code executes: Actually it runs in two phases. 1. is Memory creation phase (Memory allocation for variables etc.)2. Execution Phase (Operations or expressions evaluations)

let val1 = 10;
let val2 = 5;
function addNum(num1, num2){
    let total = num1 + num2;
    return total;
}

let result = addNum(val1, val2);
let result2 = addNum(8, 9);

// Execution : 1. Global Execution (<= this)
// 2. Memory Creation Phase : val1 : undefined
// val2 : undefined 
// addNum : definition
// result : undefined
// result2 : undefined

//3. Execution Phase : val1 = 10, val2 = 5

// addNum -> is function it will create a new executional context :
// In this it creates new variable environment + execution thread
// So every time we write function and it got executed every time the above two phase execution will happen. Every time we will create sandbox and will perform MCP and EP.

// So let's do it: val1, val2 => undefined (encounterd at result variable where it is calling fun).
// total : undefined

// 2. Execution Phase
// num1 = 10
// num2 = 5
// total = 15 // this value returned to Global execution context. And after end of these process this whole sandbox get deleted

// Now in previous execution Phase (line no. 24) : result = 15 and for result2 it will again create a sandbox and all those process will repeat again.


// JS is single threaded programming language

// Call stack get created while execution process begins : And we know how stack works : LIFO.

// And for getting Practical experience: You can check on browser: inspect then sources then make a snippet and see.  