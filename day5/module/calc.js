// module
// In Node.js, a module is a piece of code that 
// can be reused in different parts of an application.
// Each module in Node.js has its own scope, 
// which means variables declared inside a module are not accessible 
// outside unless they are explicitly exported.

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = {
  add,
  sub
//   multiply,
//   divide
};


// function multiply(a, b) {
//   return a * b;
// }

// function divide(a, b) {
//   if (b === 0) {
//     return 'Error: Division by zero!';
//   }
//   return a / b;
// }

// module.exports


// this wont work bcoz u can export it only once
// module.exports = {
// //   add,
//   sub,
// //   multiply,
// //   divide
// };
