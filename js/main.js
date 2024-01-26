var swiper = new Swiper(".swiper", {
   slidesPerView: 3,
   spaceBetween: 20,
   loop: true,

   navigation: {
      nextEl: ".slider__next",
      prevEl: ".slider__prev",
   },

   pagination: {
      el: ".slider__numbs",
      type: "fraction",
   },

   autoplay: {
      delay: 4000,
      disableOnInteraction: false,
   },
   clickable: true,
});
