document.addEventListener('DOMContentLoaded', function() {
function responseMassage() {
    const email = document.getElementById("reset-email").value;
    document.getElementById("responseMessage").innerText =
      "mặt khẩu đã được gửi tới ${email}";
  }
  function showForgotPassword() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "block";
  }
  
  function showLogin() {
    document.getElementById("forgot-password-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }
  
  // Chuyển tới trang Admin khi nhập tk mk của admin
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("cus-account").value;
      const password = document.getElementById("cus-password").value;
  
      if (username === "admin123" && password === "admin123") {
        window.location.href = "  admin.html";
      } else {
        alert("Tài khoản hoặc mật khẩu không chính xác.");
      }
    });  
});
