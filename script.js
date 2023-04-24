// ///////////////////////////
// SET CURRENT YEAR
// //////////////////////////
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// ///////////////////////////
// MAKE MOBILE NAVIGATION WORK
// //////////////////////////
const btnNavEL = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEL.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
