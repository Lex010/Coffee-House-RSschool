const buttonLoadMore = document.querySelector('.button-icon-dark');
const greedUnitForLoad = document.querySelectorAll('.main-greed-unit-cont');
const container = document.querySelector('.container');
buttonLoadMore.addEventListener('click', function() {
    for(let i = 3; i < greedUnitForLoad.length; i++) {
        greedUnitForLoad[i].style.display = 'block';
    }
    if (window.innerWidth <= 380) {   //костыль для костыля
        container.style.gap = '3400px';
    } else {
        container.style.gap = '1200px';
    }                                 //костыль для костыля 
    buttonLoadMore.style.display = 'none';
});
// начало решения с модальными окнами
const modal = document.querySelector('.popup');
const modalContent = document.querySelector('.popup__content');
const modalCloseButton = document.querySelector('.popup__close');
const modalCloseButtonSpan = document.querySelector('.popup__close span');
greedUnitForLoad.forEach(function(i) {  //открытие модального окна
    i.addEventListener('click', function() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    });
});
modal.addEventListener('click', function(i) {       //закрытие модального окна
    if (!modalContent.contains(i.target) || i.target === modalCloseButton || i.target === modalCloseButtonSpan) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});