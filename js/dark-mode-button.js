const button = document.getElementById("dark-mode-btn");
const darkModeElements = document.querySelectorAll(".overview-cards");
const darkCardElements = document.querySelectorAll(".card");
const mainContent = document.querySelector(".main-content");

button.addEventListener("click", () => {
  console.log("Dark mode toggled");

  darkModeElements.forEach((element) => {
    element.classList.toggle("overview-secondary-dark-mode");
  });

  darkCardElements.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  mainContent.classList.toggle("overview-secondary-dark-mode");
  document.body.classList.toggle("overview-secondary-dark-mode");
});
