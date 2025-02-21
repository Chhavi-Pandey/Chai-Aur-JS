// it is recommended that whenever we compare we should do it with same data type otherwise sometimes we get weird results

console.log(null > 0);
console.log(null < 0);
console.log(null >= 0); // this gives true because comparison convert null in to number which makes it 0 so now 0 >= 0 is true that's why it is recommended that we should always compare with same datatype

console.log(null == 0); // false: because == acts differently then <, >, <=

// equality and comaparison works differently (equality == or ===)
// But with undefined it will always give false

// === strict check : also check their datatypes

console.log("2" === 2); //false
console.log("2" == 2); //true
