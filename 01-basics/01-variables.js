const accountId  = 2300165 //we can't change it
let accountEmail = "saransh@google.com"
var accountPass = "saru*123" //we should not use var because of issue in block scope and functional scope
accountCity = "kanpur"
let accountState;
console.log(accountId)

accountEmail = "saransh17092005@gmail.com"
accountPass = "saru*17"
accountCity = "Ghaziabad"
console.table([accountId,accountEmail,accountPass,accountCity,accountState])
