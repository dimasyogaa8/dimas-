const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu');
const x = document.querySelector('.x');
const btns = document.querySelector('.btns');
const line = document.querySelector('.timeline');
const btnd = document.querySelector('.btnd');
//fungsi slidebar
btn.addEventListener('click', function() {
  menu.classList.toggle('menuup'); //saat btn di klick maka menu secara otomatis akan di tambahkan class bernama menuup
})
//fungsi tombol close
x.addEventListener('click', function() {
  menu.classList.remove('menuup'); //untuk meremove class menuup dan juga menutup tampilan menu
})
//btn menu
menu.addEventListener('click', function(e) {
  if (e.target.className == 'cont') {
    menu.classList.remove('menuup');//untuk membuat saat list di klik maka menu akan langsung tertutup secara otomatis.
  }
})
//animasi gsap
//gsap.registerPlugins(scrollTrigger)
const timeline = gsap.timeline();
timeline.to(".logo", { duration: 1, x: 0, opacity: 1 });//gsap logo navbar
timeline.to(".nav", { duration: 1, x: 0, opacity: 1 });//gsap nav desktop 

timeline.to(".btn", { duration: 1, x: 0, opacity: 1 });//gsap Hamburgermenu
timeline.to(".hiro-judul", { duration: 1, y: 0, opacity: 1 });//gsap untuk hiro bagian judul
timeline.to(".hiro-sub", { duration: 1, y: 0, opacity: 1 });//gsap untuk hiro subtext (p)
timeline.to(".hiro-btn", {duration: 1, y: 0, opacity: 1 })//gsap untuk btn di hiro 'scroll down'


//area scrollTrigger
gsap.to(".hiro-text", {
  opacity: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".hiro-text",
    start: "center top",
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
gsap.to(".project", {
    opacity: 1,
    x:0,
  scrollTrigger: {
    trigger: ".project",
    start: "botom center",
    end: "botom botom",
    duration: 2,
    ease: "easeIn",
    scrub: true,
  },
})
// Memutar timeline
timeline.play();

btns.addEventListener('click', function() {
 document.body.classList.toggle('darkmode');
})
btnd.addEventListener('click', function() {
 document.body.classList.toggle('darkmode');
})

new Typed('#typed',{
  strings : ['Hai👋','Nama saya','Dimas yoga Kurniawan'],
  typeSpeed : 100,
  delaySpeed : 8000,
  loop : true
});