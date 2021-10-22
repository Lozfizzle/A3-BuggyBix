console.log("JavaScript is working!")

// let swiperTestimonialImage = new Swiper(".swiper.mySwiper1", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     keyboard: {
//         enabled: true,
//         onlyInViewport: false,
//     },
    
// });



var testimonialImageSwiper = new Swiper (".testimonial-image-swiper", {
    spaceBetween: 0,
    slidesPerView: "1.5",
    loop: true, 
    centeredSlides: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    speed: 1000,   
    
})

var swiperTestimonialText = new Swiper(".testimonial-text-swiper", {
    slidesPerView: "1",
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: { 
        crossFade: true 
    },
    loop: false,
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    allowTouchMove: false,
    // keyboard: {
    //     enabled: true,
    //     onlyInViewport: false,
    // },

    
    
});

// testimonialImageSwiper.controller.control = swiperTestimonialText;
// swiperTestimonialText.controller.control = testimonialImageSwiper;