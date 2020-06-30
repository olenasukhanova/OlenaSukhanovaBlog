
// modal window

let sendButton = document.querySelectorAll(".send_message");
console.log(sendButton);
let modal = document.querySelector(".modal");
console.log(modal);

[].forEach.call(sendButton, function(button) {
  button.addEventListener("click", function() {
    modal.classList.toggle("show");
  })
});
