const button = document.getElementById("dark-mode-btn");
const darkModeElements = document.querySelectorAll(".overview-cards");
const darkCardElements = document.querySelectorAll(".card");
const mainContent = document.querySelector(".main-content");
const card2 = document.querySelectorAll(".cards2");
const cardheader = document.querySelectorAll(".card-header");
const h2 = document.querySelectorAll("h2");
const tr = document.querySelectorAll("tr");
const th = document.querySelectorAll("th");
const div = document.querySelectorAll("div");
const td = document.querySelectorAll("td");
const bgwhite = document.querySelectorAll(".bg-white");
const cardbody = document.querySelectorAll(".card-body");
const lineborder = document.querySelectorAll(".line-border");
const searchbutton3 = document.querySelectorAll(".search-button-3");
const dateupdated = document.querySelectorAll(".date-updated");
const trafficlightcolors = document.querySelectorAll(".traffic-light-colors");
const tables = document.querySelectorAll(".tables");
const h3 = document.querySelectorAll("h3");
const tableheader = document.querySelectorAll(".table-header");
const cardbgwhite = document.querySelectorAll(".card bg-white");
const cardheaderlinespacetableheader = document.querySelectorAll(
  ".card-header line space table-header"
);
const body = document.querySelectorAll("body");
const hovercard = document.querySelectorAll(".hover-card");
const dropdownload = document.querySelectorAll(".dropdown-load");
const searchcontrols = document.querySelectorAll(".search-controls");
const g1container = document.getElementById("g1-container");
const openg1time = document.getElementById("open-g1-time");
const openg2time = document.getElementById("open-g2-time");
const openg3time = document.getElementById("open-g3-time");
let countClick = 0;

function updateChartColorsByCountClick(countClick) {
  if (countClick % 2 === 0) {
    reverseChartColors();
  } else {
    setInterval(() => {
      updateChartColors();
    }, 100);
  }
}

button.addEventListener("click", () => {
  g1container.classList.toggle("dark-card");
  openg1time.classList.toggle("dark-card");
  openg2time.classList.toggle("dark-card");
  openg3time.classList.toggle("dark-card");

  countClick++;
  updateChartColorsByCountClick(countClick);

  searchcontrols.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  darkModeElements.forEach((element) => {
    element.classList.toggle("overview-secondary-dark-mode");
  });

  darkCardElements.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  card2.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  cardheader.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  h2.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  th.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  bgwhite.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  cardbody.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  lineborder.forEach((element) => {
    element.classList.toggle("white");
  });

  searchbutton3.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  dateupdated.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  trafficlightcolors.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  tables.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  h3.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  tableheader.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  cardbgwhite.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  cardheaderlinespacetableheader.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  // body.forEach((element) => {
  //   element.classList.toggle("dark-card");
  // });

  hovercard.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  dropdownload.forEach((element) => {
    element.classList.toggle("dark-card");
  });

  mainContent.classList.toggle("overview-secondary-dark-mode");
  document.body.classList.toggle("overview-secondary-dark-mode");
});
