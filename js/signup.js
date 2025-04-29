document.addEventListener("DOMContentLoaded", () => {
  const designerBtn = document.querySelector(".designer");
  const userBtn = document.querySelector(".user");

  // FORM // Gender Selection Form
  const phoneLabel = document.getElementById("phone");
  const storeLabel = document.getElementById("store");
  const locationLabel = document.getElementById("address");
  const storeArea = document.getElementById("store-area");
  console.log(storeArea, address);

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

    locationLabel.textContent = "Address";
    storeArea.style.display = "none";
    // nameInput.style.display = "none";
  });

  // ////////////////////////////////////
  // Toggle password visibility on icon click
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("togglePassword");
  const eyeIcon = document.getElementById("eyeIcon");

  const toggleText = document.getElementById("toggleText");

  console.log(passwordInput, togglePassword, eyeIcon);
  // console.log(hiden);

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


// ////////////////////////////////////////////////////////////

const signupForm = document.getElementById("signup-form");
const responseDiv = document.getElementById("response");

// Assuming you have buttons for designer and user
const designerBtn = document.querySelector(".designer");
const userBtn = document.querySelector(".user");

// Define a variable to store the selected role
let role = "designer";

// Set role when user clicks the designer button
designerBtn.addEventListener("click", () => {
  role = "designer";
  // Optionally, you can add styles or modify the form here (e.g., showing designer-related fields)
});

// Set role when user clicks the user button
userBtn.addEventListener("click", () => {
  role = "user";
  // Optionally, you can add styles or modify the form here (e.g., showing user-related fields)
});

signupForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Collect common form data
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phoneNumber").value.trim();
  const password = document.getElementById("password").value.trim();

  // Prepare the data object based on the selected role
  let data;

  if (role === "designer") {
    const storeName = document.getElementById("storePlace").value.trim();
    const storeLocation = document.getElementById("storeLocation").value.trim();

    // Build the data object for designer role
    data = {
      firstname,
      lastname,
      email,
      phone,
      role,
      storeName,
      storeLocation,
      password,
    };
  } else if (role === "user") {
    const address = document.getElementById("addressInput").value.trim();

    // Build the data object for user role
    data = { firstname, lastname, email, phone, address, password, role };
  } else {
    // If no role is selected, show an error
    responseDiv.innerHTML = '<p style="color: red;">Please select a role!</p>';
    return;
  }

  try {
    // Send the data to the backend
    const res = await fetch(
      "https://stitch-nhv1.onrender.com/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    // Check if the response is not OK
    if (!res.ok) {
      // Parse the error response from the backend
      const errorData = await res.json();
      throw new Error(
        errorData.message || "An error occurred while processing your request."
      );
    }

    // If successful, show success message and redirect
    const responseData = await res.json();
    responseDiv.innerHTML =
      '<p style="color: green;">Signup Successful 🎉 Redirecting...</p>';
    setTimeout(() => {
      window.location.href = "index.html"; // Change to your real homepage if needed
    }, 2000); // 2-second delay
  } catch (error) {
    // Handle errors from the backend
    console.error("Error:", error);
    responseDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
});
