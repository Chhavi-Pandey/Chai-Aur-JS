let myName = "Rach   ";

// console.log(myName.trueLength); // can use trim here but we want this method 



let myHeros = ["Krishna", "Ram"];

let heroPower = {
    Krishna : "Chakra",
    Ram : "Bow and arrow",

    getPower : function(){
        console.log(`Power is: Archery ${this.Ram}`);
        
    }
}

Object.prototype.chandler = function(){
    console.log("chandler is present in all objects");
    
}

Array.prototype.chandler = function(){
    console.log("Chandler said : Hello Joey");
    
}

// heroPower.chandler();
// myHeros.chandler();

// inhertance

const stu = {
    name : "Mon",
    email : "mon@friends.com"
}

const Teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'JS',
    fullTime : true,
    __proto__: teachingSupport
}

Teacher.__proto__ = stu

// modern syntax

Object.setPrototypeOf(teachingSupport, Teacher)

let anotherStu = "Joey        "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`${this.name}`);
    console.log(`true length is ${this.trim().length}`);
    
}

anotherStu.trueLength()
"Chandler".trueLength();
"Rachel".trueLength() // I don't know why undefined so check it