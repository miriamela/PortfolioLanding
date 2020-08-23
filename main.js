'use strict';
const boxDev=document.querySelector(".contentDev");
const aside2=document.querySelector(".aside2");
const backButton2=document.querySelector(".back2");
const page=document.querySelector(".main");

function handleClick(event){
    event.currentTarget;
    aside2.classList.toggle("hidden");
    aside2.classList.add("animationEnter");
    page.classList.add("opacity");
    // aside2.classList.remove("animationExit");
}
function closeWindow(){
    page.classList.remove("opacity");
    aside2.classList.toggle("hidden");
    // aside2.classList.add("animationExit");
    aside2.classList.remove("animationEnter");

}

boxDev.addEventListener("click", handleClick);
backButton2.addEventListener("click", closeWindow);

const boxPhoto=document.querySelector(".contentPhoto");
const aside1=document.querySelector(".aside1");
const backButton1=document.querySelector(".back1");

function showPhotoBox(event){
    event.currentTarget;
    aside1.classList.toggle("hidden");
    aside1.classList.add("animationEnter");
    page.classList.add("opacity");
    aside1.classList.add("animationEnter");  
}
function closeWindow2(){
    aside1.classList.toggle("hidden");
    page.classList.remove("opacity");
    aside1.classList.remove("animationEnter");
}


boxPhoto.addEventListener("click", showPhotoBox);
backButton1.addEventListener("click", closeWindow2);