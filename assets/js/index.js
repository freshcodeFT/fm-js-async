"use strict";

const listContainer = document.querySelector(".listContainer");
listContainer.addEventListener("click", mainListHandler);


const list = document.querySelectorAll(".listContainer > li");

function mainListHandler({ target }) {
  const li = target.closest("li");
  if(li){
    li.innerHTML += "!";
  }
}

const addButton = document.querySelector(".addButton");
addButton.addEventListener("click", addBtnClickHandler);

function addBtnClickHandler() {
  const li = document.createElement("li");
  li.innerText = "Added Item";
  listContainer.append(li);
}
