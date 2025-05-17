// A call back is a function passed as an argument to another function
// A call back function can run after another function has finished

function show() {
    console.log("hii");
}

function showName(call){
call();
}

showName(show)