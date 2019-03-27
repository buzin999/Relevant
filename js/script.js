window.addEventListener('DOMContentLoaded', function () {


var multiItemSlider = (function () {
  return function (selector) {
    /* Slider start */
    let slideIndex = 1, // Параметр текущего слайда
      slider = document.querySelector(selector),
      slides = slider.querySelectorAll('.slider-item'),
      prev = slider.querySelector('.arrow-left'),
      next = slider.querySelector('.arrow-right'),
      dotsWrap = slider.querySelector('.slider-dots'),
      dots = slider.querySelectorAll('.dot');

    showSlides(slideIndex);

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      } else if (n < 1) {
        slideIndex = slides.length;
      }

      slides.forEach((item) => item.style.display = 'none');

      dots.forEach((item) => item.classList.remove('dot-active'));

      slides[slideIndex - 1].style.display = 'flex';
      dots[slideIndex - 1].classList.add('dot-active');
    }

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    function currentSlide(n) {
      showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function () {
      plusSlides(-1);
    });
    next.addEventListener('click', function () {
      plusSlides(1);
    });

    dotsWrap.addEventListener('click', function (event) {
      for (let i = 0; i < dots.length + 1; i++) {
        /* Т.обр. цикл пройдет 4 раза и номер точки в массиве (dots[i-1]) соответствует слайду (currentSlide(i)) */
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
          currentSlide(i);
        }
      }
    });
    /* Slider end */
  }
}());

var slider1 = multiItemSlider('#slider-1');
var slider2 = multiItemSlider('#slider-2');
});