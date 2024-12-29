var swiper = new Swiper("#heroSwiper", {
  effect: "fade",
  navigation: {
    nextEl: "#next-slide",
    prevEl: "#prev-slide",
  },
  pagination: {
    el: "#hero-swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
});

var swiper = new Swiper("#keyHighlightSwiper", {
  slidesPerView: 4,
  keyboard: true,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: "#next-highlight",
    prevEl: "#prev-highlight",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var interiorSwiper = new Swiper("#interiorSwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  autoplay: true,
  navigation: {
    nextEl: "#next-interior-slide",
    prevEl: "#prev-interior-slide",
  },
  pagination: {
    el: "#interior-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var exteriorSwiper = new Swiper("#exteriorSwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  autoplay: true,
  navigation: {
    nextEl: "#next-exterior-slide",
    prevEl: "#prev-exterior-slide",
  },
  pagination: {
    el: "#exterior-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper("#pressReleaseSwiper", {
  slidesPerView: 3.5,
  keyboard: true,
  spaceBetween: 30,
  autoplay: true,
  loop: true,
  navigation: {
    nextEl: "#next-pr",
    prevEl: "#prev-pr",
  },
  pagination: {
    el: "#press-release-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
