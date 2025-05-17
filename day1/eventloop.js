// The event loop manages async tasks 
// by queuing them after sync tasks are done
setTimeout(()=>{
console.log("inside timeout");
},0);

console.log("start");
console.log("end");


