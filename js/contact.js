import anime from 'animejs/lib/anime.es.js';

document.querySelector(".contact").style.opacity = "1";

anime.timeline({ loop: false })
    .add({
        targets: '.contact h1',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
    }).add({
        targets: '.contact__text',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200
    }, '-=900')
    .add({
        targets: '.svg__letter',
        translateX: ["-100%", "calc(98vw - 100%)"],
        duration: 2000,
        easing: 'easeOutElastic(1, .6)'
    }, '-=500');
