function setUserName(userName){
    //complex db calls
    this.username = userName;
    console.log("called");
    
}

function createUser(username, email, password){
    setUserName.call(username)
    // console.log("called");
    
    
    this.email = email;
    this.password = password;

}

let user = new createUser("Elijah", "elijah@mikaelsons.com", "Nik@ope");
console.log(user);
