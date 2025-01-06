`use strict`;

const firstModule = require('./firstModule');

// Node Module System
// module.exports -> export file
// require -> import file

// these all are coming from common.js module in node
// module.exports is use to export functuanillity of a module.
// require is use to import functionality of a module.
// console.log(firstModule.addition(5,5));

// try{
//     console.log(`Trying to divide by zero.`);
//     const result = firstModule.divide(50,0);
//     console.log(result); 
// }

// catch(error)
// {
//     console.log(`caught the error, ${error}`);
// }

// // module-wrapper function:- whatever module we are using is wrapped inside a function.
// (
//     function(exports,require,module,__filename,__dirname)
//     {
//         // module code goes here
//     }
// )