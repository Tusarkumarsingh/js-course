const accountId = 144553 
let accountEmail = "ts310491@gmail.com"
var accountPassword = "123456"

let accountcity = "New York"
let accountState;
//accountId = 2 // not allowed because accountId is a constant


accountEmail = "adwd23@gmail.com"
accountPassword = "123456789"
accountcity = "Los Angeles"

console.log(accountId);


/*
prefer mot to use var becaue of issue in block scope and functional scope 
 */

console.table([accountEmail, accountPassword, accountcity , accountState])
