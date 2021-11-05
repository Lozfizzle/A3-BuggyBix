console.log("JavaScript is working!")
gsap.registerPlugin(MotionPathPlugin);




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



// benefits section animation 
// when entering this section the heading will animate downwards
// the circle illustrations and text will animate upwards in a canon
// this will happen everytime user enters the section
// const benefitsTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".section-benefits",
//         start: "top bottom",
//         endTrigger: ".section-benefits",
//         end: "top top",
//         markers: true,
//         toggleActions: "play none none restart",
//         //TODO: make sure these togge actions are correct when all together
//     }, 
// })

// benefitsTl.from(".section-benefits h1", {duration: 1, y: -50, opacity: 0,})
// benefitsTl.from(".benefit-column", {duration: 1, y: 30, opacity: 0, stagger: 0.3},"-=0.5")





// the og timeline


// const ingredientsTl = gsap.timeline({
//     scrollTrigger: {
//         trigger: '.ingredients-images',
//         start: 'top top',
//         pin: true,
//         scrub: 1,
//         end: "+=6000" // making the scrub animations take longer
//     },  
// })

// gsap.set('.section-ingredients', {backgroundColor: '#fff4e5'})
// gsap.set('.ingredient-packet', {opacity: 1})
// // gsap.set('.ingredients.content', {y: 0, opacity: 1} )
// // e4d5b7 darker beige

// ingredientsTl.to('.ingredients.content', {y: -50, opacity: 0, ease: "ease-in"})
// ingredientsTl.to('.section-ingredients', {backgroundColor: 'beige', duration: 4, ease: "linear"})
// ingredientsTl.to('.ingredient-packet', {x: '30%', scale: 0.8,})
// ingredientsTl.from('.in-txt1', {y: 100, duration: 4, opacity: 0,})
// ingredientsTl.to('.in-txt1', {y: -100, duration: 4, opacity: 0, delay: 4})
// ingredientsTl.from('.in-txt2', {y: 100, duration: 4, opacity: 0},)
// ingredientsTl.to('.in-txt2', {y: -100, duration: 4, opacity: 0, delay: 4})
// ingredientsTl.from('.in-txt3', {y: 100, duration: 4, opacity: 0},)
// ingredientsTl.to('.in-txt3', {y: -100, duration: 4, opacity: 0, delay: 4})
// ingredientsTl.to('.ingredient-packet', {opacity: 0,}) 
// ingredientsTl.from('.in-txt4', {y: 100, duration: 4, opacity: 0})
// ingredientsTl.to('.in-txt4', {y: -100, duration: 4, opacity: 0, delay: 4})
// ingredientsTl.from('.in-txt5', {y: 100, duration: 4, opacity: 0})
// ingredientsTl.to('.in-txt5', {y: -100, duration: 4, opacity: 0, delay: 4})
// ingredientsTl.from('.in-txt6', {y: 100, duration: 4, opacity: 0})
// ingredientsTl.to('.in-txt6', {y: -100, duration: 4, opacity: 1, delay: 4})
// ingredientsTl.to('.section-ingredients', {backgroundColor: '#ffffff', duration: 4, ease: "linear"})
