console.log("JavaScript is working!")



ScrollTrigger.create({
    trigger: ".ingredients-images",
    start: "top 20%",
    endTrigger: ".ingredients-images",
    end: "top 40%",
    markers: {
            startColor: "purple",
            endColor: "fuscia",
            fontSize: "1.5em"
    },
    onEnter: () => {
        gsap.to('.section-ingredients', {
            duration: 1.5,
            backgroundColor: '#EB8B31' 
        })
        gsap.to('.ingredients.content', {
            y: -50,
            opacity: 0,
            duration: 1.5,
        },)
    },
    onLeaveBack: () => {
        gsap.to('.section-ingredients', {
            backgroundColor: "#fff"
        }) 
        gsap.to('.ingredients.content', {
            y: 0,
            opacity: 1,
            duration: 0.7,
        }, "-=0.5")
    },
})

ScrollTrigger.create({
    trigger: ".ingredients-images",
    start: "top 20%",
    endTrigger: ".why-insects",
    end: "top: top",
    markers: true,
    pin: ".ingredient-packet",

})




// let tl = gsap.timeline()
// tl.to(".ingredients-images", {
//     scrollTrigger: {
//         trigger: ".ingredients-images",
//         start: "top 200",
//         endTrigger: "bottom",
//         end: "bottom 400",
//         markers: {
//             startColor: "purple",
//             endColor: "fuscia",
//             fontSize: "1.5em"
//             },
//     },
//     backgroundColor: "#EB8B31",
//     ease: "expo.out",
//     duration: 5,
//     scrub: true,
// })


