let comOrderBtn = document.getElementById("comBtn");

let paymentBox = document.getElementById("paymentBox");

console.log(comOrderBtn, paymentBox);


comOrderBtn.addEventListener("click", function (e) {
  e.preventDefault();
  paymentBox.style.display = "block";
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target === paymentBox) {
    paymentBox.style.display = "none";
  }
});