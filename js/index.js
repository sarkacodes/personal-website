import anime from 'animejs/lib/anime.es.js';

document.querySelector(".intro").style.opacity = "1";

anime.timeline({ loop: false })
    .add({
        targets: '.intro__headline',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
    }).add({
        targets: '.intro__paragraph',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200
    }, '-=900').add({
        targets: '.social__icon',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 50 + 150 * i
    }, '-=900');