/*const user = {
  firstName: "John",
  lastName: "Smith",
  isMale: true,
  isAgreed: undefined,
  age: 25,
  phones: ["0465489475734", "54639458349583", "435357284325"],
  [Symbol("test")]: "value",
  get isAdult(){
    return this.age >= 18;
  },
  getFullname(){
    return `${this.firstName} ${this.lastName}`;
  }
};

const serializedObj = JSON.stringify(user);
console.log(serializedObj);

const restoredObj = JSON.parse(serializedObj);*/

/*let i = 0;
function foo(){
  i++;
  setTimeout(foo, 0);
}*/

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
