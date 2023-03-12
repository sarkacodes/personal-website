import anime from 'animejs/lib/anime.es.js';
import 'waypoints/lib/noframework.waypoints.min.js';
import 'waypoints/lib/shortcuts/inview.js';


document.querySelector(".about").style.opacity = "1";


anime.timeline({loop: false})
.add({
    targets: '.about h1',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
  })
  .add({
    targets: '.about p',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 50 + 150 * i
  }, '-=1000');


  
let inview = new Waypoint({
    element: document.querySelector('.skills'),
    handler: function(direction) {
        document.querySelector('.skills').style.opacity = 1;
        anime.timeline({loop: false})
            .add({
                targets: '.skills h2',
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1200,
            })
            .add({
                targets: '.skills-legends__item',
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 20 + 40 * i
            }, '-=1000')
            .add({
                targets: '.skills-list__item',
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                scale: [0,1],
                easing: "easeOutExpo",
                duration: 800,
                delay: (el, i) => 20 + 30 * i
            }, '-=700');
            inview.destroy();  
    },
    offset: '60%'
})


let inview2 = new Waypoint({
    element: document.querySelector('.education'),
    handler: function(direction) {
        document.querySelector('.education').style.opacity = 1;
        anime.timeline({loop: false})
            .add({
                targets: '.education h2',
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1200,
            })
            .add({
                targets: '.education-table',
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 20 + 80 * i
            }, '-=1000');
            inview2.destroy();  
    },
    offset: '65%'
})


let inview3 = new Waypoint({
    element: document.querySelector('.socials'),
    handler: function(direction) {
        console.log("proc");
        document.querySelector('.socials').style.opacity = 1;
        anime.timeline({loop: false})
            .add({
                targets: '.socials h2',
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 1200,
            })
            .add({
                targets: '.social__icon',
                translateY: [100,0],
                translateZ: 0,
                opacity: [0,1],
                easing: "easeOutExpo",
                duration: 600,
                delay: (el, i) => 20 + 80 * i
            }, '-=1000');
            inview3.destroy();    
    },
    offset: '80%'
})



let inview4 = new Waypoint({
    element: document.querySelector('.svg__cap'),
    handler: function(direction) {
        anime({
            targets: '.svg__cap--path',
            strokeDashoffset: [800, 0],
            easing: 'easeInOutSine',
            duration: 1000,
            delay: function(el, i) { return i * 150 },
            direction: 'normal'
          });
        inview4.destroy();    
    },
    offset: '65%'
})
