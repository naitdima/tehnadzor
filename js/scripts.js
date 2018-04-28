var mainForm = document.querySelector(".main-form");
var inputName = document.querySelector("[name=name]");
var inputPhone = document.querySelector("[name=phone]");
var inputEmail = document.querySelector("[name=email]");
var popup = document.querySelector(".popup");
var popupOk = document.querySelector(".popup-ok");
var popupError = document.querySelector(".popup-error");
var overlay = document.querySelector(".overlay");
var popupCloseOk = document.querySelector(".popup__close--ok");
var popupCloseError = document.querySelector(".popup__close--error");

var carousel = document.querySelector(".carousel-list");
var carouselPrev = document.querySelector(".carousel-btn--prev");
var carouselNext = document.querySelector(".carousel-btn--next");
var carouselPosition = 0;
var carouselItemWidth = 300;
var carouselCount = 4;
var carouselListItems = carousel.querySelectorAll(".carousel-list__item");

var slider = document.querySelector(".slider-list");
var sliderPrev = document.querySelector(".slider-btn--prev");
var sliderNext = document.querySelector(".slider-btn--next");
var sliderPosition = 0;
var sliderItemWidth = 1075;
var sliderCount = 1;
var sliderListItems = slider.querySelectorAll(".slider-list__item");

mainForm.addEventListener("submit", function (evt) {
  if (!inputName.value || !inputPhone.value || !inputEmail.value) {
    evt.preventDefault();
    overlay.classList.add("overlay--show");
    popupError.classList.add("popup--show");
  }
  else {
    overlay.classList.add("overlay--show");
    popupOk.classList.add("popup--show");
  }
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (overlay.classList.contains("overlay--show") || popupOk.classList.contains("popup--show") || popupError.classList.contains("popup--show")) {
      overlay.classList.remove("overlay--show");
      popup.classList.remove("popup--show");
    }
  }
})

popupCloseOk.onclick = function(evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--show");
  popup.classList.remove("popup--show");
}

popupCloseError.onclick = function(evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--show");
  popup.classList.remove("popup--show");
}

carouselPrev.onclick = function(evt) {
  evt.preventDefault();
  carouselPosition = Math.min(carouselPosition + carouselItemWidth * carouselCount, 0);
  carousel.style.marginLeft = carouselPosition + 'px';
}

carouselNext.onclick = function(evt) {
  evt.preventDefault();
  carouselPosition = Math.max(carouselPosition - carouselItemWidth * carouselCount, -carouselItemWidth * (carouselListItems.length - carouselCount));
  carousel.style.marginLeft = carouselPosition + 'px';
}

sliderPrev.onclick = function(evt) {
  evt.preventDefault();
  sliderPosition = Math.min(sliderPosition + sliderItemWidth * sliderCount, 0);
  slider.style.marginLeft = sliderPosition + 'px';
}

sliderNext.onclick = function(evt) {
  evt.preventDefault();
  sliderPosition = Math.max(sliderPosition - sliderItemWidth * sliderCount, -sliderItemWidth * (sliderListItems.length - sliderCount));
  slider.style.marginLeft = sliderPosition + 'px';
}






