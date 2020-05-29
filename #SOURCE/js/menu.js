const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const body = document.body;
burger.addEventListener('click',()=>{
  burger.classList.toggle('_active');
  menu.classList.toggle('_active');
  body.classList.toggle('lock');
});