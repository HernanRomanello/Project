const glance = document.getElementById("glance");
const mainindex = document.getElementById("main-index");
const childrenadmission = document.getElementById("children-admission");
const vaccinationeffect = document.getElementById("vaccination-effect");
const deceaseds = document.getElementById("deceaseds");
const tests = document.getElementById("tests");
const additionalinvestigation = document.getElementById(
  "additional-investigation"
);
const rehearsedisease = document.getElementById("rehearsedisease");
const populationvaccination = document.getElementById("population-vaccination");

const navArray = [
  glance,
  mainindex,
  childrenadmission,
  vaccinationeffect,
  deceaseds,
  tests,
  additionalinvestigation,
  rehearsedisease,
  populationvaccination,
];
function toggleMenu() {
  var modal = document.getElementById("menuModal");
  modal.style.display =
    modal.style.display === "none" || modal.style.display === ""
      ? "block"
      : "none";
}

function markeMenu() {
  navArray.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      navArray.forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
      this.style.background = "red"; // Set the background color of the hovered element to red
    });
  });
}

function markeMenu() {
  navArray.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      navArray.forEach((el) => {
        if (el !== this) {
          el.classList.remove("active");
          el.style.background = ""; // Reset the background color of non-hovered elements
        }
      });
      this.classList.add("active");
      this.style.background = "red"; // Set the background color of the hovered element to red
    });
  });
}
