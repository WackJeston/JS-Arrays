const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const submitElement = document.querySelector("#submit")
const emailElement = document.querySelector("#email")
let correctEmail = false

// Email Validation -----------------------------
submitElement.addEventListener("click", function(){
  if (emailValidator.test(emailElement.value) == true){
    emailElement.style.border = "2px solid green"
    correctEmail = true
  } else{
    emailElement.style.border = "2px solid red"
    correctEmail = false
  }
})
