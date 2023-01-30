import './sass/main.scss';

import Swiper, { Pagination } from 'swiper';

var swiper = new Swiper(".mySwiper", {
  modules: [Pagination],
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
        el: ".swiper-pagination",
      },
 });
    