const burgerButton = document.querySelector('.button-icon-burger'); /* кнопка бургер */
const burgerLines = document.querySelectorAll('.button-icon-burger-line'); /* линии в кнопке бургер */
const burgerMenu = document.querySelector('.burger-menu-cont'); /* меню открывающиеся по нажатию на бургер  */
const burgerMenuItems = document.querySelectorAll('.burger-menu-txt'); /* ссылки в бургер меню  */

burgerButton.addEventListener('click', function() {
    burgerButton.classList.toggle('burger-open');
    burgerMenu.style.left = burgerButton.classList.contains('burger-open') ? '0' : '100%';  
});

burgerMenuItems.forEach(function(item) {
    item.addEventListener('click', function() {
        burgerButton.classList.remove('burger-open');
        burgerMenu.style.left = '100%';
    });
});
// конец решения по бургер меню
const leftButton = document.querySelector('.button-left'); /* левая кнопка  */
const rightButton = document.querySelector('.button-right'); /* правая кнопка */
const handChangeImg = (i) => {
    const activeImg = document.querySelector('[data-active]');
    const allSlides = [...document.querySelectorAll('.slider-cont-img')];
    const currentIndex = allSlides.indexOf(activeImg);
    let newIndex = currentIndex + i;
    if(newIndex < 0) {
        newIndex = allSlides.length - 1;
    }
    if(newIndex >= allSlides.length) {
        newIndex = 0;
    }
    // анимация полоско с низу
    const controls = document.querySelectorAll('.с');
    controls.forEach(control => control.classList.remove('active'));
    controls[newIndex].classList.add('active');
    // анимация полоско с низу
    allSlides[newIndex].dataset.active = true;
    delete activeImg.dataset.active;
};
leftButton.addEventListener('click', () => handChangeImg(-1)); /* клик в лево  */
rightButton.addEventListener('click', () => handChangeImg(1)); /* клик в право  */
setInterval(() => handChangeImg(1), 5000);
//начало настройки свайпа
const carouselContainer = document.querySelector('.fav-coffee-slide-cont-main');
let touchStartX = 0;
let touchEndX = 0;
carouselContainer.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
}); // Точка старта
carouselContainer.addEventListener('touchmove', (event) => {
    touchEndX = event.touches[0].clientX;
}); // Считаем движение по оси Х от точки старта
carouselContainer.addEventListener('touchend', () => {
    const touchDiff = touchEndX - touchStartX;
    const swipeThreshold = 50;
    if (touchDiff > swipeThreshold) {
        // Свайп вправо, переключаем влево
        handChangeImg(-1);
    } else if (touchDiff < -swipeThreshold) {
        // Свайп влево, переключаем вправо
        handChangeImg(1);
    }
     // Сбросим начальные и конечные координаты
     touchStartX = 0;
     touchEndX = 0;
    });
//конец настройки свайпа