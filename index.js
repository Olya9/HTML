const popup = document.querySelector('.popup')
const popupMenu = document.querySelector('.popup__menu')
const openPopup = () => popupMenu.classList.toggle('popup_active')
popup.addEventListener('click', openPopup)
