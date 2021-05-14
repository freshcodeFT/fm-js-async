"use strict";

const textContainer = document.querySelector(".textContainer");

document.addEventListener("mouseover", ({ target }) => {
  const liElem = target.closest("li");
  if (liElem) {
    textContainer.innerText = liElem.innerText;
    return;
  }
  textContainer.innerText = target.tagName;
});

/**
 * Задание
 *
 * При наведении (mouseover) на элементы списка выводить в текстовом поле текст этих элементов
 * При наведении на любой другой элемент выводить название тега этого элемента (element.tagName).
 */
