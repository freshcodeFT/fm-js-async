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

class UserError extends Error {
  constructor(str){
    super(str);
    this.userType = "user";
    this.name = "User Error";
  }
}

//console.dir(new UserError('Wrong password!!!'));

function login(pass){
  if(pass !== "123"){
    throw new UserError("Wrong password!!!");
  }
}

function auth() {
  login('321');
}