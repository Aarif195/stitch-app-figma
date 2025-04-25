document.addEventListener("DOMContentLoaded", () => {
  const designerBtn = document.querySelector(".designer");
  const userBtn = document.querySelector(".user");
  const yes = document.querySelectorAll(".yes");
  console.log(yes);

  // FORM // Gender Selection Form
  const phoneLabel = document.getElementById("phone");
  const storeLabel = document.getElementById("store");
  const locationLabel = document.getElementById("address");

  designerBtn.addEventListener("click", () => {
    // designerBtn.classList.add("active");
    // userBtn.classList.remove("active");
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
    //  userBtn.classList.add("active");
    //  designerBtn.classList.remove("active");

    userBtn.style.backgroundColor = "#245949";
    userBtn.style.color = "white";
    designerBtn.style.backgroundColor = "#ECECE0";
    designerBtn.style.color = "#49454F";
    // userBtn.style.backgroundColor = "green";
    // userBtn.style.color = "white";

    // Change styles if needed
    //  document.body.style.backgroundColor = "#333";
    //  document.body.style.color = "green";

    // Modify labels
    // phoneLabel.style.display = "none";
    // storeLabel.textContent = "Email Address";

    locationLabel.textContent = "Location";
  });
});
