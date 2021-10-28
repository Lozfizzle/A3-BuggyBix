console.log("JavaScript is working!")


// what is the best way of structuring this. this seems really shit. 
// can i do the scroll trigger thing, and then tell it to run a function onEnter, on Leave etc
// and then put the timeline in the function?? 
// i have no idea what im doing
/*
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

// what im trying to do, is pin the packet, as the text comes up on the side

ScrollTrigger.create({
    trigger: ".ingredients-images",
    start: "top 20%",
    endTrigger: ".insects-images",
    end: "top: top",
    markers: true,
    pin: ".ingredient-packet",
    onEnter: () => {
        gsap.to('.ingredient-packet', {
            x: 270,
            duration: 1,
            ease: "ease-in",
            transform: "scale(0.75)",
        })
    },
    onEnterBack: () => {
        gsap.to('.ingredient-packet', {
            x: 0,
            duration: 1,
        })
    },
})



// section benefits animate upwards
// TODO: the timing of this as it scrolls into view on the screen.
ScrollTrigger.create({
    trigger: ".section-benefits",
    start: "top bottom",
    endTrigger: ".why-insects",
    end: "top top",
    markers: true,
    onEnter: () => {
        gsap.from(".benefit-column", {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2
        })
        gsap.from(".section-benefits h1", {
            duration: 1,
            y: -50,
            opacity: 0,
        })
    }
    
})

*/

const ingredientsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.ingredients-images',
        start: 'top top',
        pin: true,
        scrub: 1
    }
})

ingredientsTl.to('.ingredient-packet', {x: '30%', scale: 0.8})
ingredientsTl.from('.in-txt1', {y: 100, duration: 4, opacity: 0})
ingredientsTl.to('.in-txt1', {y: -100, duration: 4, opacity: 0, delay: 4})
ingredientsTl.from('.in-txt2', {y: 100, duration: 4, opacity: 0})
ingredientsTl.to('.in-txt2', {y: -100, duration: 4, opacity: 0, delay: 4})
