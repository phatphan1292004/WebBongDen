// lấy ra element của trang

const formRegister = document.getElementById("formRegister");
const emailElenment = document.getElementById("email");
const passwordElenment = document.getElementById("password");
const rePasswordElenment = document.getElementById("rePassword");

// element hiển thị lỗi
const rePasswordError = document.getElementById("rePasswordError")


// lắng nghe sự kiên submit form đăng ký tài khoản
formRegister.addEventListener("submit", function(e){
    // ngăn chặn sự kiện load lại trang
    e.preventDefault();

    //kiểm tra mật khẩu với nhập lại mật khẩu
    if(passwordElenment.value !== rePasswordElenment.value){
        rePasswordError.style.display = "block";
        rePasswordElenment.innerHTML = "Mật khẩu không khớp";
    }

});

