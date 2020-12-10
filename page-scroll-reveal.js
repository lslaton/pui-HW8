window.sr = ScrollReveal({reset: true});

sr.reveal("#lia-cartoon", {
    duration: 2000,
    origin: 'left',
    distance: '300px'
})

sr.reveal(".intro-text", {
    duration: 2000,
    origin: 'right',
    distance: '300px'
})

sr.reveal("#projects", {
    useDelay: 'once',
    delay: 1000,
    easing: 'ease-in'
})

sr.reveal("#first-row", {
    useDelay: 'once',
    delay: 2000,
    easing: 'ease-in',
    opacity: 0,
})

sr.reveal(".work-row", {
    delay: 200,
    opacity: 0,
})

sr.reveal(".footer-row",{
    duration: 1000,
    easing: "ease-in",
    reset: true
})

sr.reveal(".footer-text", {
    delay: 500,
    easing: "ease-in",
    reset: true
})