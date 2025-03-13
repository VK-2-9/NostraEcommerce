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


//slider section

var sliderImages=document.getElementById("slider-images");
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var sliderLeft=document.getElementById("slider-left");
var sliderRight=document.getElementById("slider-right");


sliderRight.addEventListener("click",function(){
    var clickedImage= sliderRight.closest("img");
    console.log(clickedImage);
})