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

  // Set a timeout to hide the popup after 5 seconds (5000 milliseconds)
  //setTimeout(function() {
  //    hidePopup();
  //}, 5000); // Adjust the time as needed
}

// Function to hide the popup
function hidePopup() {
  popupScreen.classList.remove('active');
  popupScreen.classList.add('inactive'); // Add the inactive class to trigger the slide out animation
}

// Show the popup when needed, for example:
// showPopup(); // Commented out as it's not needed initially

// Close the popup when clicking anywhere outside of it
window.addEventListener("click", (event) => {
  if (event.target === popupScreen) {
    hidePopup();
  }
});