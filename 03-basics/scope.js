let a = 10;
if(true){
    let a = 20
    const b = 30
    //console.log(a);//20
}
//console.log(a);//10

function one(){
    const username = "Saransh"
    function two(){
        const website = "saransh.com"
        //console.log(username);
    }
    //console.log(website);//ReferenceError: website is not defined
    two()
}
one()

if(true){
    const username="saransh"
    if(username === "saransh"){
        const website = " saransh.com"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


function addOne(num){
    return num + 1
}
console.log(addOne(5));



const addTwo = function(num){
    return num +2
}
console.log(addTwo(5));