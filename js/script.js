var link = document.querySelector(".feedback-link");
var close = document.querySelector(".feedback-close");
var popup = document.querySelector(".feedback");
var userName = document.querySelector("[name=feedback-name]");
var overlay = document.querySelector(".overlay");

link.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add("feedback-open");
  overlay.classList.add("overlay-open");
  userName.focus();
});

close.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("feedback-open");
  overlay.classList.remove("overlay-open");
});

overlay.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("feedback-open");
  overlay.classList.remove("overlay-open");
});

window.addEventListener("keydown", function(event){
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-open")) {
      popup.classList.remove("feedback-open");
      overlay.classList.remove("overlay-open");
    }
  }
});
