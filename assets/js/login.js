document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const popupScreen = document.getElementById("popupScreen");
  const closeButton = document.querySelector(".close-button");

  if (loginForm && popupScreen && closeButton) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      popupScreen.classList.add("active");

      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            popupScreen.innerHTML = `
              <div class="popup-box">
                <span class="close-button" id="closeButton">&times;</span>
                <div class="popup-content">
                  <div class="popup-text">
                    <h2 class="main-title" style="margin-top: 10px; font-size: 20px!important;">🎉 Login Successful 🎉</h2>
                    <h3 style="font-size: 18px; line-height: 30px; color: #fff; text-align: center">
                      Redirecting...
                    </h3>
                  </div>
                </div>
              </div>
            `;

            setTimeout(function () {
              window.location.href = `/echus-stellarum/${username}-${password}.html`;
            }, 2000);
          } else {
            popupScreen.innerHTML = `
              <div class="popup-box">
                <span class="close-button" id="closeButton">&times;</span>
                <div class="popup-content">
                  <div class="popup-text">
                    <h2 class="main-title" style="margin-top: 10px; font-size: 20px!important;">🚨Invalid Login🚨</h2>
                    <h3 style="font-size: 18px; line-height: 30px; color: #fff;">
                      Incorrect Login ID or Password. Please try again.
                    </h3>
                  </div>
                </div>
              </div>
            `;
          }
          setTimeout(function () {
            popupScreen.classList.remove("active");
          }, 5000);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
    closeButton.addEventListener("click", function () {
      popupScreen.classList.remove("active");
    });
  } else {
    console.error("loginForm, popupScreen, or closeButton not found");
  }
});
document.getElementById("popupScreen").addEventListener("click", function (event) {
  if (event.target === this) {
      this.classList.remove("active");
  }
});

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("popupScreen").classList.remove("active");
});

