// share button display share links
// toggles active classList

// obtains DOM elements
const shareBtn = document.getElementById("shareBtn");
const shareSection = document.querySelector(".share");

// handles share button functionality
function shareHandle() {
  console.log("share clicked");
  shareSection.classList.toggle("active");
}

// triggers shareBtn function when clicked
shareBtn.addEventListener("click", shareHandle);
