"use strict";
const showMessage = document.querySelector("#js-showMessage");
const message = document.querySelector("#js-message");
function clickHandler() {
  message.style.opacity = 0.9;
  setTimeout(() => {
    message.style.opacity = 0;
  }, 1200);
}
showMessage.addEventListener("click", clickHandler);
