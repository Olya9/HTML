const popup = document.querySelector('.popup')
const popupMenu = document.querySelector('.popup__menu')
const featuresTitle = document.querySelector('.features__desc')
const featuresText = document.querySelector('.features__bottom-text')

let slideIndex = 1;
showSlides(slideIndex);
const plusSlide = () => { showSlides(slideIndex += 1); }
const minusSlide = () => { showSlides(slideIndex -= 1); }
const currentSlide = (n) => { showSlides(slideIndex = n); }
function showSlides(n) {
    let slides = document.getElementsByClassName("trusted__block");
    let dots = document.getElementsByClassName("trusted__slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" trusted__slide_active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " trusted__slide_active";
}

const openFeaturesText = () => featuresText.classList.toggle('active')
const openPopup = () => popupMenu.classList.toggle('popup_active')

popup.addEventListener('click', openPopup)
featuresTitle.addEventListener('click', openFeaturesText)





