const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

const toggleText = document.getElementById("toggleText");

console.log(passwordInput, togglePassword, eyeIcon);
// console.log(hiden);

// Toggle password visibility on icon click
togglePassword.addEventListener("click", () => {
  const isVisible = passwordInput.type === "text";
  passwordInput.type = isVisible ? "password" : "text";

  // Swap icon classes
  eyeIcon.classList.toggle("fa-eye");

  eyeIcon.classList.toggle("fa-eye-slash");

  toggleText.textContent = isVisible ? "Hide" : "Show";
});

// Show/hide the eye icon based on input
passwordInput.addEventListener("input", () => {
  togglePassword.style.display =
    passwordInput.value.length > 0 ? "block" : "none";
});

const password = document.getElementById("password");
console.log(password);




//////////////////////////////////////////////////////////////////////////////////////////

const loginForm = document.getElementById("login-form");
const responseDiv = document.getElementById("response");

loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const data = { email, password };

  try {
    const res = await fetch("https://stitch-nhv1.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(
        errorData.message || "An error occurred while logging in."
      );
    }

    // If successful
    const responseData = await res.json();

    // ✅ Save user information into localStorage
    localStorage.setItem(
      "user",
      JSON.stringify(responseData.user || { email })
    );

    // ✅ Show success message
    responseDiv.innerHTML =
      '<p style="color: green; font-size: 1.5rem;">Login Successful 🎉 Redirecting...</p>';

    setTimeout(() => {
      window.location.href = "index.html"; // Redirect to homepage
    }, 2000);
  } catch (error) {
    console.error("Login Error:", error);
    responseDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
});




// window.addEventListener('DOMContentLoaded', () => {
//   const user = JSON.parse(localStorage.getItem('user'));

//   const differentNavbar = document.getElementById('differentNavbar');
//   const normalNavbar = document.getElementById('normalNavbar');

//   if (user) {
//     if (differentNavbar) differentNavbar.style.display = 'flex';
//     if (normalNavbar) normalNavbar.style.display = 'none';
//   } else {
//     if (differentNavbar) differentNavbar.style.display = 'none';
//     if (normalNavbar) normalNavbar.style.display = 'flex';
//   }
// });



