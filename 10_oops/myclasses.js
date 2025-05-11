// ES6

class user {
    constructor(username, email, password){
        this.username = username;
        this.password = password;
        this.email = email;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// const klaus = new user("Klaus", "klaus@mikeaelsons.com", "123");
// console.log(klaus.encryptPassword());
// console.log(klaus.changeUsername());


// before class we were doing like this: 

function User(username,email,password){
    this.username = username;
    this.email = email;
     this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

let Haylay = new User("Haylay", "Haylay@marshellMikaelsons.com", "248");

console.log(Haylay.encryptPassword());
console.log(Haylay.changeUsername());

