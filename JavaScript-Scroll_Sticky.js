function closeModal() {
  document.getElementsByClassName("fade-out")
    removeClass();
}
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

//function ourInfo() {
 // alert("Discover U.S. National Park, LLC \ 123 Brooklyn Ave \ New York, NY 10019");
//}

//function showForm() {
//  var popup = document.getElementById("formBtn");
//  popup.classList.toggle("show");

//}

//SECOND MODAL - OPEN CONTACT FORM EMBEDED IN STICKY BUTTON
document.getElementById('.myBtn').addEventListener("click", 
function() {
    document.querySelector('.modal1').style.display = 'flex';
});
document.querySelector('.close1').addEventListener('click',
function() {
    document.querySelector('.modal1').style.display = 'none';
})

function validateForm() {
  var emptFN = document.forms["ContactForm"]["FN"].value;
      if (emptFN == "") {
      //document.forms["Contact"]["FN"].style.backrground = "yellow";
      alert("This field cannot be empty. Please enter the requested information");
      return false;
     }
     var emptLN = document.forms["ContactForm"]["LN"].value;
     if (emptLN == "") {
     //document.forms["Contact"]["LN"].style.backrground = "yellow";
     alert("This field cannot be empty. Please enter the requested information");
     return false;
    }
    var emptP = document.forms["ContactForm"]["P"].value;
     if (emptP == "" | emptP != "[0-9]{3}-[0-9]{3}-[0-9}{4}" ) {
     //document.forms["Contact"]["P"].style.backrground = "yellow";
     alert("Please enter your phone number following this format 123-456-7890.");
     return false;
     }