const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const x = document.querySelector('.x');
const btns = document.querySelector('.btns');
const line = document.querySelector('.timeline');

//fungsi slidebar
btn.addEventListener('click', function() {
  menu.classList.toggle('menuup');
})
x.addEventListener('click', function() {
  menu.classList.remove('menuup');
})
//animasi gsap
//gsap.registerPlugins(scrollTrigger)
const timeline = gsap.timeline(0.1);
timeline.to(".logo", { duration: 1, x: 0, opacity: 1 });
timeline.to(".nav", { duration: 1, x: 0, opacity: 1 });

timeline.to(".btn", { duration: 1, x: 0, opacity: 1 });
timeline.to(".hiro-judul", { duration: 1, y: 0, opacity: 1 });
timeline.to(".hiro-sub", { duration: 1, y: 0, opacity: 1 });
timeline.to(".hiro-btn", {duration: 1, y: 0, opacity: 1 })

gsap.to(".hiro-text", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".hiro-text",
    start: "center center",
    end: "botom",
    duration: 2,
    ease: "easeIn",
    scrub: true,
  },
  
})

gsap.to(".blog", {
    opacity: 1,
    y:0,
  scrollTrigger: {
    trigger: ".blog",
    start: "top center",
    end: "botom",
    duration: 2,
    ease: "easeIn",
    scrub: true,
  },
})
// Memutar timeline
timeline.play();

/*btns.addEventListener('click', function() {
 alert('ini berfungsi ');
 document.body.classList.toggle('darkmode');
})*/