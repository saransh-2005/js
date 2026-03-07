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
//console.log(loginUserMessage(""));

function calculateCartPrice(val1,val2,...num1){
    return num1;
}
//console.log(calculateCartPrice(100,200,500,700));

const user = {
    username : "Saransh",
    price : 599
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
//handleObject(user);
handleObject({
    username:"Saransh",
    price:599
})

const myNewArray = [200,400,700,900];
function returnSecondValue(getArray){
    return getArray[1];
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,300,500,800]));