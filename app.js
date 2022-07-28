let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function submitForm() {
  alert("Thanks! You are signed up to our newsletter! You can unsubscribe at any time.");
}

function showtatooine() {
  document.getElementById("tatooine")
    .style.display = "block";
}

function hidetatooine() {
  document.getElementById("tatooine")
    .style.display = "none";
}

function shownaboo() {
  document.getElementById("naboo")
    .style.display = "block";
}

function hidenaboo() {
  document.getElementById("naboo")
    .style.display = "none";
}

function showstar() {
  document.getElementById("star")
    .style.display = "block";
}

function hidestar() {
  document.getElementById("star")
    .style.display = "none";
}

function showendor() {
  document.getElementById("endor")
    .style.display = "block";
}

function hideendor() {
  document.getElementById("endor")
    .style.display = "none";
}

function showcor() {
  document.getElementById("cor")
    .style.display = "block";
}

function hidecor() {
  document.getElementById("cor")
    .style.display = "none";
}