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

// fortfolio

document.addEventListener("DOMContentLoaded", function () {
  var list = document.querySelectorAll("#portfolio>.container>.mnu>li>a");
  var listImg = document.querySelectorAll("#portfolio>.container>.view>li");
  var nowIdx = 0;

  list.forEach(function (item, index) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      nowIdx = index;

      item.parentNode.classList.add("on");
      var siblings = Array.from(item.parentNode.parentNode.children).filter(function (child) {
        return child !== item.parentNode;
      });
      siblings.forEach(function (sibling) {
        sibling.classList.remove("on");
      });

      listImg.forEach(function (img) {
        img.style.display = "none";
      });
      listImg[nowIdx].style.display = "block";
    });
  });
});
