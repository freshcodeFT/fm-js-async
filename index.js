"use strict";

const p1 = new Promise((resolve, reject) => {
  resolve(42);
});

const p2 = Promise.resolve("Short resolve");
const p3 = Promise.reject("Short reject");
const p4 = Promise.resolve({username: "test"});
const p5 = Promise.reject({errorType: "auth"});

function handlePromise(promise) {
  return promise
    .then((data) => {
      console.log("Data is: ", data);
    })
    .catch((err) => {
      console.dir(err);
    });
}


handlePromise(p1);
handlePromise(p2);
handlePromise(p3);
handlePromise(p4);
handlePromise(p5);