let proLink = document.querySelector("#Pro-link");
let navBar = document.querySelector(".nav-bar");
let myLinks = document.querySelector(".links");
let myPro = document.querySelector("#Pro");

navBar.addEventListener('click', display);
function display() {
    myLinks.classList.toggle('empty');
    
   
    
    
}
myPro.addEventListener('mouseover', show );
function show() {
proLink.style.display = "block";

   
}
proLink.addEventListener('mouseout', hide);
function hide() {
    proLink.style.display = "none";
    
     }

