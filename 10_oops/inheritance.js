class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`); 
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourses(){
        console.log(`New courses added by ${this.username}`);
        
    }
}

let camilie = new Teacher("camilie", "camilie@newOrleans.com", "579");
camilie.addCourses();
camilie.logMe(); // cause of inheritance

let witch = new User("Davina Claire");
witch.logMe();
//witch.addCourses(); // error

console.log(camilie instanceof Teacher);
console.log(camilie instanceof User);
