// you can find what all these things do in the documentation
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'The Big Three', "Aperture"],
    showActiveTooltip: true,
    slidesNavPosition: 'bottom',
    controlArrows: false, //turn the arrows off, slider in aperture section
    slidesNavigation: true, //puts in the three dots.
    onLeave: function(origin, destination, direction){
        // console.log("on leave")
        // console.log(destination.item)
        // console.log(destination.index) // we can do a conditional statement. what section its just left
        // if (destination.index == 0) {
        //     console.log("home section")
        // }
        // else 
        if (destination.index == 1 ){
            bigThreeSection(destination)
        }
        else if (destination.index == 2 ){
            apertureSection(destination)
        }
    },
    // this only happens when you leave. but not when if first loads. this event callback doesnt get called/run  when you first load the landing section as its only when you leave the section. 
    
    afterRender: () => {
        homeSection()
        // console.log("home")
    },
    // if you want something to run when it first loads 

    onSlideLeave: (section, origin, destination, direction) => {
        console.log("on slide leave")
        console.log("section")

        // if currently on aperture slides
        if(section.index == 2) {
            animateApertureSlide(destination.item, destination.index)
        }
    },
    // this will run when you leave the slide. 
});

// home section animations. recommend this animation only plays once. 
function homeSection(){
    console.log("home page section")
    // gsap create timeline for animation
    const tl = new TimelineMax({delay: 0.5})

    // animate elements
    tl.from(".bg", {bottom: "50%", top: "50%", duration: 1}) //this opens the background from the middle to open up  
        .from("#logo", {x: -1000, duration: 1.5, ease: 'elastic', opacity: 0.1, scale: 0.1})
        .from(".section-home .content", {y:30, opacity: 0, duration: 1},"-=1") //happen 1 second earlier, in a nice sequence
        .from("#camera", {y: -1000, duration: 1, ease: "bounce"}, "-=1")
        .from("#camera-shadow", {scale:0, opacity: 0, duration: 0.7}, "-=1.1")
        //.from("#fp-nav", {opacity: 0, duration: 1})
}

// big three section
function bigThreeSection(destination){
    //console.log("big three section")
    // get elements
    let section = destination.item // the div itself. we can search inside this section for anything
    let heading = section.querySelector('h1') //getting the heading
    let content = section.querySelector('.content') //getting the content 
    let btCol = section.querySelectorAll('.bt-col')

    //now animate
    const tl = new TimelineMax({delay: 0.5})
    tl.from(heading, {duration:1, x: 500, opacity: 0 })
        .from(btCol, {y: 50, duration: 0.5, opacity: 0, stagger: 0.2}) //stagger will make them animate like a canon
        .from(content, {duration: 1, y: 30, opacity: 0}, "-=1")
}

// aperture section
function apertureSection(destination){
    //let section = destination.item // dont use this!

    animateApertureSlide(destination.item, 0)
    //animate the first slide
    
    //animateApertureSlide(section, 0) //dont use this!
}

function animateApertureSlide(slide, index){
    // get elements
    let slideHeading = slide.querySelector('.slide h1')
    let slideContent = slide.querySelector('.slide .content')
    let slideImage = slide.querySelector('.slide .slide-img')

    const tl = new TimelineMax({delay: 0.2})
    //animate heading and content, image  
    tl. from(slideHeading, {duration: 1, y: 100, opacity:0})
        .from(slideContent, {duration: 1, x: 50, opacity: 0 }, "-=0.5")
    // if slide #2. currently all animations are the same for each slide. we are doing this to change it so we can animate it differently for each slide. optional. 
    if(index == 1){
        tl.from(slideImage, {duration: 1.2, y: -700, opacity: 0, ease: 'back'}, '-=1.5')
    } 
    else {
        tl.from(slideImage, {duration: 1.2, y: 700, opacity: 0, ease: 'back'}, '-=1.5')
    }    
}





// next slide button 
let nextSlideBtn = document.querySelectorAll('.next-slide-btn')
nextSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideRight();
    })
})

// previous slide button 
let prevSlideBtn = document.querySelectorAll('.prev-slide-btn')
prevSlideBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveSlideLeft();
    })
})

// jump to section 2 button. the big three 
// this will work for all buttons 
let jumptoS2Btns = document.querySelectorAll('.jumpto-s2')
jumptoS2Btns.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveTo(2) //this doesnt use the index - so 2 is section 2
    })
})

// let jumptoS2Btn = document.querySelector('.jumpto-s2')
// jumptoS2Btn.addEventListener('click', () => {
//     fullpage_api.moveTo(2);
// })

// jump to section 3 button. aperture 
let jumptoS3Btns = document.querySelectorAll('.jumpto-s3')
jumptoS3Btns.forEach(btn => {
    btn.addEventListener('click', () => {
        fullpage_api.moveTo(3) //this doesnt use the index - so 2 is section 2
    })
})