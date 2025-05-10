const user = { //object literal
    username : "Haylay",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from Db");
        // console.log(`username: ${this.username}`);

        // this keyword will tell the function about which username we are talking about 
        console.log(this);
        
    }
}
// console.log(user.username);
//console.log(user.getUserDetails());

//console.log(this); // Global Context in node : {} (empty object)

// let promiseOne = new Promise()
// const date = new Date(); // this new keyword is constructor function that allow us to make multiple functions using one object literal

function User(username, loginCount, isloggedIn){
    this.username = username;  // LHS: variable
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn

    return this; // Implicitly defined as such not necessary
}

// const userOne = User("haylay", 12, true);
// let userTwo = User("Hermione", 10, false)
// console.log(userOne); //override userone with userTwo that's why we use new keyword because it gives a new copy

const userOne = new User("haylay", 12, true);
let userTwo = new User("Hermione", 10, false)
// console.log(userOne);
// console.log(userTwo);

// when we write new keyword 
// s-1 new object created which is called instance
// s-2 consturctor function called because of new keyword. It packs all the arguements etc and return
// s-3 everything get inject in this keyword
// s-4 And all we get in function

console.log(userOne.constructor);  //The initial value of Object.prototype.constructor is the standard built-in Object constructor

// instanceof ??
