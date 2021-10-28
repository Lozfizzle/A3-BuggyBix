// load scene function
function loadScene(){
    //gsap timeline 
    const tl = new TimelineMax({delay: 0.5})

    // animate elements 
    tl.to('.perth-bg', {filter: 'blur(20px)', duration: 1, ease: "linear"})
        .from('.section-iso h1', {opacity:0, y: 50, duration: 0.5}, '-=0.5')
        .from('.camera-back', {opacity:0, y:50})
        .from('.camera-display', {opacity: 0, duration: 1})
        .to('.camera-back', {x: 200, duration:0.5})
        .from('.section-iso .content.day', {y: 150, opacity: 0, duration: 0.5})
        .from("#night-toggle", {opacity: 0, y:-150, duration: 0.5}, '-=0.5')
        .to("#night-toggle-tooltip", {open: true})

}

loadScene()

// dark mode toggle/switch
const nightToggle = document.querySelector("#night-toggle")
nightToggle.addEventListener('sl-change', () => {
    if (nightToggle.checked === true){ //==== means not just the same, but also the same data type
        isoNightMode()
    }
    else {
        isoDayMode()
    }
})

function isoNightMode(){
    //gsap timeline 
    const tl = new TimelineMax()
    //animate elements 
    tl.to('.perth-bg.day', {opacity: 0, duration: 0.5})
        .to('.perth-bg.night', {opacity: 1, duration: 0.5}, '-=0.5')
        .to('.camera-display.day', {opacity: 0, scale: 0.5, duration: 0.5})
        .fromTo('.camera-display.night', {opacity:0, scale:0.5}, {opacity: 1, scale: 1, duration: 0.5})
        .to('.content.day', {opacity: 0, y: -150, duration: 0.5}, '-=1')
        .fromTo('.content.night', {opacity:0, y:150}, {opacity: 1, y:0, duration: 0.5}, '-=1')
        .to('.noise-comparison-open-btn', {scale: "+=0.1", yoyo: true, duration: 0.2, repeat: 5})
}

function isoDayMode(){
    //gsap timeline 
    const tl = new TimelineMax()
    //animate elements 
    tl.to('.perth-bg.night', {opacity: 0, duration: 0.5})
        .to('.perth-bg.day', {opacity: 1, duration: 0.5}, '-=0.5')
        .to('.camera-display.night', {opacity: 0, scale: 0.5, duration: 0.5})
        .fromTo('.camera-display.day', {opacity:0, scale:0.5}, {opacity: 1, scale: 1, duration: 0.5})
        .to('.content.night', {opacity: 0, y: -150, duration: 0.5}, '-=1')
        .fromTo('.content.day', {opacity:0, y:150}, {opacity: 1, y:0, duration: 0.5}, '-=1')
}

// noise compairson dialogue
let noiseComparisonDialogBtn = document.querySelector('.noise-comparison-open-btn')
let noiseComparisonDialog = document.querySelector('#dialog-noise-comparison')
// click to trigger dialogue show
noiseComparisonDialogBtn.addEventListener('click', () => noiseComparisonDialog.show())