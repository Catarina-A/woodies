import jquery from 'jquery';
window.$ = jquery

import 'slick-carousel'

$(function(){
  const prevImage = require('./../assets/images/arrow-prev.svg')
  const nextImage = require('./../assets/images/arrow-next.svg')
  $('.slider').slick({
    prevArrow: `<button type="button" class="slick-btn slick-prev"><img src="${prevImage}" alt=""></button>`,
    nextArrow: `<button type="button" class="slick-btn slick-next"><img src="${nextImage}" alt=""></button>`,
    dots: true,
    speed: 500
  })

  $('.menu__btn').on('click', function(){
    $('.header__navigation').toggleClass('header__navigation--active')
  });

  $(".header__menu-item").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор блока с атрибута href
    var id  = $(this).attr('href'),
    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});