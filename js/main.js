const menuBtn = document.querySelector(".menu-btn");
const navMenuTop = document.querySelector(".sm-dropdown-menu");
const menuBtnClose = document.querySelector(".menu-close-btn");

menuBtn.onclick = () => {
  console.log("called");
  navMenuTop.classList.toggle("hidden");
  navMenuTop.classList.toggle("sm-dropdown-menu-closing-animation");
  navMenuTop.classList.toggle("sm-dropdown-menu-animation");
};

menuBtnClose.onclick = () => {
  console.log("called");
  navMenuTop.classList.toggle("sm-dropdown-menu-animation");
  navMenuTop.classList.toggle("sm-dropdown-menu-closing-animation");
  setTimeout(() => {
    navMenuTop.classList.toggle("hidden");
  }, 490);
};

//Swipper JS

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper2", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    425: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 50,
    },
  },
});
