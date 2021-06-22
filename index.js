const popup = document.querySelector('.popup')
const popupMenu = document.querySelector('.popup__menu')
const featuresTitle = document.querySelector('.features__desc')
const featuresText = document.querySelector('.features__bottom-text')
const higingArrow = document.querySelectorAll('.hiring__arrow')
const hiringFront = document.querySelector('.hiring__block-group_front')
const hiringCommunity = document.querySelector('.hiring__block-group_community')
const hiringDesigner = document.querySelector('.hiring__block-group_designer')
const hiringFrontText = document.querySelector('.hiring__popup-text_front')
const hiringCommunityText = document.querySelector('.hiring__popup-text_community')
const hiringDesignerText = document.querySelector('.hiring__popup-text_designer')

const openFrontText = () => hiringFrontText.classList.toggle('active');
const openDesignerText = () => hiringDesignerText.classList.toggle('active');
const openCommunityText = () => hiringCommunityText.classList.toggle('active');

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


const openFeaturesText = () => featuresText.classList.toggle('active')
const openPopup = () => popupMenu.classList.toggle('popup_active')

popup.addEventListener('click', openPopup)
featuresTitle.addEventListener('click', openFeaturesText)
hiringFront.addEventListener('click', openFrontText)
hiringDesigner.addEventListener('click', openDesignerText)
hiringCommunity.addEventListener('click', openCommunityText)





