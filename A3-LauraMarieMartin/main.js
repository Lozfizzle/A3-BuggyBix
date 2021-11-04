console.log("A3 is working!")
gsap.registerPlugin(ScrollTrigger);


// home section
// function to begin the gsap timeline animation for the elements in the home section
homeSection()


// click on arrow down button takes user to the next section (the logo marquee section)
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

// banner using swiper JS
// banner uses infinite looping, text swaps out vertically, and changes every 4 seconds. 
const bannerSwiper = new Swiper('.banner-swiper', {
  spaceBetween: 0,
  centeredSlides: true,
  direction: "vertical",
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  }
});




// menu changes on scroll
// 1. scroll down and .banner no longer in view, the navigation bar moves up to fill that space. 
//    at this time the logo gets smaller 
const navBarTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".topbar",
    start: "bottom 35",
    toggleActions: "play none none reset", 
  }
})
navBarTl.to('.topbar .logo', {width: "150px", ease: "power4.out", duration: 1})
navBarTl.to('.topbar', {height: "50px", y: "-35", ease: "power4.out", duration: 0.5}, "=-1")

// 2. when scroll bar hits bottom of the landing div, changes to solid background colour for the rest of the website
const navBarColourTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-marquee",
    start: "top top",
    toggleActions: "play none none reverse", // onEnter: play the tl, onLeaveback: reverse the tl to its original start 
  }
})

// gsap would accept the easing to get a smooth transition on background colour change unless you set it 
// here it is, but using a hex code thats transparent. 
gsap.set('.topbar', {backgroundColor: 'ffffff00'})

// now actually changing it
navBarColourTl.to('.topbar', {backgroundColor: '#ffffff', duration: 1, ease: "power4.out"})




// function. animate home section elements. 
// text content comes in from the side
// the arrow button comes top-down
// the shop button from the bottom-up
function homeSection(){

  const landingTl = new TimelineMax({delay: 2}) /* give it some time for the logo animation */
  landingTl.from(".section-landing .content-hero", {x: 250, duration: 1, opacity: 0})
    .from(".button-down", {y: -30, duration: 1.5, opacity: 0}, "-=0.5" )
    .from(".shop-sustainable", {y:30, duration: 1, opacity: 0}, "-=1")
}





// toggleAction: onEnter. onLeave. onEnterBack. onLeaveBack 
      // default  play    none      none        none
  // actions    play pause resume  reverse  restart reset complete none

//scrub: true
// or give it a number to smooth
//scrub: 4 

// can pin element in place 
// pin: ".topbar"




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
  disableOnInteraction: true,
   // Responsive breakpoints to adjust number of logos that appear on different size screens. 
   // note: its a little buggy, sometimes the loop will pause when resizing the screen
  breakpoints: {
    // when window width is <= 100px 
    100: {
      slidesPerView: 2,
    },
    // when window width is <= 768px 
    768: {
      slidesPerView: 5,
    },
    // when window width is <= 8000px - it was the biggest screen i could come across
    8000: {
      slidesPerView: 5,
    },
  }
});


