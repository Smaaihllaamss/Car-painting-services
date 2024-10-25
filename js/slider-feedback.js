const swiper = new Swiper(".swiperFeedback", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "slider",
  spaceBetween: 20,
  slidesPerView: 2,
  slidesPerGroup: 2,
  initialSlide: 1,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Adaptive:
  breakpoints: {
    1440: {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    960: {
      spaceBetween: 18,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    768: {
      spaceBetween: 14,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    0: {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
});
