
// for of //used to iterate over iterable objects like arrays, strings, maps, sets etc. It does not work with objects

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { //num is a variable that takes the value of each element in the array one by one 
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map() // A Map is a collection of key-value pairs where each key is unique. It allows us to store and retrieve data based on keys.
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //if we set the same key again, it will update the value of that key.
//  It will not create a new key-value pair. So, in this case, the value of 'IN' will be updated to "India" again, 
// which is the same as before. Therefore, there will be no change in the map.


//console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

/*for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}*/ // This will throw an error because myObject is not iterable. 
// We cannot use for of loop to iterate over objects. We can use for in loop to iterate over objects.