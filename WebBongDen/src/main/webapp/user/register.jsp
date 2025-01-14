<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/15/2024
  Time: 10:21 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="./img/logo-fold.png" sizes="180x180">
    <title>Đăng Kí</title>
    <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/login.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/reset.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css" />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> <!-- Thêm jQuery -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
</head>
<body>
<div class="wrapper">
    <form id="signup-form" action="${pageContext.request.contextPath}/register" method="post">
        <div class="form-header">
            <a href="" class="logo"><img src="./img/logo-login.png" alt="" /></a>
            <p>ĐĂNG KÍ</p>
        </div>
        <div class="form-main">
            <div class="form-group">
                <p>TÊN KHÁCH HÀNG</p>
                <div class="form-field">
                    <input type="text" class="form-input" id="cusname" name="cusname" placeholder=" " required />
                    <label for="cusname" class="form-label">Tên khách hàng</label>
                </div>
            </div>

            <div class="form-group">
                <p>TÀI KHOẢN</p>
                <div class="form-field">
                    <input type="text" class="form-input" id="username" name="username" placeholder=" " required />
                    <label for="username" class="form-label">Tài khoản</label>
                </div>
            </div>

            <div class="form-group">
                <p>EMAIL</p>
                <div class="form-field">
                    <input type="email" class="form-input" id="email" name="email" placeholder=" " required />
                    <label for="email" class="form-label">Email</label>
                </div>
            </div>

            <div class="form-group">
                <p>MẬT KHẨU</p>
                <div class="form-field">
                    <input type="password" class="form-input" id="password" name="password" placeholder=" " required />
                    <label for="password" class="form-label">Mật khẩu</label>
                </div>
            </div>

            <div class="form-group">
                <p>NHẬP LẠI MẬT KHẨU</p>
                <div class="form-field">
                    <input type="password" class="form-input" id="rePassword" name="rePassword" placeholder=" " required />
                    <label for="rePassword" class="form-label">Nhập lại mật khẩu</label>
                </div>
            </div>
        </div>
        <div class="form-footer">
            <label>
                <input type="checkbox" id="terms-checkbox" required />
                Tôi đã đọc rõ điều khoản
            </label>
            <button type="submit" class="btn">Đăng kí</button>
        </div>
    </form>
</div>
<script src="${pageContext.request.contextPath}/assets/Js/register.js.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        const form = document.getElementById("signup-form");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Ngăn form gửi dữ liệu trực tiếp

            // Lấy dữ liệu từ form
            const formData = new FormData(form);

            // Chuyển FormData thành đối tượng JSON
            const jsonData = {};
            formData.forEach((value, key) => {
                jsonData[key] = value;
            });

            // Kiểm tra mật khẩu có khớp hay không
            if (jsonData.password !== jsonData.rePassword) {
                toastr.error("Mật khẩu không khớp. Vui lòng kiểm tra lại!");
                return;
            }

            // Gửi dữ liệu tới server bằng fetch API
            fetch(form.action, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại!");
                    }
                    return response.json();
                })
                .then((data) => {
                    if (data.success) {
                        toastr.success("Đăng ký thành công!");
                        setTimeout(() => {
                            window.location.href = "${pageContext.request.contextPath}/login";
                        }, 2000);
                    } else {
                        toastr.error(data.message || "Đăng ký thất bại. Vui lòng thử lại!");
                    }
                })
                .catch((error) => {
                    console.error("Error:", error);
                    toastr.error("Lỗi khi kết nối đến server. Vui lòng thử lại!");
                });
        });
    });
</script>
</body>
</html>
