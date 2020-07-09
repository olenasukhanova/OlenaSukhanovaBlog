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