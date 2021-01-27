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
    // responsive: [
    //   {
    //     breakpoint: 300,
    //     settings: {
    //       arrows: false
    //     }
    //   },
    // ]
  })

  $('.menu__btn').on('click', function(){
    $('.header__navigation').toggleClass('header__navigation--active')
  });
});