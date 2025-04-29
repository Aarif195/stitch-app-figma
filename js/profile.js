// document.addEventListener("DOMContentLoaded", () => {
//   // Update Greeting based on current time
//   const greetingElement = document.querySelector(".greeting");
//   const now = new Date();
//   const hour = now.getHours();

//   if (hour < 12) {
//     greetingElement.textContent = "Good Morning!";
//   } else if (hour < 18) {
//     greetingElement.textContent = "Good Afternoon!";
//   } else {
//     greetingElement.textContent = "Good Evening!";
//   }

//   // Update Username based on saved localStorage info
//   const usernameElement = document.querySelector(".username");
//   const user = JSON.parse(localStorage.getItem("user"));

//   if (user) {
//     usernameElement.textContent = `${user.firstname} ${user.lastname}`;
//   } else {
//     usernameElement.textContent = "Guest"; // Default if no user is logged in
//   }
// });
