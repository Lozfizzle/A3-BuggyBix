console.log("yo!")
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);


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
    start: "bottom 35px", // when the bottom of the trigger hits 35px down the screen (i.e. after the height of the banner)
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

// gsap wouldnt accept the easing to get a smooth transition on background colour change unless you set it 
// here it is, but using a hex code thats transparent. 
gsap.set('.topbar', {backgroundColor: 'ffffff00'})

// now actually changing it
navBarColourTl.to('.topbar', {backgroundColor: '#ffffff', duration: 1, ease: "power4.out"})




// function. animate home section elements. 
// text content comes in from the side
// the arrow button comes top-down
// the shop button from the bottom-up
function homeSection(){

  const landingTl = new TimelineMax({delay: 2}) /* give it some time, wait until after the logo animation is done so user isnt looking in too many directions all at once */
  landingTl.from("#logo-mobile", {y: 50, ease: "power3.out", duration: 2}, "-=1.5")
    .from(".section-landing .content-hero", {x: 250, duration: 1, opacity: 0})
    .from(".button-down", {y: -30, duration: 1.5, opacity: 0}, "-=0.5" )
    .from(".shop-sustainable", {y:30, duration: 1, opacity: 0}, "-=1")
}

//================================ logo marquee ================================
// logo marquee
// using swiper js
// logo marquee has infinite loop, and starts automatically
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
   // Responsive breakpoints to adjust number of logos that appear on different size screens so they are a good size on various screen sizes 
   // note: its a little buggy, the autoplay will pause when crossing breakpoints refreshing the page restarts the autoplay
   // adding ' autoplay: true ' seems to make the autoplay continue to work when resizing page without refresh
  breakpoints: {
    // when window width is <= 100px
    // so between screen size 100 - 768 it will show 2 logos at a time
    100: {
      slidesPerView: 2,
      autoplay: true, 
     
    },
    // when window width is <= 768px 
    768: {
      slidesPerView: 5,
      // autoplay: true // and then sometimes adding this makes it stop the autoplay alltogether.
    },
    // when window width is <= 8000px - it was the biggest screen i could come across
    8000: {
      slidesPerView: 5,
    },
  }
});



//================================ ingredients ================================
// ingredients and benefits section
// setting up the scrolltrigger to begin 
const ingredientsTl = gsap.timeline({
  scrollTrigger: {
      trigger: '.ingredients-images',
      start: 'top top',
      pin: true,
      scrub: 1,
      end: "+=10000" // making the scrub animations take longer
  },
})

// i know this doesnt look amazing on anything less than a desktop screen
// but i couldnt figure out the gsap timeline breakpoints to trigger certain animations for different screensizes
// next time

// setting the background colour so it makes the transition to a different colour in the animation nice
gsap.set('.section-ingredients', { backgroundColor: '#fff4e5' })
gsap.set('.ingredient-packet', { opacity: 1,})

// e4d5b7 darker beige

// the animations for the packet to move to the side
// and the text to appear one by one 
ingredientsTl.to('.ingredients.content', { y: -50, opacity: 0, ease: "ease-in" })
ingredientsTl.to('.section-ingredients', { backgroundColor: '#e4d5b7', duration: 4, ease: "linear" })
ingredientsTl.to('.ingredient-packet', {x: "35%", y: "15vh", scale: 0.8, ease: "easeIn" })
ingredientsTl.from('.in-txt1', { y: 100, duration: 4, opacity: 0, })
ingredientsTl.to('.in-txt1', { y: -100, duration: 4, opacity: 0, delay: 4 })
ingredientsTl.from('.in-txt2', { y: 100, duration: 4, opacity: 0 },)
ingredientsTl.to('.in-txt2', { y: -100, duration: 4, opacity: 0, delay: 4 })
ingredientsTl.from('.in-txt3', { y: 100, duration: 4, opacity: 0 },)
ingredientsTl.to('.in-txt3', { y: -100, duration: 4, opacity: 0, delay: 4 })
ingredientsTl.to('.ingredient-packet', { opacity: 0, })
ingredientsTl.from('.in-txt4', { y: 100, duration: 4, opacity: 0 })
ingredientsTl.to('.in-txt4', { y: -100, duration: 4, opacity: 0, delay: 4 })
ingredientsTl.from('.in-txt5', { y: 100, duration: 4, opacity: 0 })
ingredientsTl.to('.in-txt5', { y: -100, duration: 4, opacity: 0, delay: 4 })

// animating a bug later
// this is the path it will take 
var flightpath = [
  { x: 100, y: -20 },
  { x: 300, y: 10 },
  { x: 500, y: 100 },
  { x: 750, y: -100 },
  { x: 350, y: -50 },
  { x: 600, y: 100 },
  { x: 800, y: 0 },
  { x: 2000, y: 100 }
]

// now the animation for the bug
// on the same timeline as the rest of the section
ingredientsTl.from('.cute-bug', {opacity: 0})
ingredientsTl.to('.cute-bug', {
  opacity: 1,
  motionPath: {
      path: flightpath, // this is the path of the coordinates we set above
      autoRotate: true, // the bug will turn upside down when it does a loop =)
      curviness: 1.5, // and it will curve on the path, not just turn at 90 degree angles
  },
  duration: 10, // i dont think this duration made any difference =/
  ease: "power1.inOut",
},
)

// continuing on the rest of the animation on the timeline
// setting the last bit of text. it will appear at the same time as the flying bug
ingredientsTl.from('.in-txt6', { y: 600, duration: 4, opacity: 0 }, "-=4")
ingredientsTl.to('.in-txt6', { y: -100, duration: 4, opacity: 1},)
ingredientsTl.to('.section-ingredients', { backgroundColor: '#ffffff', duration: 4, ease: "linear" })



//================================ benefits ================================

// benefits section animation 
// when entering this section the heading will animate downwards
// the circle illustrations and text will animate upwards in a canon
// this will happen everytime user enters the section. OnEnter, onEnterBack, onLeaveBack
const benefitsTl = gsap.timeline({
  scrollTrigger: {
      trigger: ".section-benefits",
      start: "top 90%",
      toggleActions: "play none restart restart",
  }, 
})

benefitsTl.from(".section-benefits h1", {duration: 1, y: -50, opacity: 0, delay: 1})
benefitsTl.from(".benefit-column", {duration: 1, y: 30, opacity: 0, stagger: 0.3,},"-=0.5")


//================================ testimonials ================================
// testimonials from customers
// this is two swipers next to each other that are connected - one shows the image and the other the accompnyng text
const testimonialImageSwiper = new Swiper (".testimonial-image-swiper", {
  spaceBetween: 50,
  slidesPerView: "auto",
  speed: 1000,
  // loop: true, unfortunately i couldnt get the infinite loop working in combination with controlling two swipers at the same time. 
  centeredSlides: true, 
  navigation: {
      // note: I've swapped what controls the next/prev buttons as I changed the directions of this swiper to 'right to left'
      // as i wanted the images off to the left side of the screen
      // nextEl: '.swiper-button-next',
      // prevEl: '.swiper-button-prev',
      nextEl: '.button-next',
      prevEl: '.button-prev',  
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
})

const swiperTestimonialText = new Swiper(".testimonial-text-swiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  effect: "fade", //so the text faces in and out instead of moving like regular swiper 
  fadeEffect: { 
      crossFade: true 
  },
  // loop: true, 
  allowTouchMove: false,    
});

// one swiper also controls the other swiper, so image and text are in sync
// clicking to next slide on one swiper will also change the slide of the other swiper
testimonialImageSwiper.controller.control = swiperTestimonialText;
swiperTestimonialText.controller.control = testimonialImageSwiper;




//================================ submit form ================================

// subscribe gsap animation
// when top of signup section hits 90% down the screen play the tl
// onLeaveBack - reset the tl, so when you scroll back down the animation plays again
const subscribeTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".sign-up",
    start: "top 90%",
    toggleActions: "play none none reset", 
  },
})

subscribeTl.from('.sign-up h1', {y: 50, opacity: 0})
subscribeTl.from('.sign-up p', {y: 30, opacity:0})
subscribeTl.from('.form sl-input', {x: -50, opacity: 0, duration: 1})
subscribeTl.from('.form sl-button', {x: 30, opacity: 0}, '-=1')



// subscribe submit form
// i know nothing about server side programming
// but this ouputs the email submitted in the sl-input to the console =)
// with info on how to do this from here: 
// https://shoelace.style/components/form
// https://developer.mozilla.org/en-US/docs/Web/API/FormData/get 
// the formData returns the ' email ' value, (given the sl-input name="email" see html line 292 )
// TODO: line 292 
const subscribeForm = document.querySelector('.input-validation-required')

subscribeForm.addEventListener('sl-submit', event => {
  const formData = event.detail.formData
  console.log(formData.get("email"))
  
})

// toggleAction: onEnter. onLeave. onEnterBack. onLeaveBack 
      // default  play    none      none        none
  // actions    play pause resume  reverse  restart reset complete none

//scrub: true
// or give it a number to smooth
//scrub: 4 

// can pin element in place 
// pin: ".topbar"


