const arrow = document.querySelector(".arrow")
const email = document.querySelector(".email")
const iconError = document.querySelector(".icon-error")
const invalidEmail = document.querySelector(".valid-email")
const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

arrow.addEventListener("click", () =>{
    checkEmail()
})


function checkEmail(){
if(email.value.match(emailValid)){
    email.classList.add("green")
    email.classList.remove("red")
    iconError.classList.add("hidden")
    invalidEmail.classList.add("hidden")
}else if(!email.value.match(emailValid)){
    email.classList.remove("green")
    email.classList.add("red")
    iconError.classList.remove("hidden")
    invalidEmail.classList.remove("hidden")
}else{}
}

