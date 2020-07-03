const width = window.innerWidth;
let slidesPerView;

if (width > 1200) {
  slidesPerView = 4;
} else if (width > 700) {
  slidesPerView = 2;
} else {
  slidesPerView = 1;
}

export const swiper = new Swiper(".swiper-container", {
  slidesPerView,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.onresize = () => {
  const widthOfWindow = window.innerWidth;
  if (widthOfWindow > 1200) {
    swiper.params.slidesPerView = 4;
  } else if (widthOfWindow > 700) {
    swiper.params.slidesPerView = 2;
  } else {
    swiper.params.slidesPerView = 1;
  }
  swiper.update();
};
