gsap.to('.mask img', {
    scrollTrigger: {
        trigger: '#main',
        start: 'top top',
        scrub: 1.5
    },
    bottom: -250,
    ease: 'linear'
})