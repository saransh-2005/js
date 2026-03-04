const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat method with Infinity to flatten all levels of nested arrays
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // to check if the given value is an array or not
console.log(Array.from("Hitesh")) // Array.from() creates a new array instance from an array-like or iterable object.
console.log(Array.from({name: "hitesh"}))  // Array.from() can also be used to create an array from an object with a length property, but in this case, it will create an array of undefined values since the object does not have indexed properties.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // Array.of() creates a new array instance with a variable number of arguments, regardless of the number or type of the arguments. In this case, it will create an array containing the three score values.