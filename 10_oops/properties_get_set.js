// old way for getter setter

function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get : function(){
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email = value;
        }
    })
} //syntactical difference that's it.

let chai = new User("gmail", "chai")
console.log(chai.email);

// object :- getter setter - very rare

const user = {
    _email : 'h@hc.com',
    _password : "abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email = value;
    }
}

// object.create() : factory function
const tea = Object.create(user)
console.log(tea.email);
// Here _ (underscore) doesn't make much difference