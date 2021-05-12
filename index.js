/*
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
*/

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
}

*/

function loadImage(src) {
  //const img = new Image();
  const img = document.createElement("img");
  img.src = src;

  return new Promise((resolve, reject) => {
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error("Image has not been delivered"));
    });
  });
}

loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png")
.then((img) => {
  document.body.append(img);
})
.catch((error)=>{
  alert(error)
})

/*
  User Card Render переписать на промисы
*/