/* Object slide-in from the left */

let leftObject = document.querySelectorAll(".leftObject");
console.log(leftObject);
window.addEventListener("scroll", slideInLeft);
function slideInLeft() {
  for (var i = 0; i < leftObject.length; i++) {
    var elem = leftObject[i];
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 75;
    if (distInView < 0) {
      elem.classList.add("slide-in-left");
      elem.style.visibility = "visible";
    } else {
      elem.classList.remove("slide-in-left");
    }
  }
}
slideInLeft();

/* Object slide-in from the right */

let rightObject = document.querySelectorAll(".rightObject");
console.log(rightObject);
window.addEventListener("scroll", slideInRight);
function slideInRight() {
  for (var i = 0; i < rightObject.length; i++) {
    var elem = rightObject[i];
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 75;
    if (distInView < 0) {
      elem.classList.add("slide-in-right");
      elem.style.visibility = "visible";
    } else {
      elem.classList.remove("slide-in-right");
    }
  }
}
slideInRight();
