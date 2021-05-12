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

function executor(resolve, reject) {
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
});
