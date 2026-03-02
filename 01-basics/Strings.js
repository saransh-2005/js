const name = "Saransh Singh"
const repoCount = 20
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String('Saranshsk')
/*console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('r'))
console.log(gameName.charAt(5))*/
const newString = gameName.substring(0,6)
console.log(newString);
const anotherString = gameName.slice(-5,2)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));