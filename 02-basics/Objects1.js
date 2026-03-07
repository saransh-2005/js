//object literals
const mySym = Symbol("Key1"); //symbol is a unique identifier, it is used to create unique keys for objects, it is not enumerable, it is not iterable,
//  it is not stringifiable, it is not accessible through dot notation, it is not accessible through bracket notation, it is not accessible through for...in loop,
//  it is not accessible through Object.keys() method, it is not accessible through Object.values() method, it is not accessible through Object.entries() method, 
// it is not accessible through JSON.stringify() method, it is not accessible through JSON.parse() method, it is not accessible through Object.getOwnPropertyNames() method, 
// it is not accessible through Object.getOwnPropertySymbols() method, it is not accessible through Object.getOwnPropertyDescriptors() method, it is not accessible through Object.getOwnPropertyDescriptor() method, 
// it is not accessible through Object.hasOwnProperty() method, it is not accessible through Object.prototype.hasOwnProperty() method, it is not accessible through Object.prototype.propertyIsEnumerable() method, 
// it is not accessible through Object.prototype.isPrototypeOf() method, it is not accessible through Object.prototype.toString() method, it is not accessible through Object.prototype.valueOf() method, it is not accessible through Object.prototype.constructor property
const JsUser = {
    name : "Saransh",
    "myFullName" : "Saransh Singh",
    [mySym] : "myKey1", 
    age : 20,
    email :"saran@example.com",
    location : "Ghaziabad",
    isLoggedIn : false,
    LastLoginDays : ["Monday","Wednesday"],
}
console.log(JsUser.name);
//console.log(JsUser.myFullName); //here it will not work because of the space in the key name, we have to use bracket notation to access it
console.log(JsUser["myFullName"]);
// console.log(JsUser.age);
// console.log(JsUser.location);
// console.log(JsUser.isLoggedIn);
// console.log(JsUser.LastLoginDays);
console.log(JsUser["isLoggedIn"]);
//console.log(JsUser.email);
console.log(JsUser[mySym]);
JsUser.email = "Saransh@gmail.com"
//Object.freeze(JsUser) //it will freeze the object, it will not allow to change the properties of the object, it will not allow to add new properties to the object,
//  it will not allow to delete properties from the object, it will not allow to change the prototype of the object, it will not allow to change the extensibility of the object,
//  it will not allow to change the configurability of the object, it will not allow to change the writability of the object, it will not allow to change the enumerability of the object,
//  it will not allow to change the value of the properties of the object, it will not allow to change the getter and setter of the properties of the object, it will not allow to change the property descriptors of the properties of the object, 
// it will not allow to change the property attributes of the properties of the object, it will not allow to change the property keys of the properties of the object, it will not allow to change the property values of the properties of the object,
//  it will not allow to change the property symbols of the properties of the object, it will not allow to change any aspect of the object
//JsUser.email = "Saransh@google.com"
//console.log(JsUser.email);

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting());

JsUser.greeting2 = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greeting2());

