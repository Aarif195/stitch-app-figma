window.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const differentNavbar = document.getElementById("differentNavbar");
  const normalNavbar = document.getElementById("normalNavbar");
  const logoutBtn = document.getElementById("logoutBtn");

  if (normalNavbar) normalNavbar.style.display = "flex";
  if (differentNavbar) differentNavbar.style.display = "none";

  if (user) {
    if (differentNavbar) differentNavbar.style.display = "flex";
    if (normalNavbar) normalNavbar.style.display = "none";
  }

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("user"); // Clear user
      window.location.href = "login.html"; // Redirect to login
    });
  }
});




/////////////////////////////
  // Greeting update
document.addEventListener("DOMContentLoaded", () => {
  // Navbar show/hide
  const user = JSON.parse(localStorage.getItem("user"));
  const differentNavbar = document.getElementById("differentNavbar");

  if (differentNavbar) {
    if (user) {
      differentNavbar.style.display = "flex";
    } else {
      differentNavbar.style.display = "none";
    }
  }

  // Greeting update
  const greetingElement = document.getElementById("greeting");
  const now = new Date();
  const hour = now.getHours();

  if (greetingElement) {
    if (hour < 12) {
      greetingElement.textContent = "Good Morning!";
    } else if (hour < 18) {
      greetingElement.textContent = "Good Afternoon!";
    } else {
      greetingElement.textContent = "Good Evening!";
    }
  }

  // Username update
  const usernameElement = document.getElementById("username");

  if (usernameElement && user) {
    usernameElement.textContent = `${user.firstname} ${user.lastname}`;
  } else if (usernameElement) {
    usernameElement.textContent = "Guest";
  }
});
