import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

import $ from 'jquery'
import gsap from 'gsap'

$(document).ready(function() {
    $(".accordion > .accordion__button").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".accordion__content")
                .slideUp(200);
        } else {
            $(".accordion > .accordion__button").removeClass("active");
            $(this).addClass("active");
            $(".accordion__content").slideUp(200);
            $(this)
                .siblings(".accordion__content")
                .slideDown(200);
        }
    });
});

const headerButton =
  document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

// document.addEventListener('scroll', function () {
//     const sticky = document.querySelector('.choose__header');
//     const container = document.querySelector('.choose__container');
//     const containerRect = container.getBoundingClientRect();
//     const stopPosition = containerRect.bottom - 200;

//     console.log("window.scrollY", window.scrollY);
//     console.log(containerRect.bottom);
//     if (stopPosition <= window.innerHeight) {
//         sticky.style.position = 'absolute';
//         sticky.style.top = 'auto';
//         sticky.style.bottom = containerRect.bottom - 200;
//         sticky.style.width = '100%';
//     } else {
//         sticky.style.position = '-webkit-sticky';
//         sticky.style.position = 'sticky';
//         sticky.style.top = '0px';
//         sticky.style.width = '100%';
//         sticky.style.bottom = 'auto';
//     }
// });
