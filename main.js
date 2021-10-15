console.log("A3 is working!")
gsap.registerPlugin(ScrollTrigger); //is this necessary??


const hamburgerBtn = document.querySelector('.hamburger-btn')
const primaryMenu = document.querySelector('.primary-menu')

hamburgerBtn.addEventListener('click', () => {
  primaryMenu.classList.toggle('show')
})
