const p = fetch("./data.json").then((response) => {
  console.log(response);

  const jsonPromise = response.json();
  return jsonPromise;
})
.then((data) => {
  console.log(data);
  const strData = JSON.stringify(data);
  document.body.append(strData);
})
.catch((err) => {
  console.error(err);
  console.log("Ошибка поймана");
})
.finally(() => {
  document.getElementById("load").remove();
});