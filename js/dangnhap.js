const formOpenBtn = document.querySelector(".login_btn"),
formCloseBtn = document.querySelector(".form_close"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
signupBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login");



formOpenBtn.addEventListener("click" , () =>{
    document.body.classList.toggle("show")})


formCloseBtn.addEventListener("click" , () => {
    home.classList.remove("show")})




