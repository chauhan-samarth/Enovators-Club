var countDate = new Date("Oct 12, 2023 00:00:00").getTime();
function Enovators() {
  var today = new Date().getTime();
  timeLeft = countDate - today;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(timeLeft / day);
  var h = Math.floor((timeLeft % day) / hour);
  var m = Math.floor((timeLeft % hour) / minute);
  var w = Math.floor((timeLeft % minute) / second);
  if (d < 10) {
    document.getElementById("day").innerHTML = "0" + d;
  } else {
    document.getElementById("day").innerHTML = d;
  }
  if (m < 10) {
    document.getElementById("minute").innerHTML = "0" + m;
  } else {
    document.getElementById("minute").innerHTML = m;
  }

  if (h < 10) {
    document.getElementById("hour").innerHTML = "0" + h;
  } else {
    document.getElementById("hour").innerHTML = h;
  }
  if (w < 10) {
    document.getElementById("second").innerHTML = "0" + w;
  } else {
    document.getElementById("second").innerHTML = w;
  }
}

setInterval(function () {
  Enovators();
}, 1000);


