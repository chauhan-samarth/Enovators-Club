const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeButton = document.querySelector(".close-button");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
    document.getElementById("body").style.overflow = "auto";
  }, 1600);
});

closeButton.addEventListener("click", () => {
  hidePopup();
});

// Function to show the popup
function showPopup() {
  popupScreen.classList.add('active');
}

// Function to hide the popup
function hidePopup() {
  popupScreen.classList.remove('active');
  popupScreen.classList.add('inactive');
}

// Close the popup when clicking anywhere outside of it
window.addEventListener("click", (event) => {
  if (event.target === popupScreen) {
    hidePopup();
  }
});