console.log("JavaScript is working!")


// what is the best way of structuring this. this seems really shit. 
// can i do the scroll trigger thing, and then tell it to run a function onEnter, on Leave etc
// and then put the timeline in the function?? 
// i have no idea what im doing
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
    endTrigger: ".why-insects",
    end: "top: top",
    markers: true,
    pin: ".ingredient-packet",
    onEnter: () => {
        gsap.to('.ingredient-packet', {
            x: 300,
            duration: 3
        })
    }

})




ScrollTrigger.create({
    trigger: ".section-benefits",
    start: "top 20%",
    endTrigger: ".why-insects",
    end: "top: top",
    markers: true,
})

