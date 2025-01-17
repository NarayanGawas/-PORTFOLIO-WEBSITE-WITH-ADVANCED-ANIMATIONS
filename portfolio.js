window.addEventListener('DOMContentLoaded', (event) => {
    gsap.to('.header', { opacity: 1, y: 0, duration: 1, delay: 0.2 });
    gsap.to('.home', { opacity: 1, y: 0, duration: 1, delay: 0.4 });
    gsap.to('.about', { opacity: 1, y: 0, duration: 1, delay: 0.6 });
    gsap.to('.portfolio', { opacity: 1, y: 0, duration: 1, delay: 0.8 });
    gsap.to('.contact', { opacity: 1, y: 0, duration: 1, delay: 1.0 });
    gsap.to('.footer', { opacity: 1, y: 0, duration: 1, delay: 1.2 });

    gsap.from('.hero-title', { opacity: 0, scale: 0.5, duration: 1, delay: 0.5 });
    gsap.from('.hero-description', { opacity: 0, x: -200, duration: 1, delay: 0.7 });
    gsap.from('.cta-button', { opacity: 0, y: 20, duration: 1, delay: 0.9 });

    gsap.from('.portfolio-item', {
        scrollTrigger: '.portfolio-item',
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
})});
