// changing top of menu

// $(function() {
// 	var menuhe = $('.header-row').height(); // высота меню
// 	var menu = menuhe+80; // прибавляем 
// $("area[href*=#],a[href*=#]:not([href=#]):not([href^='#tab']):not([href^='#quicktab']):not([href^='#pane']):not([href *= '#inline'])").click(function() {
// if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// var target = $(this.hash);
// target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// if (target.length) {
// $('html,body').animate({
// scrollTop: target.offset().top - menu
// },1500);
// return false;
// }
// }
// });
// });

var jump=function(e)
{
       e.preventDefault();
       var target = $(this).attr("href");
       $('html,body').animate(
       {
               scrollTop: $(target).offset().top - document.getElementById('header').offsetHeight - 20
     },1000,function()
       {
               location.hash = target;
       });
}

$(document).ready(function()
{
       $('a[href*="#"]').bind("click", jump); 
       return false;
});




// mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click", function(){
  mobileMenu.classList.toggle("active-menu");
  if(mobileMenu.classList.contains('active-menu')){
      mainMenu.classList.add('active-menu')
  } else{
    mainMenu.classList.remove('active-menu')
  }
}) 


// popup window
let sendButton = document.querySelectorAll(".send_message");
console.log(sendButton);
let popup = document.getElementById("myPopup");
console.log(popup);

[].forEach.call(sendButton, function (button) {
  button.addEventListener("click", function () {
    popup.classList.toggle("show");
  })
});



// modal window
let modalWindow = document.querySelector(".modal-window");
console.log(modalWindow);
let closeBtn = document.querySelector(".button-close");
console.log(closeBtn);

function openModal(){
  modalWindow.classList.add("shown")
  modalWindow.classList.remove("hide") 
}

function openModalScroll(){
   if (window.pageYOffset >= document.documentElement.scrollHeight/2){
      openModal();
      window.removeEventListener('scroll',openModalScroll)
   }
}

window.addEventListener('scroll', openModalScroll)


function closeModal() {
  modalWindow.classList.add("hide");
  modalWindow.classList.remove("shown")
}

closeBtn.addEventListener("click",closeModal)


// flying sections


AOS.init({
  easing: 'ease-in-out-sine',
  duration: 600,
});



// slider

$(function() {
  $(".rslides").responsiveSlides({
    auto: true,
    speed: 3000,
    navContainer: "", 
    nav: true,
    speed: 500,
    namespace: "centered-btns"
  }

  );
});

// active menu 
$('#nav').onePageNav ({
  currentClass:"current"
})


