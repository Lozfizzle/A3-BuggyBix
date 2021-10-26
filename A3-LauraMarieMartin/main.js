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




// menu animation on scroll
// 1. scroll down and .banner no longer in view, the navigation bar moves up to fill that space. 
//    at this time the logo gets smaller 
// 2. when scroll bar hits bottom of the landing div, changes to solid background colour for the rest of the website
// 
// toggle the class with these properties in css. 

var tl = gsap.timeline()
tl.to(".topbar", {
    scrollTrigger: {
      trigger: ".topbar",
      start: "bottom 90",
      endTrigger: ".topbar",
      end: "bottom 400", //TODO: not sure how else to just get it to not end??? 9999 added padding to the bottom?
      // toggleClass: "topbar-scrolled",
      toggleActions: "play none none reverse",
      
      scrub: 0.3,
      markers: {
        startColor: "purple",
        endColor: "fuscia",
        fontSize: "1.5em"
        },
    },
    // duration: 1, //TODO: not sure how to get this smooth???. IT doesnt seeem to listen to duration?? 
    height: "40px", 
    y: "-30",
    ease: Power4.easeIn,
  });
tl.to(".topbar .logo", {
  width: "150px",
  duration: 1, // duration doesnt seem to make a difference?? or ease. 
  ease: Power4.easeIn,
  scrollTrigger: {
    trigger: ".topbar",
    start: "bottom 90",
    endTrigger: ".topbar",
    end: "bottom 400",
    toggleActions: "play none none reverse",
    // scrub: 0.1,
  }
})

// function. animate home section elements. 
function homeSection(){
  console.log("homesection")

  const tl = new TimelineMax({delay: 0.5})
  tl.from(".section-landing .content-hero", {x: 250, duration: 1, opacity: 0})
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
  disableOnInteraction: true
});


