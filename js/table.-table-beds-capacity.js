let data = [
  ["אלף", 28, "רמבם"],
  ["Jacob Martinez", 35, "כרמל"],
  ["Olivia Williams", 22, "חורב"],
  ["Ethan Reynolds", 30, "העמק"],
  ["Sophia Nguyen", 25, "בני ציון"],
  ["Liam Thompson", 32, "פוריה"],
  ["Ava Miller", 27, "אלישע"],
  ["Noah Taylor", 29, "הלל יפה"],
  ["Mia Davis", 24, " אסותא חיפה"],
  ["Jackson Lee", 31, "האיטלקי"],
  ["Grace Robinson", 26, "זיו צפת"],
  ["Logan Harris", 33, "פלימן"],
  ["Ella White", 23, "שער מנשה"],
  ["Aiden Clark", 28, "מזרע"],
  ["Lily Brown", 34, "נווה שלווה"],
  ["Lucas Garcia", 29, " מדיקל סנטר"],
  ["Stella Patel", 26, "לנדיאדו"],
  ["Benjamin Smith", 30, " מאיר"],
  ["Scarlett Jones", 25, "לוינשטיין"],
  ["Carter Wilson", 32, " נתניה"],
  ["Sophie Turner", 31, "שערי צדק"],
  ["William Johnson", 27, "משגב לדך"],
  ["Evelyn Davis", 29, "ביקור חולים"],
  ["Daniel Lee", 26, "הדסה"],
  ["Chloe Anderson", 33, "הרצוג"],
  ["Elijah Carter", 24, "וולפסון"],
  ["Zoe Walker", 30, "אסף הרופא"],
  ["Leo Miller", 22, "תל-השומר"],
  ["Victoria Adams", 28, "קפלן"],
  ["Isaac White", 35, "סורוקה"],
];

let nameCount = 0;

// Display the original table content
displayTable(data);
const dataOriginal = data;

// Function to display the table
function displayTable(data) {
  let tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = ""; // Clear existing rows

  //   const name = document.getElementById("name");
  //   name.addEventListener("click", () => {
  //     sortTable(nameCount);
  //     nameCount++;
  //     // console.log(nameCount);
  //     if (nameCount > 0) {
  //       data.reverse();
  //     }
  //   });

  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < data[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = data[i][j];
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
}

// Function to sort the table
function sortTable(columnIndex) {
  data.sort(function (a, b) {
    let textA = a[columnIndex];
    let textB = b[columnIndex];
    console.log(columnIndex);

    // Specify the locale as 'he' for Hebrew only for the specified column
    return textA.localeCompare(textB, "he", { sensitivity: "base" });
  });
  displayTable(data);
}

// function sortTable(columnIndex, clickedClass) {
//   data.sort(function (a, b) {
//     let textA = a[columnIndex].toUpperCase();
//     let textB = b[columnIndex].toUpperCase();
//     console.log("Column Index:", columnIndex);
//     console.log("Clicked Class:", clickedClass);
//     return textA.localeCompare(textB);
//   });

//   // Check if the data is sorted
//   let isSorted = isDataSorted(columnIndex);
//   console.log("Is data sorted:", isSorted);
// }
// document.getElementById("yourButtonId").addEventListener("click", function () {
//   sortTable(yourColumnIndex, this.className);
// });
