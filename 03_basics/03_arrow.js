// Arrow function : ES6 Feature(2015)

const user = {
    username : "Finn",
    price : 999,

    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this);
    }// this keyword refers current context
}

// user.welcomeMessage();
// user.username = "Elijah";
// user.welcomeMessage();

// console.log(this); // {}: because we are using node environment and here is no any global context for now

// In browser : for browser engine global context is window object always only then we are able to access every window event like click, form submission etc.
// Earlier there is only one engine to execute js : which was inside browser but now we have seprate engines which are node, deno, bun standalone engines


// function chai() {
//     let userName = "Rebekah"
//     console.log(this.userName);
// }

// chai();

// const bourBon = function() {
//     let username = "Freya";
//     console.log(this.username);
// }

// // bourBon();

const bourBon = () => {
    let username = "Esther";
    // console.log(this.username);  // Won't print anything
    console.log(this); // Won't print anything why???
}

// const addTwo= (num1, num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(3,4));

// const addTwo= (num1, num2) => num1 + num2; //implicit return arrow fun
// const addTwo= (num1, num2) => (num1 + num2); // way2: implicit return arrow fun

const addTwo = (num1, num2) => ({username : "Hope"}) // implicit return : Object
console.log(addTwo(3,4));

// const myArray = [2,4,6,8];
// myArray.forEach(() =>{})