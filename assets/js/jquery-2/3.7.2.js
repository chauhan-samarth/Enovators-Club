document.addEventListener("DOMContentLoaded", function() {
  const countdownDate = new Date("Jul 02, 2024 17:00:00").getTime();
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
        window.location.href = "https://www.enovators.in/echus-stellarum/158736-96480251/01_e97d90b6-5b27-47a9-a93e-d7df99cabf8b";
      };
    }
  }, 1000);
});


document.getElementById("logoutButton").addEventListener("click", function () {
    window.location.href = "https://www.enovators.in/echus-stellarum";
});
document.getElementById("logout").addEventListener("click", function () {
    window.location.href = "https://www.enovators.in/echus-stellarum";
});
