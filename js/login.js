// element của trang
const formLogin = document.getElementById("formLogin");

 // lắng nghe sự kiện submit
formLogin.addEventListener("submit", function(event) {
    event.preventDefault();
    
    //validate dữ liệu đầu vào


    //lấy dữ liệu từ local về
    const userLocal = JSON.parse(localStorage.getItem("users"))

    //tìm kiếm userName và mật khẩu người có tồn tại trên local ?


    //nếu có thì đăng nhập thành ocong và chuyển hướng về trang chủ


    // nếu không thì thông báo cho người dùng nhập lại dữ liệu

    // Kiểm tra nếu tên hoặc mật khẩu để trống
    if (name === "" || password === "") {
        document.getElementById('loginMessage').innerText = "Please fill in both fields.";
        return;
    }

    // Kiểm tra giả lập (ở đây bạn có thể thực hiện kiểm tra thật nếu có server)
    if (name === "user" && password === "password") {
        document.getElementById("loginMessage").innerText = "Login successful!";
        document.getElementById("loginMessage").style.color = "green";
    } else {
        document.getElementById("loginMessage").innerText = "Incorrect name or password.";
        document.getElementById("loginMessage").style.color = "red";
    }
});
function responseMassage(){
    const email = document.getElementById("reset-email").value;
    document.getElementById("responseMessage").innerText = "mặt khẩu đã được gửi tới ${email}";
}
function showForgotPassword() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "block";
}

function showLogin() {
    document.getElementById("forgot-password-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

