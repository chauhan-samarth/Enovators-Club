document.addEventListener("DOMContentLoaded", function() {
  const countdownDate = new Date("Aug 02, 2024 17:00:00").getTime();
  const startButton = document.getElementById('start-button');
  
  const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("day").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hour").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minute").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("second").innerHTML = seconds < 10 ? "0" + seconds : seconds;
    
    if (distance < 0) {
      clearInterval(countdownFunction);
      document.getElementById("day").innerHTML = "00";
      document.getElementById("hour").innerHTML = "00";
      document.getElementById("minute").innerHTML = "00";
      document.getElementById("second").innerHTML = "00";
      startButton.disabled = false;
      startButton.classList.add('active');
      startButton.onclick = function() {
        window.location.href = "https://www.enovators.in/echus-stellarum/784923-32589714/01_5d190702-3640-4c6b-b363-6d323d0245eb";
      };
    }
  }, 1000);
});

var isLoggedIn = sessionStorage.getItem('isLoggedIn');
var loginID = sessionStorage.getItem('loginID');
var expirationTime = sessionStorage.getItem('expirationTime');

if (!isLoggedIn || !loginID || !expirationTime || new Date().getTime() > parseInt(expirationTime)) {
  document.getElementById("popupScreen").classList.add("active");
}
document.getElementById("closeButton").addEventListener("click", function () {
  window.location.href = "https://www.enovators.in/echus-stellarum";
});
document.getElementById("popupScreen").addEventListener("click", function (event) {
  if (event.target === this) {
    window.location.href = "https://www.enovators.in/echus-stellarum";
  }
});

var now = new Date();
var newExpirationTime = new Date(now.getTime() + 60 * 60 * 1000);
sessionStorage.setItem('expirationTime', newExpirationTime.getTime());
document.getElementById("logoutButton").addEventListener("click", function () {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('loginID');
    sessionStorage.removeItem('expirationTime');
    window.location.href = "https://www.enovators.in/echus-stellarum";
});
document.getElementById("logout").addEventListener("click", function () {
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('loginID');
    sessionStorage.removeItem('expirationTime');
    window.location.href = "https://www.enovators.in/echus-stellarum";
});



