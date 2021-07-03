const openHeaderNav = () => {
  const popup = document.querySelector(".menu__library");
  const popupMenu = document.querySelector(".popup__menu");
  const burger = document.querySelector(".burger");
  const openPopup = () => popupMenu.classList.toggle("popup__menu_active");
  const openBurger = () => popupMenu.classList.toggle("popup__menu_active");
  popup.addEventListener("click", openPopup);
  burger.addEventListener("click", openBurger);
};

const toggleSlider = () => {
  const sliderArrowPrev = document.querySelector(".slider__arrow_prev");
  const sliderArrowNext = document.querySelector(".slider__arrow_next");
  const dots = document.querySelectorAll(".slider__btn");
  let slideIndex = 1;
  const showSlides = (n) => {
    const slides = document.querySelectorAll(".slider__block");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" slider__btn_active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slider__btn_active";
  };
  showSlides(slideIndex);
  const plusSlide = () => {
    showSlides((slideIndex += 1));
  };
  const minusSlide = () => {
    showSlides((slideIndex -= 1));
  };
  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      const idx = i + 1;
      currentSlide(idx);
    });
  });
  sliderArrowPrev.addEventListener("click", minusSlide);
  sliderArrowNext.addEventListener("click", plusSlide);
};

const openHiringBlocks = () => {
  const hiringTexts = document.querySelectorAll(".hiring__popup-text");
  const hiringBlocks = document.querySelectorAll(".hiring__block");
  const hiringArrows = document.querySelectorAll(".hiring__block-link");
  function toggleHiringBlocks() {
    this.classList.toggle("hiring__block_active");
    const dataBlock = this.getAttribute("data");
    hiringTexts.forEach((text) => {
      hiringArrows.forEach((arrow) => {
        const dataArrow = arrow.getAttribute("data");
        const dataText = text.getAttribute("data");
        if (dataArrow === dataBlock && dataText === dataBlock) {
          arrow.classList.toggle("hiring__block-link_active");
          text.classList.toggle("hiring__popup-text_active");
        }
      });
    });
  }
  hiringBlocks.forEach((block) => {
    block.addEventListener("click", toggleHiringBlocks);
  });
};

function init() {
  openHeaderNav();
  openHiringBlocks();
  toggleSlider();
}

init();
