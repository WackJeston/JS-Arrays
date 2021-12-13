const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const submitElement = document.querySelector("#submit")
const emailElement = document.querySelector("#email")
const formElement = document.querySelector("#form")

// Prevents Reload on Submit
function handleForm(event) { event.preventDefault(); }
formElement.addEventListener('submit', handleForm);

// Submit (This validates the given email and runs the rest of my functions.)
submitElement.addEventListener("click", function(){
  if (emailValidator.test(emailElement.value) == true){
    emailElement.style.border = "2px solid green"
    getImages()
  } else{
    emailElement.style.border = "2px solid red"
  }
})
