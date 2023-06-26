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

// modal
window.onload = function () {
  const modal = document.querySelector(".modal");
  const modalClose = document.querySelector(".modal-close");

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
};

//modal 하루동안 보지않기
// window.addEventListener("DOMContentLoaded", function () {
//   var popupBox = document.querySelector(".popup_box");
//   popupBox.addEventListener("mousedown", dragPopup);

//   var popupLayer = document.getElementById("popup_layer");
//   if (document.cookie.indexOf("popToday=close") < 0) {
//     popupLayer.style.display = "block";
//   } else {
//     popupLayer.style.display = "none";
//   }
// });

// function dragPopup(event) {
//   event.preventDefault();
//   var offsetX = event.clientX - event.target.offsetLeft;
//   var offsetY = event.clientY - event.target.offsetTop;

//   document.addEventListener("mousemove", movePopup);
//   document.addEventListener("mouseup", stopDrag);

//   function movePopup(event) {
//     var x = event.clientX - offsetX;
//     var y = event.clientY - offsetY;

//     var parentWidth = event.target.parentElement.clientWidth;
//     var parentHeight = event.target.parentElement.clientHeight;

//     var maxX = parentWidth - event.target.offsetWidth;
//     var maxY = parentHeight - event.target.offsetHeight;

//     x = Math.max(0, Math.min(x, maxX));
//     y = Math.max(0, Math.min(y, maxY));

//     event.target.style.left = x + "px";
//     event.target.style.top = y + "px";
//   }

//   function stopDrag() {
//     document.removeEventListener("mousemove", movePopup);
//     document.removeEventListener("mouseup", stopDrag);
//   }
// }

// function closeToday() {
//   setCookie("popToday", "close", 1);
//   var popupLayer = document.getElementById("popup_layer");
//   popupLayer.style.display = "none";
// }

// function closePop() {
//   var popupLayer = document.getElementById("popup_layer");
//   popupLayer.style.display = "none";
// }

// function setCookie(name, value, days) {
//   var expires = "";
//   if (days) {
//     var date = new Date();
//     date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//     expires = "; expires=" + date.toUTCString();
//   }
//   document.cookie = name + "=" + (value || "") + expires + "; path=/";
// }
