

// Select elements
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.querySelector(".close");
const navLinks = document.querySelector('.nav-links');
console.log(closeIcon);


// Open menu
hamburgerIcon.addEventListener('click', () => {
  navLinks.classList.add('active');
  closeIcon.style.display = 'block';
});

// Close menu
closeIcon.addEventListener('click', () => {
  navLinks.classList.remove('active');
  closeIcon.style.display = 'none';
});


// Carousel Functions
document.querySelectorAll(".carousel-control").forEach((control) => {
  control.addEventListener("click", () => {
    const index = control.getAttribute("data-index");

    // Update the active carousel control
    document
      .querySelectorAll(".carousel-control")
      .forEach((c) => c.classList.remove("active"));
    control.classList.add("active");

    // Update the visible carousel item
    const carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach(
      (item) => (item.style.transform = `translateX(-${index * 100}%)`)
    );
  });
});
