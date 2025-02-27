// Date

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof (myDate));


// myCreatedDate = new Date(2025, 0, 27); //months starts from 0 in js
// console.log(myCreatedDate.toDateString())
// myCreatedDate = new Date(2025, 2, 27, 15, 19) //Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("2025-02-27"); // mm-dd-yy or yy-mm-dd or any format like that
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); // it will help in comparing timeStamp and used in like quizzes or hotel booking system

// console.log(Math.floor(Date.now()/1000)) // for seconds

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1); // as we know months starts from 0 in js
// console.log(newDate.getDay());

// we can even customize using localestring function

newDate.toLocaleString('default',{
    weekday: "long", //like this that we want weekday in long type 
})

