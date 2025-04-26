document.addEventListener("DOMContentLoaded", () => {
  const designerBtn = document.querySelector(".designer");
  const userBtn = document.querySelector(".user");
  // const nameInput = document.querySelector(".nameInput");
  // console.log(nameInput);

  // FORM // Gender Selection Form
  const phoneLabel = document.getElementById("phone");
  const storeLabel = document.getElementById("store");
  const locationLabel = document.getElementById("address");

  designerBtn.addEventListener("click", () => {
    designerBtn.style.backgroundColor = "#245949";
    designerBtn.style.color = "white";

    userBtn.style.backgroundColor = "#ECECE0";
    userBtn.style.color = "#245949";

    // Change styles if needed
    // document.body.style.backgroundColor = "green";
    // document.body.style.color = "white";

    // Restore original labels
    phoneLabel.style.display = "inline";
    storeLabel.textContent = "Store Name";
    locationLabel.textContent = "Address/Location";
  });

  userBtn.addEventListener("click", () => {
    userBtn.style.backgroundColor = "#245949";
    userBtn.style.color = "white";
    designerBtn.style.backgroundColor = "#ECECE0";
    designerBtn.style.color = "#49454F";

    // Change styles if needed
    //  document.body.style.backgroundColor = "#333";
    //  document.body.style.color = "green";

    // Modify labels

    locationLabel.textContent = "Location";
    nameInput.style.display = "none";
  });


  
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
});
