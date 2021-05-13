'use strict';

console.log("start"); // 1

setTimeout(()=>{
  console.log("timer"); // 7
}, 0);

const p1 = new Promise((resolve, reject) => {
  console.log("promise creation"); // 2

  resolve();
  reject();

  console.log("end of promise creation") // 3;
});

p1.then(()=>{
  console.log("promise resolve body"); // 5
}).catch(()=>{ 
  console.log("catch body"); // 5
}).finally(()=>{
  console.log("finally body") // 6
})

console.log("end"); // 4
