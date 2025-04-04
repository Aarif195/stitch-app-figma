

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



