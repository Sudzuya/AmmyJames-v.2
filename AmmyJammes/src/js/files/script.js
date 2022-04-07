// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// let i = setInterval(function(){
//     if(document.querySelector('.loaded')){
//         document.querySelector('.subscribe__close').addEventListener('click', function(){
//             document.querySelector('.loaded').classList.remove('loaded') 
//         })
//         clearInterval(i)
//     }
// }, 1000)

// let contactNavigate = document.querySelector('.contact-navigation')
// contactNavigate.addEventListener('click', function(e){
//     if (e.target.id == 'arrow-socail'){
//         document.querySelector('.contact-navigation__arrow').classList.toggle('open')
//         if (document.querySelector('.contact-navigation__arrow').classList.contains('open')){
//             document.querySelector('.contact-navigation__social-body').style.height = 'auto';
//             contactNavigate.style.height = '342px'  
//         } else{
//             document.querySelector('.contact-navigation__social-body').style.height = '';
//             contactNavigate.style.height = '' 
//         }
         
//     }
//     if (e.target.closest('.contact-navigation__img') || e.target.classList.contains('.contact-navigation__img')){
//         contactNavigate.classList.add('open')
//         document.querySelector('.contact-navigation__info-body').classList.add('open-content')
//     } 
//     if (contactNavigate.classList.contains('open')){
//         document.querySelector('.contact-navigation__close').addEventListener('click', function(){
//             contactNavigate.classList.remove('open')
//             document.querySelector('.contact-navigation__info-body').classList.remove('open-content')
//         })
//     }

// })
// contactNavigate.addEventListener("DOMSubtreeModified", function () {
//     console.log("Размеры элемента: " + el.clientWidth + " X " + el.clientHeight);
//   }, false);

let burger = document.querySelector('.burger')
let dropDownMenu = document.querySelector('.mobile-menu .header__dropdown-list');
burger.addEventListener('click', function(){
  burger.classList.toggle('active')
  document.body.classList.toggle('open')
})

let Alllink = document.querySelectorAll('.mobile-menu nav a')

Alllink.forEach(function(e){
  if (e.innerText !== "Информация"){
    e.addEventListener('click', function(item){
      document.body.classList.remove('open')
      if (dropDownMenu.classList.contains('drop-open')){
        dropDownMenu.classList.remove('drop-open')
      }
    })
  } 
  if (e.innerText == "Информация"){
    e.addEventListener('click', function(){
      e.classList.toggle('open')
      dropDownMenu.classList.toggle('drop-open')
    })
  }

})