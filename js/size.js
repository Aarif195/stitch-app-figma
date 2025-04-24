

// FORM // Gender Selection Form
const femaleRadio = document.getElementById("femaleRadio");
const maleRadio = document.getElementById("maleRadio");
const hipsGroup = document.getElementById("hipsGroup");
const bust = document.getElementById("bust");
console.log(waist);




console.log(femaleRadio, maleRadio, hipsGroup);
// Function to update field visibility based on gender selection
function updateFormFields() {
  if (maleRadio.checked) {
    hipsGroup.style.display = "none";
    bust.innerHTML = "Chest(cm)";
  } else if (femaleRadio.checked) {
    hipsGroup.style.display = "block";
  }
}

// Add event listeners to both radio buttons
femaleRadio.addEventListener("change", updateFormFields);
maleRadio.addEventListener("change", updateFormFields);

// Optional: run it once on page load to set the correct state
updateFormFields();




// Modal State
let openBtn = document.getElementById("open-btn");

let modalContainer = document.getElementById("modalContainer");

let closeBtn = document.getElementById("close-btn");

console.log(openBtn, modalContainer);

openBtn.addEventListener("click", function (e) {
  e.preventDefault();
  modalContainer.style.display = "block";
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
