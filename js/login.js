const passwordInput = document.getElementById("Password");
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
