// Promise = Object that manages async tasks
            // Wraps a Promise Object around (async code)
            // "I promise to return a value"
            // PENDING ->RESOLVE(if success) or REJECTED(if fails)
            // new Promise((resolve,reject)=>{asynchronous code}) 

//TASK
// Complete Hw
// have ur dinner
// go to sleep 

// using callback function

// step 1 create--> 3functions
// function CompleteHw(){
//     setTimeout(()=>{
//         console.log("hw complete");
        
//     },1500)
// }

// function Dinner(){
//     setTimeout(()=>{
//         console.log("dinner done");
        
//     },1000)
// }

// function Sleep(){
//     setTimeout(()=>{
//         console.log("sleeping"); 
//     },500)
// }

// console.log("all task completed")

// this is wrong way to call function in order, step 2 is correct
// CompleteHw()
// Dinner()
// Sleep()

// to run them in order we will use callback fun
// step 2
// function CompleteHw(callback){
//     setTimeout(()=>{
//         console.log("hw complete");
//         callback()  
//     },1500)
// }

// function Dinner(callback){
//     setTimeout(()=>{
//         console.log("dinner done");
//         callback()
//     },1000)
// }

// function Sleep(callback){
//     setTimeout(()=>{
//         console.log("sleeping"); 
//         callback()
//     },500)
// }

// // now we have to run these by calling them callback hell
// CompleteHw(()=>{
//     Dinner(()=>{
//         Sleep(()=>{
//             console.log("all task completed");
//         })
//     })
// })

// run in vs code using filename.js or in prom.html
/*
output will be
hw complete
dinner done
sleeping
all task completed
*/

// step 3 now using promises
function CompleteHw(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>
            {
            // step 4 add for reject
            const hwCom=true;
            if(hwCom){
             resolve("hw complete")   
            }

            else {
                reject("hw not completed")
            }
            // step 4 add for reject
            // resolve("hw complete") // step 3
        },2500)
    })
}

function Dinner(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // step 4 add for reject
            const DinCom = true;

            if(DinCom){
            resolve("dinner done")
            }

            else {
                reject("dinner not completed")
            }
            // step 4 add for reject

            // resolve("dinner done") // step 3
        },1000)
    })
}

function Sleep(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>
            {
            // step 4 add for reject
            const Isleep=true;
            if(Isleep){
            resolve("sleeping")
            }

            else{
                reject("i am not sleeping")
            }
            // step 4 add for reject
            // resolve("sleeping") //step 3
        },500)
    })
}

// after writing step 3 run the code once
CompleteHw().then(value=>{console.log(value);return Dinner()})
            .then(value=>{console.log(value);return Sleep()})
            .then(value =>{console.log(value);console.log("all task completed");})
            // after adding reject, add catch this is also in step 4
            .catch(error=>console.error(error)) 

