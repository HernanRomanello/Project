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

const cards = document.querySelector(".overview-cards");
document.querySelectorAll(".card-header").forEach((cardHeader) => {
  const icon = cardHeader.querySelector("svg");
  const card = cardHeader.querySelector(".hover-card");

  if (!icon || !card) return;

  icon.addEventListener("mouseover", function () {
    card.classList.add("hover-icon-show");

    document.querySelectorAll(".card-header").forEach((cardHeader) => {
      const cardOther = cardHeader.querySelector(".hover-card");
      if (!cardOther) return;
      if (cardOther !== card) cardOther.classList.remove("hover-icon-show");
    });
  });

  card.addEventListener("mouseout", function () {
    card.classList.remove("hover-icon-show");
  });
});

cards.addEventListener("mouseout", function () {
  document.querySelectorAll(".hover-card").forEach((card) => {
    if (!card) return;
    card.classList.remove("hover-icon-show");
  });
});

const navContainer = document.querySelector(".nav-contaner");
const navContainerChildren = navContainer.children;

window.addEventListener("scroll", function () {
  let y;
  const sections = document.querySelectorAll(".overview-cards");
  sections.forEach((section) => {
    const childTop = section.getBoundingClientRect().top;
    const childBottom = section.getBoundingClientRect().bottom;
    y = window.scrollY - 600 - section.getBoundingClientRect().height;
    const firstChildHeight = 600;
    const navItemId = section.dataset.nav;
    const navItem = this.document.querySelector(`#${navItemId}`);
    if (
      y + firstChildHeight >= childTop &&
      y + firstChildHeight < childBottom
    ) {
      if (!navItem) return;
      card - header;
      navItem.classList.add("marked-div");
      sections.forEach((section) => {
        const navItemId = section.dataset.nav;
        const navItem = this.document.querySelector(`#${navItemId}`);
        if (!navItem) return;
        if (navItem !== navItem) navItem.classList.remove("marked-div");
      });
    } else {
      if (!navItem) return;
      navItem.classList.remove("marked-div");
    }
  });
});

const sections = document.querySelectorAll(".overview-cards");

let navStack = [...navContainerChildren];
let sectionsStack = [...sections];

while (navStack.length > 0) {
  const navItem = navStack.pop();
  const section = sectionsStack.pop();
  section.dataset.nav = navItem.id;
}
