"use strict";

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var targetElement = document.querySelector("header");

  if (scrollPosition > 20) {
    targetElement.classList.add("active");
  } else {
    targetElement.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  var targetElement = document.querySelector("header");

  if (scrollPosition === 0) {
    targetElement.classList.remove("active");
  }
});
