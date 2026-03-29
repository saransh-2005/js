const user = {
    username : "Saransh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username},welcome to the website`);
        console.log(this); //tbis will print the user object because this is referring to the user object
    }
}
//user.welcomeMessage();
//user.username = "Saru"
//user.welcomeMessage()
//console.log(this); //this will print the global object because this is referring to the global object in this case

//function chai(){
    //let username = "saransh"
    //console.log(this.username);//this will print undefined because this is referring to the global object and there is no username property in the global object
//}
//chai();

/*const chai = function(){
    let username = "saransh"
    console.log(this.username);
}*/

/*const chai = () => {
    let username = "saransh"
    console.log(this);
}
chai();*/

/*const addTwo = (num1,num2) => {
    return num1 + num2
}*/
//const addTwo = (num1,num2) => num1 + num2; //this is a shorter way to write the same function
//const addTwo = (num1,num2) => (num1 +num2) //it does not require a return statement if there is only one expression in the function body
const addTwo = (num1,num2) => ({username:"saransh"})
console.log(addTwo(2,3));

//const myArray = [2,3,4,9]
//myArray.forEach()