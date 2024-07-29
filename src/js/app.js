import * as functions from "./modules/functions.js";
import $ from 'jquery'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

functions.isWebp();
gsap.registerPlugin(ScrollTrigger);

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();


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

gsap.utils.toArray(".form").forEach(el => {
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "center center",
          markers: false,
          scrub: false,
      }
  })
  tl.add('start')
      .fromTo(".form__content", {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, 'start')
})

gsap.utils.toArray(".smi").forEach(el => {
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "center center",
          markers: false,
          scrub: false,
      }
  })
  tl.add('start')
      .fromTo(".smi__container", {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, 'start')
})

gsap.utils.toArray(".support").forEach(el => {
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "center center",
          markers: false,
          scrub: false,
      }
  })
  tl.add('start')
      .fromTo(".support__container", {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, 'start')
})

gsap.utils.toArray(".review").forEach(el => {
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "center center",
          markers: false,
          scrub: false,
      }
  })
  tl.add('start')
      .fromTo(".review__container", {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, 'start')
})

gsap.utils.toArray(".blog").forEach(el => {
  const tl = gsap.timeline({
      scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "center center",
          markers: false,
          scrub: false,
      }
  })
  tl.add('start')
      .fromTo(".blog__container", {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1
      }, 'start')
})