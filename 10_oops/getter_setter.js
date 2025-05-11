class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){ // it is a syntax get and then property which you want to get and get is void while set must have exactly one parameter
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }
    get password(){ // getter
        // return this.password.toUpperCase() // MMaximum call stack size exceeded: in get becuase variable has changed in setter

        return this._password.toUpperCase()
    }
// if you're using getter without setter you can't run this even you've tried to set value in constructor and also pass through variable : refer to line : let bon
    set password(value){ //setter
        // this.password = value // Maximum call stack size exceeded: in set becuase we're also setting this in constructor

        this._password = value;
    }
}

let bon = new User ("bon@mysticfalls.com", "248abc")
console.log(bon.password);
console.log(bon.email);

