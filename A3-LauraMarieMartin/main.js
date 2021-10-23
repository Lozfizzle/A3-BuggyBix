console.log("A3 is working!")
gsap.registerPlugin(ScrollTrigger);

// clicking the down arrow button takes the user to the next section
const downArrowBtn = document.querySelector('#circle-with-button')
downArrowBtn.addEventListener('click', () => {
  document.querySelector('.section-marquee').scrollIntoView()
})

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

gsap.from(".section-landing .content", {
  x: 250,
  duration: 1,
  opacity: 0
})

gsap.to(".topbar", {
  duration: 5, 
  scrollTrigger: {
    trigger: ".topbar",
    start: "bottom 90",
    end: 9999,
    markers: true,
    toggleClass: "scrolled"
  }
})







// logo marquee
const logoSwiper = new Swiper('.logo-swiper', {
  spaceBetween: 60,
  centeredSlides: true,
  speed: 7500,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: 5,
  allowTouchMove: false,
  disableOnInteraction: true
});


