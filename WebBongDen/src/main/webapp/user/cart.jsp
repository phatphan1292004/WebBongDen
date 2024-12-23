<%@ page import="com.example.webbongden.dao.model.Cart" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="jakarta.servlet.http.HttpSession" %>
<%@ page import="com.example.webbongden.dao.model.CartItem" %>
<%@ page import="com.example.webbongden.dao.model.Customer" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%--

  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/15/2024
  Time: 10:21 AM
  To change this template use File | Settings | File Templates.
--%>
<%
    HttpSession cartSession = request.getSession(); // Lấy session hiện tại (nếu có)
    Cart cart = (Cart) cartSession.getAttribute("cart"); // Lấy giỏ hàng từ session
    Customer cus = (Customer) cartSession.getAttribute("customerInfo");
%>

<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="./img/logo-fold.png" sizes="180x180">
    <title>Giỏ hàng & Thanh toán</title>
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
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/cart.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/header-footer.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/reset.css">
</head>
<body>
<div class="wrapper">
    <%@ include file="../reuse/header.jsp" %>
    <div class="main">
        <a class="direction" style="margin: 20px 140px; display: block; text-decoration: none; color: black;" href="index.html">
            <i class="fa-solid fa-arrow-left"></i>
            <span id="direction-cart">Mua thêm sản phẩm</span>
        </a>
        <div class="nav">
            <div class="nav-item" data-tab="cart">Giỏ hàng</div>
            <div class="nav-item" data-tab="order-info">Thông tin đặt hàng</div>
            <div class="nav-item" data-tab="payment">Thanh toán</div>
            <div class="nav-item" data-tab="finish">Hoàn tất</div>
        </div>

        <div class="tab-container">
            <div class="tab-content" id="cart">
                <div class="container-top">
                    <div class="product">
                        <ul class="list-product">
                            <% if (cart == null || cart.getItems().isEmpty()) { %>
                            <p>Giỏ hàng của bạn trống.</p>
                            <% } else { %>
                            <% for (CartItem item : cart.getItems()) { %>
                            <li class="product-item">
                                <div class="box">
                                    <div class="product-img">
                                        <img src="<%= item.getImageUrl() %>" alt="<%= item.getProductName() %>">
                                    </div>
                                    <div class="delete-item">
                                        <a href="delete-cart-item?productId=<%= item.getProductId() %>" class="delete-btn">Xóa</a>
                                    </div>
                                </div>
                                <div class="product-detail">
                                    <div class="product-name"><%= item.getProductName() %></div>
                                </div>
                                <div class="product-qp">
                                    <div class="product-price"><%= item.getFormattedPrice() %> VND</div>
                                    <div class="quantity-selector">
                                        <form action="update-cart" method="post">
                                            <input type="hidden" name="productId" value="<%= item.getProductId() %>" />
                                            <button class="quantity-btn decrease" type="button" onclick="updateQuantity(this, -1)">-</button>
                                            <input
                                                    type="number"
                                                    name="quantity"
                                                    class="quantity-input"
                                                    value="<%= item.getQuantity() %>"
                                                    min="1"
                                                    onchange="this.form.submit()"
                                            />
                                            <button class="quantity-btn increase" type="button" onclick="updateQuantity(this, 1)">+</button>
                                        </form>
                                    </div>
                                </div>
                            </li>
                            <% } %>
                            <% } %>
                        </ul>
                        <div class="a"></div>
                    </div>
                </div>
                <div class="container-bottom">
                    <div class="result">
                        <div class="b">
                            <p>Phí vận chuyển: 0</p>
                            <p>Miễn phí</p>
                        </div>
                        <div class="b">
                            <p>Tổng tiền:</p>
                            <p class="total-price"><%= cart != null ? cart.getTotalPrice() : 0 %> VND</p>
                        </div>
                    </div>

                    <button class="buy-btn" data-tab="cus-info">ĐẶT HÀNG NGAY</button>
                </div>
            </div>
            <div class="tab-content" id="cus-info">
                <form action="save-cus-info" method="post">
                    <div class="cus-info">
                        <div class="container-top">
                            <div class="cus-info-item">
                                <p class="title">Thông tin khách mua hàng</p>
                                <div class="cus-field-info">
                                    <div class="form-field">
                                        <input
                                                type="text"
                                                class="form-input"
                                                id="cus-name"
                                                name="customerName"
                                                placeholder=" "
                                                required
                                        />
                                        <label for="cus-name" class="form-label">Nhập họ tên</label>
                                    </div>

                                    <div class="form-field">
                                        <input
                                                type="text"
                                                class="form-input"
                                                id="cus-tele"
                                                name="customerPhone"
                                                placeholder=" "
                                                required
                                        />
                                        <label for="cus-tele" class="form-label"
                                        >Nhập số điện thoại</label
                                        >
                                    </div>
                                </div>
                            </div>

                            <div class="address-container">
                                <p class="title">Địa chỉ khách hàng</p>
                                <div class="address-box">
                                    <div class="address-row">
                                        <select id="province" name="province" required>
                                            <option value="">Chọn Tỉnh, Thành phố</option>
                                        </select>

                                        <select id="district" name="district" required>
                                            <option value="">Chọn Quận, Huyện</option>
                                        </select>
                                    </div>

                                    <div class="address-row">
                                        <select id="ward" name="ward" required>
                                            <option value="">Chọn Phường, Xã</option>
                                        </select>

                                        <div class="form-field">
                                            <input
                                                    type="text"
                                                    class="form-input"
                                                    id="number-address"
                                                    name="streetAddress"
                                                    placeholder=" "
                                                    required
                                            />
                                            <label for="number-address" name="streetAddress" class="form-label"
                                            >Số nhà, tên đường</label
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-field">
                                <input
                                        type="text"
                                        class="form-input"
                                        id="note"
                                        name="note"
                                        placeholder=" "
                                />
                                <label for="note" class="form-label"
                                >Lưu ý, yêu cầu khác (Không bắt buộc)</label
                                >
                            </div>
                        </div>
                        <div class="container-bottom">
                            <div class="result">
                                <div class="b">
                                    <p>Phí vận chuyển:</p>
                                    <p>Miễn phí</p>
                                </div>
                                <div class="b">
                                    <p>Tổng tiền:</p>
                                    <p class="total-price"><%= cart != null ? cart.getTotalPrice() : 0 %> VND</p>
                                </div>
                            </div>
                            <button class="buy-btn" type="submit" data-tab="payment">ĐẶT HÀNG NGAY</button>
                            <p style="font-size: 12px">
                                Bạn có thể chọn hình thức thanh toán sau khi đặt hàng.
                            </p>
                        </div>
                    </div>
                </form>
            </div>
            <form method="POST" action="/WebBongDen_war/PayCartController">
                <div class="tab-content" id="payment" style="<%= (cus == null) ? "display: none;" : "" %>">
                    <div class="container-top">
                        <div class="section order-info">
                            <div class="order-info">
                                <h2>Thông tin đặt hàng</h2>
                                <p>
                                    <span>Khách hàng:</span>
                                    <span class="customer-name"><%= (cus != null) ? cus.getCusName() : "" %></span>
                                </p>
                                <p>
                                    <span>Số điện thoại:</span>
                                    <span class="customer-phone"><%= (cus != null) ? cus.getPhone() : "" %></span>
                                </p>
                                <p>
                                    <span>Địa chỉ nhận hàng:</span>
                                    <span class="customer-address"><%= (cus != null) ? cus.getAddress() : "" %></span>
                                </p>
                                <p>
                                    <span>Phí vận chuyển:</span>
                                    <span class="highlight shipping-fee">Miễn phí</span>
                                </p>
                                <p>
                                    <span>Tổng tiền:</span>
                                    <span class="highlight total-amount"><%= (cart != null) ? cart.getTotalPrice() : 0 %> VND</span>
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div class="discount-code">
                            <div class="form-field">
                                <input
                                        type="text"
                                        class="form-input"
                                        id="discount-code-cus"
                                        name="discountCode"
                                        placeholder=" "
                                />
                                <label for="discount-code-cus" class="form-label">Mã giảm giá</label>
                            </div>
                            <button type="button">Áp dụng mã</button>
                        </div>
                        <hr />
                        <div class="payment-method">
                            <h2>Chọn hình thức thanh toán</h2>
                            <div class="option">
                                <input type="radio" id="cod" name="paymentMethod" value="COD" checked />
                                <label for="cod">
                                    <i class="fas fa-box"></i> Thanh toán khi giao hàng (COD)
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="container-bottom">
                        <div class="result">
                            <div class="b">
                                <p>Phí vận chuyển:</p>
                                <p>Miễn phí</p>
                            </div>
                            <div class="b">
                                <p>Tổng tiền:</p>
                                <p class="total-price"><%= (cart != null) ? cart.getTotalPrice() : 0 %> VND</p>
                            </div>
                        </div>
                        <button class="buy-btn" type="submit">ĐẶT HÀNG NGAY</button>
                    </div>
                </div>
            </form>
            <div class="tab-content" id="finish" style="padding: 70px 0">
                <img
                        src="https://daphongthuyvn.com/files/assets/dat-hang-thanh-cong.jpg"
                        alt=""
                />
            </div>
        </div>
    </div>
    <%@ include file="../reuse/footer.jsp" %>
    <div id="custom-confirm" class="custom-confirm hidden">
        <div class="custom-confirm-content">
            <p id="confirm-message">
                Bạn có chắc chắn muốn thực hiện hành động này?
            </p>
            <div class="custom-confirm-actions">
                <button id="confirm-ok" class="btn-ok">Đồng ý</button>
                <button id="confirm-cancel" class="btn-cancel">Hủy</button>
            </div>
        </div>
    </div>
</div>
<script src="${pageContext.request.contextPath}/assets/Js/cart.js"></script>
</body>
</html>

