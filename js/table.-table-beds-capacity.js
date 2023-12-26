let data = [
  ["זיו", "90%", "83%"],
  ["לניאדו", "95%", "96%"],
  ["מאיר", "98%", "105%"],
  ["רמבם", "102%", "105%"],
  ["תל השומר", "105%", "109%"],
  ["איכילוב", "110%", "111%"],
  ["שערי צדק", "112%", "111%"],
  ["קפלן", "115%", "112%"],
  ["השרון", "118%", "113%"],
  ["נהריה", "120%", "113%"],
  ["אסף הרופא", "125%", "114%"],
  ["סורוקה", "128%", "114%"],
  ["בני ציון", "130%", "118%"],
  ["בילינסון", "135%", "120%"],
  ["ואולפסון", "140%", "127%"],
  ["הלל יפה", "145%", "132%"],
  ["פוריה", "150%", "133%"],
  ["העמק", "155%", "136%"],
  ["ברזילי", "160%", "145%"],
  ["אברבנאל", "165%", "111.19%"],
  ["גהה", "170%", "96.99%"],
  ["שיבא", "175%", "104.04%"],
  ["נתיב העשרה", "180%", "120%"],
  ["אשדוד", "185%", "125%"],
  ["צפת", "190%", "130%"],
  ["כפר סבא", "195%", "135%"],
  ["חיפה", "200%", "140%"],
  ["אשקלון", "205%", "145%"],
  ["באר שבע", "210%", "150%"],
].map((row) => {
  const [hospital, capacity, internalCapacity] = row;
  let covidPercentage = parseFloat(capacity.replace("%", ""));
  let nonCovidPercentage = parseFloat(internalCapacity.replace("%", ""));
  covidPercentage -= Math.random() * 50;
  nonCovidPercentage -= Math.random() * 50;
  return [
    hospital,
    Math.floor(covidPercentage) + "%",
    Math.floor(nonCovidPercentage) + "%",
  ];
});

const hospital_select = document.getElementById("hospital_select");
const hospital_select_hospitals = document.querySelector(
  "#hospital_select .hospitals"
);
const search_input = document.getElementById("search-hospital");
const search_input_span = document.querySelector("#search-hospital span");
const searchButton = document.querySelector(".search-button");
let counts = { 0: 0, 1: 0, 2: 0 };
let hospitalNames = [];

for (let i = 0; i < data.length; i++) {
  hospitalNames.push(data[i][0]);
}

function resetTable(render) {
  const allCheckboxes = document.querySelectorAll(
    "#hospital_select input[type=checkbox]"
  );
  if (render) {
    displayTable(data);
    search_input_span.innerHTML =
      ' 29 בתי חולים / מוסדות נבחרו <img class="" src ="./pics/down-arrow.svg" width="20" height="20"/>';
    allCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    selectedHospitals = [];
  }

  if (selectedHospitals.length === 0) {
    data = copyTable(dataOriginal);
    if (render) displayTable(data);
  }
}

function invokeFilter() {
  data = dataOriginal.filter((row) => {
    return selectedHospitals.includes(row[0]);
  });
  displayTable(data);
}

let selectedHospitals = [];
function createHospitalSelect() {
  for (let i = 0; i < hospitalNames.length; i++) {
    let option = document.createElement("div");
    let checkbox = document.createElement("input");
    let span = document.createElement("span");

    option.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    checkbox.addEventListener("click", function (e) {
      if (checkbox.checked) {
        selectedHospitals.push(checkbox.value);
      } else {
        selectedHospitals = selectedHospitals.filter(
          (hospital) => hospital !== checkbox.value
        );
      }

      search_input_span.innerHTML =
        selectedHospitals.length +
        ' בתי חולים / מוסדות נבחרו <img class="" src ="./pics/down-arrow.svg" width="20" height="20"/>';
      // stop the event from bubbling up to the parent
      e.stopPropagation();
    });
    option.classList.add("option-hospital");
    checkbox.type = "checkbox";
    checkbox.id = hospitalNames[i];
    checkbox.name = hospitalNames[i];
    checkbox.value = hospitalNames[i];
    option.appendChild(checkbox);
    option.appendChild(span);
    span.textContent = hospitalNames[i];
    hospital_select_hospitals.appendChild(option);
  }
}

createHospitalSelect();
displayTable(data);

const dataOriginal = copyTable(data);

function copyTable(table) {
  let newTable = [];
  for (var row in table) {
    newTable.push([...table[row]]);
  }
  return newTable;
}
// Function to display the table
function displayTable(data) {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; // Clear existing rows

  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < data[i].length; j++) {
      let cell = document.createElement("td");
      let span = document.createElement("span");

      span.textContent = data[i][j];
      if (j === 1 || j === 2) {
        cell.classList.add("progress-cell");
        const progress = document.createElement("div");
        progress.classList.add("progress");
        const progress_bar = document.createElement("div");
        progress_bar.classList.add("progress-bar");
        progress_bar.style.width = data[i][j];

        if (parseFloat(data[i][j].replace("%", "")) > 100) {
          progress_bar.classList.add("red");
        } else {
          progress_bar.classList.add("blue");
        }
        progress.appendChild(progress_bar);
        cell.appendChild(progress);
      }
      cell.appendChild(span);

      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
}

const tableArrows = {
  0: document.querySelector(".table-arrow-1"),
  1: document.querySelector(".table-arrow-2"),
  2: document.querySelector(".table-arrow-3"),
};

function sortTable(columnIndex) {
  const isNumber = columnIndex === 0 ? false : true;
  if (counts[columnIndex] === 0) {
    tableArrows[columnIndex].classList.remove("table-arrow-up");
    tableArrows[columnIndex].classList.remove("table-arrow");
    data.sort(function (a, b) {
      let textA = a[columnIndex];
      let textB = b[columnIndex];
      if (isNumber) {
        textA = parseFloat(textA.replace("%", ""));
        textB = parseFloat(textB.replace("%", ""));
        return textA - textB;
      }
      // Specify the locale as 'he' for Hebrew only for the specified column
      return textA.localeCompare(textB, "he", { sensitivity: "base" });
    });
  } else if (counts[columnIndex] === 2) {
    tableArrows[columnIndex].classList.remove("table-arrow-up");
    tableArrows[columnIndex].classList.add("table-arrow");
    resetTable();
  } else {
    tableArrows[columnIndex].classList.add("table-arrow-up");
    tableArrows[columnIndex].classList.remove("table-arrow");
    data.sort(function (a, b) {
      let textA = a[columnIndex];
      let textB = b[columnIndex];
      if (isNumber) {
        textA = parseFloat(textA.replace("%", ""));
        textB = parseFloat(textB.replace("%", ""));
        return textB - textA;
      }
      return textB.localeCompare(textA, "he", { sensitivity: "base" });
    });
  }
  counts[columnIndex]++;
  counts[columnIndex] %= 3;

  displayTable(data);
}

search_input.addEventListener("click", function () {
  hospital_select.classList.toggle("hide");
  searchButton.classList.toggle("search-button-clicked");
});
