const value = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(value);

// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const wine = {
    name : 'bourbon',
    price : 2000,
    isAvailable : true,

    orderWine: function(){
        console.log("Wine is not available");
    }
}

// console.log(wine);
console.log(Object.getOwnPropertyDescriptor(wine, "name")); // you will have to give value, I mean properties of object

Object.defineProperty(wine, 'name',{
    writable : false,
    enumerable : false
})
// console.log(Object.getOwnPropertyDescriptor(wine, "name"));

for (let [key, value] of Object.entries(wine)) { // because if direcly write wine (object name) without this 'Object.entries(object_name) it is giving an error : wine is not iterable'

    if (typeof value != 'function') {
        console.log(`${key}`,`${value}`);
    }

}