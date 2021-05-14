"use strict";

/**
 * Задание
 *
 * Напишите обработчик на событие click для кнопки, который при одинарном клике на кнопку будет выводить alert('Single'), 
 * а при двойном клике будет выводить alert('double').
 * При этом событие одинарного клика срабатывать не должно.
 */

 const btn = document.getElementById("testButton");
 btn.addEventListener("click", createClickHandler());

 function createClickHandler() {
  let timer = null;
  let clicks = 0;
  return (e) => {
    clicks++;
    if(clicks >= 2) {
      clearTimeout(timer);
      clicks = 0;
      alert('double');
      return;
    }

    timer = setTimeout(()=>{
      if(clicks === 1){
        alert('single');
      }
      clicks = 0;
    }, 250)

  }
 }