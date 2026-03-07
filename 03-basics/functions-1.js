function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}
//sayMyName(); // function call  

//function addTwoNumbers(num1,num2){
    //console.log(num1+num2);
//}
addTwoNumbers(5,6); // function call with arguments

function addTwoNumbers(num1,num2){
    let result = num1+num2;
    return result
}
const result = addTwoNumbers(7,8);
//console.log("Result:",result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMessage(""));