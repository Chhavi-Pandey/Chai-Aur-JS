// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
        
    default:
        console.log("default case get matched");
        break;
}

// **** If we don't use break keyword and in that case when case 3 get matched it won't check case 4 and automatically will print it without even checking that whether it is true or not. But not the default case because we get a case matched. Default case executed only when no case get matched.

// If condition is string then please be careful about case sensitivity.