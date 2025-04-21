// if

// if (true) {
//     console.log('Davina Claire');
// }

// if (2 =='2') {
//  console.log(true);   
// }

// if(2 === '2'){
//     console.log(false); // It won't get printed.
// }

// if - else

// const temp = 36;

// if(temp >= 15){
//     console.log("Tempreature is greater than 15");
// }
// else{
//     console.log("less than 15");
    
// }

const balance = 1000;

//if(balance > 500) console.log("test");  // bad practice but not error

// if (balance < 500) {
//     console.log('less than 500');
    
// } else if (balance < 750) {
//     console.log('less than 750');
// }else if(balance < 900){
//     console.log("less than 750");
// }
// else{
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2 == 3){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged In");
    
}