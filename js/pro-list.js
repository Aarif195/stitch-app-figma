const productContainer = document.querySelector(".product-container");
const hoverState = document.querySelector(".hoverState");

console.log(hoverState);

// productContainer.addEventListener("mouseenter", () => {
//   productContainer.style.backgroundColor = "yellow";
// });

// productContainer.addEventListener("mouseleave", () => {
//   productContainer.style.backgroundColor = "transparent";
// });

productContainer.addEventListener("click", () => {
  hoverState.classList.add("show");
});

//
const slider = document.getElementById("slider");

function updateSliderBackground(value) {
  slider.style.background = `linear-gradient(to right, #28a745 ${value}%, #ccc ${value}%)`;
}

// Initial setup
updateSliderBackground(slider.value);

// Update on change
slider.addEventListener("input", function () {
  updateSliderBackground(this.value);
});
