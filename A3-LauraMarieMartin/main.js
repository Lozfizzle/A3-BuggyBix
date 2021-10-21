console.log("A3 is working!")
gsap.registerPlugin(ScrollTrigger);


// responsive menu
// get the hamburger icon, and the menu-div
const hamburgerBtn = document.querySelector(".hamburger")
const primaryMenu = document.querySelector('.primary-menu')

// on click of hamburger icon, toggle add/remove the class to show/hide the menu, and animate the hamburger into an x/vice-versa
hamburgerBtn.addEventListener('click', () => {
  primaryMenu.classList.toggle('show')
  hamburgerBtn.classList.toggle('is-active')
})


// menu animation on scroll

// 1. when beginning to scroll, logo gets smaller
// 2. when scroll bar hits bottom of the landing div, changes to solid background colour
// 3. 



gsap.to(".topbar", {
  scrollTrigger: {
    trigger: ".topbar",
    start: "500",
  },
  y: '-35',
  backgroundColor: '#FFF',
  duration: '1',
});


// logo marquee
const logoSwiper = new Swiper('.logo-swiper', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 6000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: 5,
  allowTouchMove: false,
  disableOnInteraction: true
});


