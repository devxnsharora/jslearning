const accountId = 144553;
let accountEmail = "hitesh@google.com"
var accountPassword = "3434343"
accountCity = "Jaipur"
let accountState; // javascript declares this as undefined

//const cant be changed
// accountId = 2; This is not allowed

console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

// we dont use var nowadays
//initial days block scope had problemss with var

/*
    prefer for not to use var because of issue in block scope a
    and function scope
*/
