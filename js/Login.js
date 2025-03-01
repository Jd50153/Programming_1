const buttonEyeView = document.getElementById("icon_eye_view")
const buttonEyeHidden = document.getElementById("icon_eye_hidden")
const passwordInput = document.querySelector(".inputGroup input[type='password']");

buttonEyeView.addEventListener("click",()=>{
    buttonEyeHidden.classList.remove("hidden_eye")
    buttonEyeView.classList.add("hidden_eye")
    passwordInput.type = "text";

})
buttonEyeHidden.addEventListener("click",()=>{
    buttonEyeHidden.classList.add("hidden_eye")
    buttonEyeView.classList.remove("hidden_eye")
    passwordInput.type = "password";

})