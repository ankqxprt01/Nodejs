const express = require('express') 
 
const app = express()

app.get('/', function(req,res){ 
    res.send("welcome") 
})

// query url http://localhost:5000/ankit?id=20
app.get('/ankit', function(req,res){ 
    const id = req.query.id
    res.send("welcome back ankit " + id) 
})

// parm url http://localhost:5000/ankit/21 use this to run if else
app.get("/ankit/:id", function(req,res){
    const id = req.params.id 
    let name = ""

    if (id == 20) {
        name = "navin"
    } else if (id == 21) {
        name = "sam"
    } else if (id == 22) {
        name = "rahul"
    } else if (id == 23) {
        name = "priya"
    } else if (id == 24) {
        name = "aman"
    } else if (id == 25) {
        name = "tina"
    } else {
        name = "unknown"
    }

    res.send(id + ' and name is ' + name) 
})

app.listen(5000,function(req,res){
    console.log("running on localhost:5000");  
})
