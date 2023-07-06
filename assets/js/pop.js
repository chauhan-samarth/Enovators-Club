const popupScreen = document.querySelector(".popup-screen");
const popupBox = document.querySelector(".popup-box");
const closeButton = document.querySelector(".close-button");

window.addEventListener("load", () => {
  setTimeout(() => {
    popupScreen.classList.add("active");
    document.getElementById("body").style.overflow = "hidden";
}, 1000);
});
closeButton.addEventListener("click", () => {
  popupScreen.classList.remove("active");
  document.getElementById("body").style.overflow = "auto";
});

