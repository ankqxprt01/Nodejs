// step 1 create a code for hello world
const exprees = require('express') // as i dont install express in my project lets try without installing

// to start express 
const app = express() // this is express handler says express started

// in terminal run node app.js
// it will throw error
// Error: Cannot find module 'express'
// as expressjs is not built in module in nodejs its an 3rd party
// therefore we will install it


// step2
// go to https://www.npmjs.com/ or npmjs
// search for express
// you will get npm i express type in ur terminal 
// u will see node_modules in that there is express but also u will see other dependencies
// so for us exprees is dependencies and for exprees u need the other dependencies so dont delete anything

// now again run app.js
// u will not get any error means successfully working

// step3
// now i want it to run on localhost with any port number
// i)type localhost:5000 in browser u will get nothing
// ii)i want data on perticular like if localhost:5000/sam also take some id localhost:5000/sam/20
// the above is concept is called URI(Uniform Resource Identifier) It’s like a name or address used to identify something on the internet.
// example of uri : localhost:5000/sam/20 it means mention website name,resource what u want,pass id which id u want
// in above i want sam with id 20 and this will change like dynamic url based on user 
// if i changed it to  21 ,localhost:5000/sam/21 here nodejs will use 21 fetch name of user from db
// u will say 20 or 21 but express or node js will search who is 20 or 21

// localhost:5000/sam/21 this is called passing the parameter
// what if u want to pass querystring localhost:5000/sam?id=21

// run app.js it will run in vs terminal running..
// but in browser http://localhost:5000/ u will get Cannot GET /

// so now we will use routing
// what is router or routing in our website there are multiple links for diff links u will pass diff request
// and for diff request there will be diff response
// so how to handle particular request is decided with help of routing concept

// step 4 there are varous http methods like get post put delete
// get has two parameters 1st parameter is url in below we r requesting home page that is "/"
// req passes from client to server 
// res server to client
app.get("/",function(req,res){   // get for receving data post for sending data
    // console.log("hello world");// it will only give output in vs terminal to run on browser we use send
    res.send("hello world") // go to browser u will see hello world

}) 

// step 5 now we want sam data for that create new function
// app.get('/sam',function(req,res){ // without / it will not work try sam without /sam
//     res.send("welcome back sam ") // run app.js
// })

// now get dynamic data like 20 sam 21 sohan etc u will use if else assignment

// but how can we accept dynamic url
// step 6
// app.get("/sam/20",function(req,res){
//     res.send("hey sam") // check in url http://localhost:5000/sam/20 but http://localhost:5000/sam/21 Cannot GET /sam/21
    
// })

// step 8 now will try for query insted of params comment step 5 then only comment 8 will work
app.get('/sam', function(req,res){  // http://localhost:5000/sam?id=20 check it in browser
    const id = req.query.id
    res.send("welcome back sam " + id) 
})

// step 7 comment 6 and run step 7 to get id
app.get("/sam/:id", function(req,res){
    const id =  req.params.id // to fetch we use req object it has params.Whatever u mention in line 71 same id u have to mention in params.id
    res.send('hey sam ' + id) // re run and check change id to http://localhost:5000/sam/21 ,22 u will get id but not cannot get text
})


// step 3
// to start the server 
app.listen(5000,function(req,res){
    console.log("running on localhost:5000");
})

