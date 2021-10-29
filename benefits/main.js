console.log("JavaScript is working!")
// TODO: 3 shoelace componenets have to be 3 different types. button, icon, something else! 


const ingredientsTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.ingredients-images',
        start: 'top top',
        pin: true,
        scrub: 1,
        end: "+=6000" // making the scrub animations take longer
    },  
})

gsap.set('.section-ingredients', {backgroundColor: '#fff4e5'})
// gsap.set('.ingredients.content', {y: 0, opacity: 1} )
// e4d5b7 darker beige

ingredientsTl.to('.ingredients.content', {y: -50, opacity: 0, ease: "ease-in"})
ingredientsTl.to('.section-ingredients', {backgroundColor: 'beige', duration: 4, ease: "linear"})
ingredientsTl.to('.ingredient-packet', {x: '30%', scale: 0.8,})
ingredientsTl.from('.in-txt1', {y: 100, duration: 4, opacity: 0,})
ingredientsTl.to('.in-txt1', {y: -100, duration: 4, opacity: 0, delay: 4})
ingredientsTl.from('.in-txt2', {y: 100, duration: 4, opacity: 0},)
ingredientsTl.to('.in-txt2', {y: -100, duration: 4, opacity: 0, delay: 4})
ingredientsTl.from('.in-txt3', {y: 100, duration: 4, opacity: 0},)
ingredientsTl.to('.in-txt3', {y: -100, duration: 4, opacity: 0, delay: 4})
ingredientsTl.to('.ingredient-packet', {opacity: 0,}) 
ingredientsTl.from('.in-txt4', {y: 100, duration: 4, opacity: 0})
ingredientsTl.to('.in-txt4', {y: -100, duration: 4, opacity: 0, delay: 4})
ingredientsTl.from('.in-txt5', {y: 100, duration: 4, opacity: 0})
ingredientsTl.to('.in-txt5', {y: -100, duration: 4, opacity: 0, delay: 4})
ingredientsTl.from('.in-txt6', {y: 100, duration: 4, opacity: 0})
ingredientsTl.to('.in-txt6', {y: -100, duration: 4, opacity: 1, delay: 4})
ingredientsTl.to('.section-ingredients', {backgroundColor: '#ffffff', duration: 4, ease: "linear"})





// benefits section animation 
// when entering this section the heading will animate downwards
// the circle illustrations and text will animate upwards in a canon
// this will happen everytime user enters the section
const benefitsTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".section-benefits",
        start: "top bottom",
        endTrigger: ".section-benefits",
        end: "top top",
        markers: true,
        toggleActions: "play none none restart",
        //TODO: make sure these togge actions are correct when all together
    }, 
})

benefitsTl.from(".section-benefits h1", {duration: 1, y: -50, opacity: 0,})
benefitsTl.from(".benefit-column", {duration: 1, y: 30, opacity: 0, stagger: 0.3},"-=0.5")

