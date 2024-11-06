const formOpenBtn = document.querySelector(".login_btn"),
formCloseBtn = document.querySelector(".form_close"),
home = document.querySelector(".home")


formOpenBtn.addEventListener("click" , () => home.classList.add("show"))
formOpenBtn.addEventListener("click" , () => home.classList.remove("show"))




