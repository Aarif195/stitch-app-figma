const box = document.querySelector(".hover-box");

// Hover effect
box.addEventListener("mouseenter", () => {
  box.style.bacckgroundColor = "rgba (0,0,0, 0.1)";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "transparent)";
});


