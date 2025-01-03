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
</head>
<body>
<div class="wrapper">
    <form id="signup-form">
        <div class="form-header">
            <a href="" class="logo"><img src="./img/logo-login.png" alt="" /></a>
            <p>ĐĂNG KÍ</p>
        </div>
        <div class="form-main">
            <div class="form-group">
                <p>TÀI KHOẢN</p>
                <div class="form-field">
                    <input type="text" class="form-input" id="username" placeholder=" " required/>
                    <label for="username" class="form-label">Tài khoản</label>
                </div>
            </div>

            <div class="form-group">
                <p>EMAIL</p>
                <div class="form-field">
                    <input type="email" class="form-input" id="email" placeholder=" " required/>
                    <label for="email" class="form-label">Email</label>
                </div>
            </div>

            <div class="form-group">
                <p>MẬT KHẨU</p>
                <div class="form-field">
                    <input type="password" class="form-input" id="password" placeholder=" " required/>
                    <label for="password" class="form-label">Mật khẩu</label>
                </div>
            </div>

            <div class="form-group">
                <p>NHẬP LẠI MẬT KHẨU</p>
                <div class="form-field">
                    <input type="password" class="form-input" id="rePassword" placeholder=" " required/>
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
<div id="notification" class="notification">
    <p id="notification-message"></p>
</div>
<script src="${pageContext.request.contextPath}/assets/Js/register.js.js"></script>
</body>
</html>

