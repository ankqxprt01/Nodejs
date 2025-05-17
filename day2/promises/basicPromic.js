// run also in chrome
// step 4
let promise = new Promise(function(resolve,reject){
    // alert("hello promise") used when working with html 
    console.log("hello promise"); // [[PromiseResult]]:undefined Promise {<fulfilled>: pending}
    // resolve(10) // if u uncomment this u will get 10 in [[PromiseResult]]:10 Promise {<fulfilled>: 10}

})

// step1
console.log("start");

// step3
setTimeout(()=>{
    console.log("i am in settimeout");
},0);

// step2
console.log("end");
console.log(promise);

// copy the whole code and paste in chrome console
// output when resolve(10)
// Promise {<fulfilled>: 10}
// [[Prototype]]:Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 10

// u will get above output once console promise

// when to use promises?
// fetch data from api
// fetch pictures from servers

