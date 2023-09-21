const accountId = 144532     // doesnt change stays same 
let accountEmail = "ansh@gmail.com"
var accountPassword = "12345"
accountCity = "Benaras"
let accountState;

accountEmail = "an@an.com"
accountPassword = "9089"
accountCity = "Delhi"

console.log(accountId) ;

/*
Prefer not use var 
bcoz of issue in block scope and functional scope   
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])