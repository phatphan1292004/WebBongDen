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

// xử lí sự kiện cho quên mật khẩu
document.getElementById("forgot-password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    
    // Giả lập gửi yêu cầu quên mật khẩu
    document.getElementById("responseMessage").innerText = `A reset link has been sent to ${email}`;

});
function showForgotPassword() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "block";
}

function showLogin() {
    document.getElementById("forgot-password-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

