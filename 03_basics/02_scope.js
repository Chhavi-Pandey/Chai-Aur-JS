// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);
var c = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

    // console.log(a);
    // console.log(b);
    // console.log(c);

    // var: global scope
    // let and const : block or local scope

    function one() {
        const userName = "Elijah";

        function two() {
            const website = "theOriginals";
            console.log(userName);
        }
        // console.log(website); Reference error: website is not defined. This is also called clojure

        two(); 
    }

    // one();

if(true){
    const name = "Kol";
    if(name === "Kol"){
        const website = " theOriginals"
        // console.log(name + website);
    }
    // console.log(website); again reference error
}

// console.log(name); // reference error

// ++++++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++++++++


console.log(addone(5));

function addone(value) {
    return value+1;
}

// addone(5);


console.log(addTwo(5)); // will give error; :Cannot access 'addTwo' before initialization
const addTwo = function(num){ // it is also called expression; In js variables are very powerful they can hold anything: json value, function anything. 

    return num+2;
} // This is also called hoisting as we hold the function in to a variable. So Hoisting include how functions are declared? How they stored? and what is their execution context? how js treat variables how it forms a tree where all vairables and functions get stored

// addTwo(5);