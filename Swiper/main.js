console.log("JavaScript is working!")

var testimonialImageSwiper = new Swiper (".testimonial-image-swiper", {
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
        nextEl: '.button-prev',
        prevEl: '.button-next',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
})

var swiperTestimonialText = new Swiper(".testimonial-text-swiper", {
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

 