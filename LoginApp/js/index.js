var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

const fileInput = document.getElementById("choose_photo_input");
const label = document.getElementById("choose_photo_label");

const buttonEyeView = document.getElementById("icon_eye_view")
const buttonEyeHidden = document.getElementById("icon_eye_hidden")
const passwordInput = document.querySelector(".inputGroup input[type='password']");

const buttonEyeViewConfirm = document.getElementById("icon_eye_view_confirm")
const buttonEyeHiddenConfirm = document.getElementById("icon_eye_hidden_confirm")
const passwordInputConfirm = document.querySelector(".inputGroup_password_confirm .input_password_confirm");

const containerLoginApp = document.getElementById("container_login_app")
const containerRegisterApp = document.getElementById("container_register_app")
const btnLoginAppPc = document.getElementById("btn_login_app_pc")
const btnBackRegister = document.getElementById("text_log_in_register")

btnLoginAppPc.addEventListener("click",()=>{
  containerRegisterApp.classList.remove("hidden_register")
  containerLoginApp.classList.add("hidden_register")

})
btnBackRegister.addEventListener("click",()=>{
  containerRegisterApp.classList.add("hidden_register")
  containerLoginApp.classList.remove("hidden_register")
  containerLoginApp.classList.add("flagClassLogin")

})

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

buttonEyeViewConfirm.addEventListener("click",()=>{
    buttonEyeHiddenConfirm.classList.remove("hidden_eye")
    buttonEyeViewConfirm.classList.add("hidden_eye")
    passwordInputConfirm.type = "text";

})
buttonEyeHiddenConfirm.addEventListener("click",()=>{
    buttonEyeHiddenConfirm.classList.add("hidden_eye")
    buttonEyeViewConfirm.classList.remove("hidden_eye")
    passwordInputConfirm.type = "password";

})

fileInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Crear imagen y reemplazar el contenido del label
      label.innerHTML = `<img src="${e.target.result}" alt="Preview" style="width: 100%; height: 100%; border-radius: 8px; object-fit: cover;">`;
    };
    reader.readAsDataURL(file);
  }
});


