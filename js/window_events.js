document.querySelectorAll(".table").forEach((table) => {
  const dotButton = table.querySelector(".dot-button");
  const dropdownDownLoad = table.querySelector(".dropdown-load");

  dotButton.addEventListener("click", function () {
    dropdownDownLoad.classList.toggle("hide");
    dotButton.classList.toggle("black-border");
  });

  dropdownDownLoad.addEventListener("click", function (e) {
    dropdownDownLoad.classList.toggle("hide");
    dotButton.classList.toggle("black-border");

    e.stopPropagation();
  });
});

const navContainer = document.querySelector(".nav-contaner");
const navContainerChildren = navContainer.children;
const sections = document.querySelectorAll("section.overview-cards");

sections.forEach((section) => {
  section.addEventListener("mouseover", function () {
    const navItemId = section.dataset.nav;
    const navItem = document.querySelector(`#${navItemId}`);

    for (let sec of sections) {
      if (sec === section) continue;
      const navItemIdOther = sec.dataset.nav;
      const navItemOther = document.querySelector(`#${navItemIdOther}`);
      if (!navItemOther) continue;
      if (
        navItemOther.classList.contains("marked-div") &&
        navItemIdOther !== navItem
      ) {
        navItemOther.classList.remove("marked-div");
      }
    }
    if (!navItem) return;
    navItem.classList.add("marked-div");
  });
});

let sectionsStack = [...sections];
const id0 = "glance";
const id1 = "general-illness";
const id2 = "abroad-illness";
const id3 = "traffic-light";
const id4 = "main-index";
const id5 = "children-admission";
const id6 = "vaccination-effect";
const id7 = "deceaseds";
const id8 = "tests";
const id9 = "additional-investigation";
const id10 = "rehearse-disease";
const id11 = "population-vaccination";
const navStack = [id0, id1, id2, id3, id4, id5, id6, id7, id8, id9, id10, id11];

while (navStack.length > 0) {
  const section = sectionsStack.shift();
  if (section.id === "part1-5") continue;
  const navItem = document.querySelector(`#${navStack.shift()}`);

  section.dataset.nav = navItem.id;
}

let loadingPercent = 0;
const progressBar = document.querySelector(".loader .progress-bar");
const loadingInterval = setInterval(() => {
  loadingPercent += 1;
  progressBar.style.width = loadingPercent + "%";
  if (loadingPercent >= 100) {
    clearInterval(loadingInterval);
  }
}, 100); // 10000
