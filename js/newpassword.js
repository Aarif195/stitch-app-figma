document.addEventListener("DOMContentLoaded", () => {
  const passwords = [
    {
      input: document.getElementById("password1"),
      toggle: document.getElementById("togglePassword1"),
      eyeIcon: document.getElementById("eyeIcon1"),
      toggleText: document.getElementById("toggleText1"),
    },
    {
      input: document.getElementById("password2"),
      toggle: document.getElementById("togglePassword2"),
      eyeIcon: document.getElementById("eyeIcon2"),
      toggleText: document.getElementById("toggleText2"),
    },
  ];

  passwords.forEach(({ input, toggle, eyeIcon, toggleText }) => {
    // Always show the toggle icon/text (remove condition)
    toggle.style.display = "flex";

    toggle.addEventListener("click", () => {
      const isVisible = input.type === "text";
      input.type = isVisible ? "password" : "text";

      eyeIcon.classList.toggle("fa-eye");
      eyeIcon.classList.toggle("fa-eye-slash");
      toggleText.textContent = isVisible ? "Hide" : "Show";
    });
  });
});
