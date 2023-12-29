/* Hamburger menu */

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
/* Scroll button */

const scrollButton = document.getElementById("scroll-button");

scrollButton.addEventListener("click", () => {
  window.scrollBy({
    top: 1000,
    left: 0,
    behavior: "smooth",
  });
});
/* Calculator */

function calculateFee() {
  var type = document.getElementById("type").value;
  var feeInput = document.getElementById("fee").value;

  if (feeInput === "") {
    alert("Please enter a fee amount.");
    return;
  }

  var fee = parseFloat(feeInput);

  if (isNaN(fee)) {
    alert("Please enter a valid number for the fee.");
    return;
  }

  var resultElement = document.getElementById("result");

  if (type === "individual") {
    // Increase fee by 2.5% for an individual
    var increasedFee = fee * 0.025;
    resultElement.textContent = "сум" + increasedFee.toFixed(2);
  } else if (type === "entity") {
    // Increase fee by 1.5% for an entity
    var increasedFee = fee * 0.015;
    resultElement.textContent = "сум" + increasedFee.toFixed(2);
  }
}

// Event listener for the "Enter" key
document.getElementById("fee").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    calculateFee();
  }
});