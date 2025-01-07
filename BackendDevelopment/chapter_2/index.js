// console.log(`We are lerning about modules in node`);
const maths = require('./utils'); 
// This was comman syntax for importing module
// mow using ES6 syntax for importing module.

// import { add,subtract,multiply,divide } from './utils.mjs';
// console.log(add(75,25));
// console.log(subtract(75,25));
// console.log(multiply(75,25));
// console.log(divide(75,25));
console.log(maths.add(75,35));
console.log(maths.subtract(75,35));
console.log(maths.multiply(75,35));
console.log(maths.divide(75,35));
