<%@ page import="com.example.webbongden.dao.model.Order" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/15/2024
  Time: 10:22 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="./img/logo-fold.png" sizes="180x180" />
    <title>Thông tin khách hàng</title>
    <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
    />
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/header-footer.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/reset.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/user.css">
</head>
<body>
<div class="wrapper">
    <jsp:include page="../reuse/header.jsp" />
    <div class="main">
        <div class="container container-cus">
            <div class="sidebar-info-customer">
                <div class="customer-info">
                    <img
                            src="./img/b79144e03dc4996ce319ff59118caf65.jpg"
                            alt="avatarUser"
                    />
                    <p class="customer-name">TRẦN CÔNG LÝ</p>
                </div>
                <div class="menu-user">
                    <nav>
                        <ul class="menu-user">
                            <li
                                    data-section="information_account"
                                    class="active"
                                    onclick="showContent('information_account')"
                            >
                                <i class="fa-solid fa-user"></i>
                                <a href="#">Thông tin tài khoản</a>
                            </li>
                            <li data-section="order" onclick="showContent('order')">
                                <i class="fa-solid fa-bars-progress"></i>
                                <a href="#">Quản lý đơn hàng</a>
                            </li>
                            <li
                                    data-section="change_password"
                                    onclick="showContent('change_password')"
                            >
                                <i class="fa-solid fa-lock"></i>
                                <a href="#">Đổi mật khẩu</a>
                            </li>
                            <li onclick="logout()">
                                <i class="fa-solid fa-right-from-bracket"></i>
                                <a href="/WebBongDen_war/LogoutController" id="logoutLink">Đăng xuất</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="content">
                <!-- Thông tin tài khoản -->
                <div
                        id="information_account"
                        class="content_section"
                >
                    <div class="information_header">
                        <h2>THÔNG TIN TÀI KHOẢN</h2>
                    </div>
                    <form class="info-form">
                        <div class="user-name dlex">
                            <label for="username">Họ tên:</label>
                            <div>
                                <input type="text" id="username" name="username" required value="${userInfo.customerName}"/>
                            </div>
                        </div>

                        <div class="email-cus dlex">
                            <label for="email">Email:</label>
                            <div>
                                <input type="text" id="email" name="email" value="${userInfo.email}" readonly/>
                            </div>
                        </div>

                        <div class="phone-cus dlex">
                            <label for="phone">Số điện thoại:</label>
                            <div>
                                <input type="tel" id="phone" name="phone" value="${userInfo.phone}"/>
                            </div>
                        </div>

                        <div class="phone-cus dlex">
                            <label for="address">Địa chỉ:</label>
                            <div>
                                <input type="text" id="address" name="address" value="${userInfo.address}"/>
                            </div>
                        </div>

                        <div class="create-date-cus dlex">
                            <label for="create-date">Ngày tạo:</label>
                            <div>
                                <input type="text" id="create-date" name="create-date" value="${userInfo.createdAt}" readonly/>
                            </div>
                        </div>


                        <div class="info-btn">
                            <div class="submit">
                                <button type="button" id="save-info">Lưu</button>
                            </div>

                            <div class="submit">
                                <button type="button" id="edit-info">Sửa thông tin</button>
                            </div>
                        </div>
                    </form>
                    <p id="saveMessage" style="display: none; color: green">
                        Hồ sơ của bạn đã được lưu!
                    </p>
                </div>
                <!-- Quản lý đơn hàng -->
                <div id="order" class="content_section" style="display: none;">
                    <div class="order_header">
                        <h2>ĐƠN HÀNG ĐÃ ĐẶT</h2>
                    </div>

                    <div class="order-table-container" id="orderTableContainer">
                        <%
                            // Lấy danh sách orders từ request hoặc session
                            List<Order> orders = (List<Order>) session.getAttribute("orders");

                            // Kiểm tra nếu danh sách đơn hàng không rỗng
                            if (orders != null && !orders.isEmpty()) {
                        %>
                        <table class="order-table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Ngày đặt</th>
                                <th>Tổng tiền</th>
                                <th>Trạng thái</th>
                            </tr>
                            </thead>
                            <tbody>
                            <%
                                for (Order order : orders) {
                            %>
                            <tr>
                                <td><%= order.getId() %></td>
                                <td><%= order.getCreatedAt() %></td>
                                <td><%= order.getTotalPrice() %></td>
                                <td><%= order.getOrderStatus() %></td>
                            </tr>
                            <%
                                }
                            %>
                            </tbody>
                        </table>
                        <%
                        } else {
                        %>
                        <p>Không có đơn hàng nào.</p>
                        <%
                            }
                        %>
                    </div>
                </div>

                <!-- đổi mật khẩu -->
                <div
                        id="change_password"
                        class="content_section"
                        style="display: none"
                >
                    <div class="change_password_header">
                        <h1>ĐỔI MẬT KHẨU</h1>
                        <div class="title">
                            Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho
                            người khác
                        </div>
                    </div>
                    <form class="change_password_form" action="changePassword" method="POST">
                        <div class="dlex">
                            <label for="oldPassword">Mật khẩu cũ:</label>
                            <div>
                                <input type="password" id="oldPassword" name="oldPassword" placeholder="Nhập mật khẩu hiện tại" required />
                            </div>
                        </div>

                        <div class="dlex">
                            <label for="newPassword">Mật khẩu mới:</label>
                            <div>
                                <input type="password" id="newPassword" name="newPassword" placeholder="Nhập mật khẩu mới" required />
                            </div>
                        </div>

                        <div class="dlex">
                            <label for="confirm_password">Nhập lại mật khẩu:</label>
                            <div>
                                <input type="password" id="confirm_password" name="confirmPassword" placeholder="Nhập lại mật khẩu mới" required />
                            </div>
                        </div>
                        <button class="submit" type="submit">Xác nhận</button>
                    </form>
                    <c:if test="${not empty successMessage}">
                        <p style="color: green;">${successMessage}</p>
                    </c:if>
                    <c:if test="${not empty errorMessage}">
                        <p style="color: red;">${errorMessage}</p>
                    </c:if>
                </div>
            </div>
        </div>
    </div>
    <jsp:include page="../reuse/footer.jsp" />
</div>
</body>
<script src="${pageContext.request.contextPath}/assets/Js/user.js?v=2.0" defer></script>
</html>

