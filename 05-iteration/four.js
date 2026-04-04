// for in //it is used to iterate over the properties of an object. It works with objects, arrays, strings, maps, sets etc.
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple" 
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) { 
    //console.log(programming[key]);
}

//const map = new Map()
//map.set('IN', "India")
//map.set('USA', "United States of America")
//map.set('Fr', "France")
//map.set('IN', "India")

//for (const key in map) {
    //console.log(key);
//} // it will not work with maps because maps are not objects, they are iterable objects.
//  So, we cannot use for in loop to iterate over maps. We can use for of loop to iterate over maps.