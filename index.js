// Closing the offer section

var offer = document.getElementById("offer");
var offerClose = document.getElementById("offer-close");

offerClose.addEventListener("click", function () {
  offer.style.display = "none";
});

//sidenav
var menuOpen = document.getElementById("menu-open");
var sidenav = document.getElementById("sidenav");
var menuClose = document.getElementById("menu-close");

menuOpen.addEventListener("click", function () {
  sidenav.style.left = "0";
});

menuClose.addEventListener("click", function () {
  sidenav.style.left = "-50%";
});

//slider section

// Collection secton

// Search function
var searchBox = document.getElementById("search-box");
var collectionContainer = document.querySelectorAll(".collection-container");

searchBox.addEventListener("keyup", function () {
  collectionContainer.forEach((container) => {
    var dressName = container.querySelector("h1").innerHTML.toUpperCase();
    var enteredText = searchBox.value.toUpperCase();
    if (dressName.includes(enteredText)) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
});

//Check function
