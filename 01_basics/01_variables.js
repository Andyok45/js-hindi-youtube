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
bcoz of issue in block scope 
(block scopes means the curly brackets we have in a for loop and while loop within which a copy was changed and when recalled out of function it stayed the same as it was before block but in JS if we initialise something by var then if changed in block even then it changed the initial value)
and functional scope   
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])