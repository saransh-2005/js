const coding = ["js", "ruby", "java", "python", "cpp"]

//coding.forEach( function (val){ //forEach is a higher order function which
//takes a callback function as an argument and executes that callback function for each element in the array.
    //console.log(val);
//} )

/*coding.forEach( (item) => {
    console.log(item);
} )*/

/*function printMe(item){ 
    console.log(item);
}

coding.forEach(printMe)*/

/*coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )*/

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )