const nav = document.querySelector(".nav-list");

const humburger = document.querySelector(".hamburger-button");

humburger.addEventListener("click", () => {
  console.log("clicked");
  // nav.classList.toggle("revealed-nav-list");
  nav.classList.toggle("revealed-nav-list");
});
