
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

/*The middle "Contact Us" button functionality */
const contactUsBtn = document.querySelector('.cta-btn');
contactUsBtn.addEventListener('click', function() {
    window.location.href = 'contact_us.html';
});


/* Services array */

const services = [
{
    title: "Company Registration",
    description: "We help you start your business easily.",
    image: "images/registration_card.jpg",
    link: "registration.html"
},

{
    title: "Bookkeeping",
    description: "Keep your finances organized and accurate.",
    image: "images/bookkeeping.jpg",
    link: "Bookkeeping.html"
},

{
    title: "Tax Compliance",
    description: "Stay compliant with tax laws.",
    image: "images/tax_card.jpg",
    link: "Tax.html"
},

{
    title: "HR Management",
    description: "Manage your team effectively.",
    image: "images/hr_card.jpg",
    link: "HR.html"
},


{    title: "Real Estate Services",
    description: "Comprehensive real estate services.",
    image: "images/real_estate.jpg",
    link: "RealEstate.html"
},

{
    title: "Virtual Assistance",
    description: "Outsource administrative tasks with our virtual assistant.",
    image: "images/virtual_assistant.jpg",
    link: "VirtualAssistant.html"
},

{
    title: "Visa and Travel Support",
    description: "Assist with visa applications and travel arrangements.",
    image: "images/visa_travel.jpg",
    link: "VisaTravel.html"
},

{
    title: "Event Planning",
    description: "Plan and execute successful events for your business.",
    image: "images/event_planning.jpg",
    link: "EventPlanning.html"
}

]

const servicesContainer = document.getElementById("servicesContainer");

services.forEach(service => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${service.image}" alt="${service.title}">
        <h3>${service.title}</h3>
        <p>${service.description}</p>
        <a href="${service.link}" class="btn">Learn More</a>
    `;

    servicesContainer.appendChild(card);
});



/* Slideshow functionality */

const slides = [
 {
    image: "images/slide11.webp",
    alt_text: "Business team working together"

 },

 {
    image: "images/slide22.webp",
    alt_text: "Files with paper work"

 },

 {
    image: "images/slide33.webp",
    alt_text: "Tax forms and a calculator on a desk"

 },


 {
    image: "images/slide44.webp",
    alt_text: "virtual assistant sitting at a desk with a computer and headset"

 },

 {
    image: "images/slide55.webp",
    alt_text: "Picture of a real estate property with a For Sale sign in front"

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
slideshow.innerHTML = `
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
` + slidesHTML;;
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

let interval = setInterval(nextSlide, 3000);

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    clearInterval(interval);
  } else {
    interval = setInterval(nextSlide, 3000);
  }
});

function nextSlide() {
  slideIndex++;
  showSlides(slideIndex);
}


















