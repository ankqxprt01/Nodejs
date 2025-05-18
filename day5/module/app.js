// create server
// var http = require('http');

// http.createServer(function(req,res){
//     res.writeHead(200,{'content-type': 'html'})
//     res.end("hello world")
// }).listen(5000);

const calculator = require('./calc');

console.log(calculator.add(10, 5));    
console.log(calculator.sub(10, 5)); 
// console.log(calculator.multiply(10, 5)); 
// console.log(calculator.divide(10, 5));  
// console.log(calculator.divide(10, 0));  