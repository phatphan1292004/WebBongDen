document.addEventListener("DOMContentLoaded", function () {
  // Hàm hiển thị thông báo
  function showNotification(message, type = "success") {
    const notification = document.getElementById("notification");
    const notificationMessage = document.getElementById("notification-message");

    notificationMessage.innerText = message;

    // Đổi màu thông báo dựa trên loại thông báo
    if (type === "error") {
      notification.style.backgroundColor = "#dc3545"; // Màu đỏ cho lỗi
    } else {
      notification.style.backgroundColor = "#28a745"; // Màu xanh cho thành công
    }

    // Hiển thị thông báo
    notification.classList.add("show");

    // Tự động ẩn thông báo sau 3 giây
    setTimeout(() => {
      notification.classList.remove("show");
    }, 3000);
  }

  // Hàm hiển thị thông báo khi gửi yêu cầu đặt lại mật khẩu
  function responseMassage() {
    const email = document.getElementById("reset-email").value;
    document.getElementById("responseMessage").innerText =
      `Mật khẩu đã được gửi tới ${email}`;
    showNotification(`Mật khẩu đã được gửi tới ${email}`, "success");
  }

  // Chuyển đổi giữa form đăng nhập và form quên mật khẩu
  function showForgotPassword() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "block";
  }

  function showLogin() {
    document.getElementById("forgot-password-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }

  // Xử lý khi submit form đăng nhập
  const loginForm = document.getElementById("login-form");
  const username = document.getElementById("cus-username");
  const password = document.getElementById("cus-password");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Lấy danh sách người dùng từ sessionStorage
    let users = JSON.parse(sessionStorage.getItem("users")) || [];

    // Tìm tài khoản trong danh sách người dùng
    const user = users.find((user) => user.username === username.value);

    // Kiểm tra tài khoản có tồn tại không
    if (!user) {
      showNotification("Tài khoản không tồn tại!", "error");
      return;
    }

    // Kiểm tra mật khẩu
    if (user.password !== password.value) {
      showNotification("Mật khẩu không đúng!", "error");
      return;
    }

    sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    showNotification("Đăng nhập thành công!");

    // Chuyển hướng sang trang chính
    window.location.href = "index.html";
  });

  // Chuyển tới trang Admin khi nhập tk mk của admin
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("cus-account").value;
      const password = document.getElementById("cus-password").value;

      if (username === "admin123" && password === "admin123") {
        window.location.href = "admin.html";
      } else {
        showNotification("Tài khoản hoặc mật khẩu không chính xác.", "error");
      }
    });
});
