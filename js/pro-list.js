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
const sliders = document.querySelectorAll(".slider");

function updateSliderBackground(slider) {
  const value = slider.value;
  slider.style.background = `linear-gradient(to right, #245949 ${value}%, #ccc ${value}%)`;
}

sliders.forEach((slider) => {
  // Initial background
  updateSliderBackground(slider);

  // Update on input
  slider.addEventListener("input", function () {
    updateSliderBackground(this);
  });
});
