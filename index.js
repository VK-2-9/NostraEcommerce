// Closing the offer section

var offer=document.getElementById("offer");
var offerClose=document.getElementById("offer-close");

offerClose.addEventListener("click",function(){
    offer.style.display="none"
})

//sidenav
var menuOpen=document.getElementById("menu-open");
var sidnav=document.getElementById("sidenav");
var menuClose=document.getElementById("menu-close");

menuOpen.addEventListener("click",function(){
    sidenav.style.left="0";
})

menuClose.addEventListener("click",function(){
    sidenav.style.left="-50%";
})