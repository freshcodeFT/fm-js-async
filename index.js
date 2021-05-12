/*
fetch("./data.json")
  .then((response) => response.json())
  .then(createUserCards)
  .catch((error) => {
    console.log(error);
  });

function createUserCards(data) {
  console.table(data);
  console.log(1);
}*/

/*function executor(resolve, reject) {
  resolve();
}
const myFirstPromise = new Promise(executor);

function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

delay(5000).then(() => {
  console.log("success");
});*/

/*let isFetching = true;
function promiseCb(resolve, reject) {
  //reject('test');
  setTimeout(()=>resolve("success"), 3000);
}
const mySecondPromise = new Promise(promiseCb);
console.log(mySecondPromise);

mySecondPromise
  .then((value) => {
    console.log(`Resolve: ${value}`);
  })
  .catch((error) => {
    console.log(`Catch: ${error}`);
  })
  .finally(() => (isFetching = false));

*/
// [0,1)
const shchrodingerPromise = new Promise((resolve, reject) => {
  const catDestiny = Math.random();
  if (catDestiny >= 0.5) {
    resolve("Cat is alive");
  } else {
    reject("Cat is dead");
  }
});

shchrodingerPromise.then(checkCat).catch(checkCat);
console.log(1);

function checkCat(str) {
  console.log(`STATUS: ${str}`);
}
