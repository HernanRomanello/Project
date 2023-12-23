const nav = document.querySelector(".nav-list");
const xbutton = document.querySelector(".close-part");
let overlay = document.getElementById("overlay");
// let covidLink = document.querySelector("nav-list-li covid");
const navList = document.getElementById("covid-link");

const humburger = document.querySelector(".hamburger-button");

humburger.addEventListener("click", () => {
  // console.log("clicked");
  let overlay = document.getElementById("overlay");
  overlay.style.display = "block";
  nav.classList.add("revealed-nav-list");
});

xbutton.addEventListener("click", closeNavList);
overlay.addEventListener("click", closeNavList);
navList.addEventListener("click", closeNavList);
// covidLink.addEventListener("click", closeNavList);
navList.addEventListener("click", closeNavList);
function closeNavList(e) {
  e.stopPropagation();
  nav.classList.remove("revealed-nav-list");
  // nav.classList.add("red");
  nav.classList.add("display-none");
  overlay.style.display = "none";
}
