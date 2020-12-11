// ScrollReveal.js Code for all pages
// Sources: https://scrollrevealjs.org/api/version.html
//          https://willspecializationweb.wordpress.com/2018/03/01/implementing-scrollreveal-js-and-animate-css/
//          https://www.youtube.com/watch?v=ePgnR4gHIi4&feature=emb_logo&ab_channel=TraversyMedia
//          https://medium.com/@matthewdtotheg/animations-with-scrollreveal-js-e4062961cbb9
//          https://www.npmjs.com/package/scrollreveal

window.sr = ScrollReveal({reset: true});

// || FOOTER ANIMATION ||

// Footer row animation- for 1 second and ease in
sr.reveal(".footer-row",{
    duration: 1000,
    easing: "ease-in",
    reset: true
})

// Footer text animation- delay 0.5 seconds and ease in
sr.reveal(".footer-text", {
    delay: 500,
    easing: "ease-in",
    reset: true
})

// || HOME PAGE ANIMATIONS ||

// Cartoon animation on homepage- enter from left
sr.reveal("#lia-cartoon", {
    duration: 2000,
    origin: 'left',
    distance: '300px'
})

// Intro text animation on homepage- enter from right
sr.reveal(".intro-text", {
    duration: 2000,
    origin: 'right',
    distance: '300px'
})

// Project text animation on homepage- delay entry
sr.reveal("#projects", {
    useDelay: 'onload',
    delay: 2000,
    easing: 'ease-in'
})

// Project boxes animation on homepage- delay entry and reveal
sr.reveal(".work-row", {
    useDelay: 'onload',
    delay: 3000,
    easing: 'ease-in',
    opacity: 0,
})

// || WORK PAGES ANIMATION ||

// Page Header animation- drop in from top for 2 seconds
const pageHeaderTop = {
    duration: 2000,
    origin: 'top',
    distance: '300px'
}

// Animation to page title and overview subtitle
    sr.reveal(".page-title", pageHeaderTop)
    sr.reveal(".overview-subtitle", pageHeaderTop)

// Page Header animation- rise up from bottom for 2 seconds
const pageHeaderBottom = {
    delay: 1000,
    duration: 2000,
    origin: 'bottom',
    distance: '100px'
}

// Animation to header image and overview text, as well as section titles
    sr.reveal(".header-img", pageHeaderBottom)
    sr.reveal(".overview", pageHeaderBottom)

// Animation for problem question
    sr.reveal(".problem-question", {
        delay: 200,
        duration: 1500,
        distance: '100px'
})

// Animations for titles- 100px from bottom for 1.5 seconds
const titles = {
    duration: 1500,
    origin: 'bottom',
    distance: '100px'
}

// Animation for solution image
    sr.reveal(".solution-title", titles)
    sr.reveal(".role,", titles)
    sr.reveal(".process", titles)
    sr.reveal(".user", titles)


// ||ABOUT PAGE ANIMATION ||

// Image animation- from left for 2 seconds
sr.reveal(".about-image", {
    origin: 'left',
    distance: '300px'
})

// Text animation- from right for 2 seconds
sr.reveal(".about-text", {
    duration: 2000,
    origin: 'right',
    distance: '300px'
})


