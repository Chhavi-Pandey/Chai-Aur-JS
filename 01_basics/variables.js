const accountId = 14453;
let accountEmail = "chhavi30@gmail.com";
var accountPassword = "Chhavi@2003";
accountCity = " Ayodhya ";  // Not preferable
// accountId = 2; not allowed as it is const
// If we don't give any value to a variable then it is undefined
console.log(accountId);

accountEmail = "chhavi29@gmail.com";
accountPassword = "Chh@2003";
accountCity = "Mumbai";

// var has scope issues: block scope and functional scope

console.table([accountEmail, accountId, accountPassword, accountCity]);
