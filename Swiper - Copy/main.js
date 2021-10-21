console.log("JavaScript is working!")

let swiperTestimonialImage = new Swiper(".swiper.mySwiper1", {
    slidesPerView: "auto",
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    
});

let swiperTestimonialText = new Swiper(".swiper.mySwiper2", {
    slidesPerView: "1",
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    // effect: 'fade',
    
});

swiperTestimonialImage.controller.control = swiperTestimonialText;
swiperTestimonialText.controller.control = swiperTestimonialImage;

