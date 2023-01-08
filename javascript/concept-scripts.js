let headerArray = document.querySelectorAll(".conceptHeader");
console.log(headerArray);
window.addEventListener("scroll", slideIn);
function slideIn() {
  for (var i = 0; i < headerArray.length; i++) {
    var elem = headerArray[i];
    var distInView =
      elem.getBoundingClientRect().top - window.innerHeight + 250;
    if (distInView < 0) {
      elem.classList.add("slide-in-left");
      elem.style.visibility = "visible";
    } else {
      elem.classList.remove("slide-in-left");
    }
  }
}
slideIn();

let paragraphArray = document.querySelectorAll(".conceptText");
console.log(paragraphArray);
window.addEventListener("scroll", fadeIn);
function fadeIn() {
  for (var i = 0; i < paragraphArray.length; i++) {
    var elem = paragraphArray[i];
    var distInView =
      elem.getBoundingClientRect().top - window.innerHeight + 250;
    if (distInView < 0) {
      elem.classList.add("fade-in");
      elem.style.visibility = "visible";
    } else {
      elem.classList.remove("fade-in");
    }
  }
}
fadeIn();
