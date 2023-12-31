const btn = document.querySelector('.btn');
const menu = document.querySelector('.menu')
const x = document.querySelector('.x')
const btns = document.querySelector('.btns')


//fungsi slidebar
btn.addEventListener('click', function() {
  menu.classList.toggle('menuup');
})
x.addEventListener('click', function() {
  menu.classList.remove('menuup');
})

//animasi gsap
gsap.to('.logo', {y:0, opacity:1, duration:2, ease:"easeIn"})
gsap.to('.btn', {y:0, opacity:1, duration:2, ease:"easeIn"})
gsap.to('.btns', {y:0, opacity:1, duration:2, ease:"easeIn"})

