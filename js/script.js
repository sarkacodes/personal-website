import anime from 'animejs/lib/anime.es.js';

document.querySelector(".nav__items").style.opacity = "1";


anime.timeline({ loop: false })
    .add({
        targets: '.nav__logo',
        translateX: ['120vw', '0'],
        keyframes: [
            {filter: "blur(10px)"},
            {filter: "blur(1px)"},
            {filter: "blur(0px)"},
            {filter: "blur(0px)"}
        ],
        rotate: '3turn',
        delay: 100,
        duration: 2000
    })
    .add({
        targets: '.nav-items__item',
        translateY: [100, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 30 + 100 * i
    }, 500);
