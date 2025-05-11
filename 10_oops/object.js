function multiplyby5(num){
    return num*5;
}

multiplyby5.power = 2;

console.log(multiplyby5.power); // 2
console.log(multiplyby5(5)); // 25
console.log(multiplyby5.prototype); // {} : so actually in prototype some contexts are set by default so it is 'this' of that method

// Actually in js everything is object eventually
// Like here multiplyby5 is function but you can see we here treat it like object and it did work well

function createUser(username, score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
}

createUser.prototype.printMe = function(){
    console.log(`price  is ${this.score}`);
    
}

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe(); // cannot read properties : so to rectify this error use new keyword which will inform the variable about their properties I mean function's properties which we've injected. ref: line 28 and 29

/* 
Here's what happened behind the scenes when the new keyword is used:

A new object is created : The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's protoype.

The constructor is called: The constructor function is called with the
specified argument and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.) the newly created object is returned.
*/