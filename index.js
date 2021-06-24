const popup = document.querySelector('.popup')
const popupMenu = document.querySelector('.popup__menu')
const featuresTitle = document.querySelector('.features__bottom-title')
const featuresText = document.querySelector('.features__bottom-text')
const hiringFront = document.querySelector('.hiring__block_front')
const hiringCommunity = document.querySelector('.hiring__block_community')
const hiringDesigner = document.querySelector('.hiring__block_designer')
const hiringFrontText = document.querySelector('.hiring__popup-text_front')
const hiringCommunityText = document.querySelector('.hiring__popup-text_community')
const hiringDesignerText = document.querySelector('.hiring__popup-text_designer')
const burger = document.querySelector('.burger')
const arrowFront = hiringFront.querySelector('.hiring__block-link_front')
const arrowCommunity = hiringCommunity.querySelector('.hiring__block-link_community')
const arrowDesigner = hiringDesigner.querySelector('.hiring__block-link_designer')

function openHeaderNav() {
  const openPopup = () => popupMenu.classList.toggle('popup__menu_active')
  const openBurger = () => popupMenu.classList.toggle('popup__menu_active');
  popup.addEventListener('click', openPopup)
  burger.addEventListener('click', openBurger)
}
openHeaderNav()

function openHiringInfo() {
  function openFrontText() {
    hiringFrontText.classList.toggle('hiring__popup-text_active');
    arrowFront.classList.toggle('hiring__block-link_active'); hiringFront.classList.toggle('hiring__block_active')
  }
  function openDesignerText() {
    hiringDesignerText.classList.toggle('hiring__popup-text_active');
    arrowDesigner.classList.toggle('hiring__block-link_active'); hiringDesigner.classList.toggle('hiring__block_active')
  }
  function openCommunityText() {
    hiringCommunityText.classList.toggle('hiring__popup-text_active');
    arrowCommunity.classList.toggle('hiring__block-link_active'); hiringCommunity.classList.toggle('hiring__block_active')
  }
  hiringFront.addEventListener('click', openFrontText)
  hiringDesigner.addEventListener('click', openDesignerText)
  hiringCommunity.addEventListener('click', openCommunityText)
}
openHiringInfo()

function openFeaturesInfo() {
  const toggleFeaturesText = () => featuresText.classList.toggle('features_active')
  featuresTitle.addEventListener('click', toggleFeaturesText)
}
openFeaturesInfo()

let slideIndex = 1;
showSlides(slideIndex);
const plusSlide = () => { showSlides(slideIndex += 1); }
const minusSlide = () => { showSlides(slideIndex -= 1); }
const currentSlide = (n) => { showSlides(slideIndex = n); }
function showSlides(n) {
  let slides = document.getElementsByClassName("slider__block");
  let dots = document.getElementsByClassName("slider__btn");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" slider__btn_active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " slider__btn_active";
}