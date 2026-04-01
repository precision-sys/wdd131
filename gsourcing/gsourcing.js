
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

window.addEventListener("resize", function() {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active')
    }});




const slides = [
 {
    image: "images/slide1.jpg",
    alt_text: "Business team working together"

 },

 {
    image: "images/slide2.jpg",
    alt_text: "Files with paper work"

 },

 {
    image: "images/slide3.jpg",
    alt_text: "Tax forms and a calculator on a desk"

 },

 {
    image: "images/slide4.jpg",
    alt_text: "Hand holding a pen and signing a contract"

 },

 {
    image: "images/slide5.jpg",
    alt_text: "A laptop with accounting documents"

 }


]

const slideshow = document.getElementsByClassName("slideshow-container")[0];
const dotsContainer = document.getElementsByClassName("dots")[0];  

let slidesHTML = "";
let dotsHTML = "";

slides.forEach((slide, index) => {
    slidesHTML += `
        <div class="mySlides fade">
            <img src="${slide.image}" alt="${slide.alt_text}">
        </div>
    `;
    dotsHTML += `
        <span class="dot" onclick="currentSlide(${index + 1})"></span>
    `;
});
slideshow.innerHTML += slidesHTML;
dotsContainer.innerHTML = dotsHTML;


let slideIndex = 1;
window.onload = function() {
    showSlides(slideIndex);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1
  if (n < 1) slideIndex = slides.length

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}



showSlides(slideIndex); 

setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 3000);














