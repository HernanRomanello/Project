document.addEventListener("DOMContentLoaded", function () {
  let modal = document.getElementById("myModal");
  let overlay = document.getElementById("overlay");
  let closeModalBtn = document.getElementById("closeModalBtn");
  let otherButton = document.getElementById("otherButton");

  function showModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling
  }

  function hideModal() {
    modal.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = ""; // Enable scrolling
  }

  showModal();

  closeModalBtn.addEventListener("click", function () {
    hideModal();
  });

  otherButton.addEventListener("click", function () {
    hideModal();
  });
});
