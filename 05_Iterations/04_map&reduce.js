// num
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addTen = myNumbers.map((num) => num + 10);
// console.log(addTen);

const newNums = myNumbers.map( (num) => num*10 ).map( (num) => num + 1).filter( (num) => num >= 40 )
// console.log(newNums);


// reduce

const myNums = [1, 2, 3]

// let total = myNums.reduce( function (acc, curval){
//     console.log(`acc: ${acc} and curval : ${curval}`);
    
//     return acc + curval;
// },0 )
// console.log(total);

let total = myNums.reduce( (acc, curval) => {
    // console.log(`acc: ${acc} and curval : ${curval}`);
    
    return acc + curval;
},0 )
// console.log(total);


let shoppingCart = [
    {
        itemName : "DSA course",
        price: 10000
    },
    {
        itemName : "Web dev course",
        price: 8000
    },
    {
        itemName : "App dev course",
        price: 9000
    },
    {
        itemName : "ML course",
        price: 12000
    },
]

let totalPrice = shoppingCart.reduce( (acc, item) => {
       return acc + item.price
},0)

console.log(totalPrice);
