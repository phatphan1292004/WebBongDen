<%@ page import="com.example.webbongden.dao.model.SubCategory" %>
<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/19/2024
  Time: 8:25 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="./img/logo-fold.png" sizes="180x180" />
    <title>Admin</title>
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
    <link
            rel="stylesheet"
            href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css"
    />
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/reset.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/admin.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/admin/admin_css/productAdmin.css">
</head>
<body>
<div class="wrapper">
    <%@ include file="header.jsp" %>

    <div class="main">
        <%@ include file="sidebar.jsp" %>

        <div class="main-content">
            <div class="tab-content" id="product-management-content">
                <div class="stats-container">
                    <!-- Khối 1 -->
                    <div class="stat-box">
                        <div class="stat-image">
                            <img src="${pageContext.request.contextPath}/assets/img/adminpage/shopping-list.png" alt="" />
                        </div>
                        <div class="stat-text">
                            <h3>Tổng đơn hàng</h3>
                            <span id="total-orders">${totalOrders}</span>
                            <!-- Đổi id -->
                        </div>
                    </div>
                    <!-- Khối 2 -->
                    <div class="stat-box">
                        <div class="stat-image">
                            <img src="${pageContext.request.contextPath}/assets/img/adminpage/pending.png" alt="" />
                        </div>
                        <div class="stat-text">
                            <h3>Đơn hàng chưa xử lý</h3>
                            <span id="pending-orders">0</span>
                            <!-- Đổi id -->
                        </div>
                    </div>
                    <!-- Khối 3 -->
                    <div class="stat-box">
                        <div class="stat-image">
                            <img src="${pageContext.request.contextPath}/assets/img/adminpage/fast-delivery.png" alt="" />
                        </div>
                        <div class="stat-text">
                            <h3>Đơn hàng đang giao</h3>
                            <span id="in-transit-orders">0</span>
                            <!-- Đổi id -->
                        </div>
                    </div>
                </div>

                <div class="header-tab">
                    <div class="search-container">
                        <input
                                type="text"
                                id="order-search"
                                placeholder="Tìm kiếm đơn hàng..."
                        />
                        <button id="search-btn-order">Tìm kiếm</button>
                    </div>

                    <div style="display: flex; gap: 20px">
                        <select id="sort-select-order" class="sort-select">
                            <option value="" disabled selected>Tất cả</option>
                            <option value="Pending">Đơn hàng chưa duyệt</option>
                            <option value="InProgress">Đang giao hàng</option>
                            <option value="Completed">Đã giao</option>
                            <option value="Cancelled">Đã hủy</option>
                        </select>

                        <button id="sort-btn-order" class="sort-button">
                            <i class="fa-solid fa-sort"></i> Lọc
                        </button>
                    </div>
                </div>

                <div class="overlay" data-index="3">
                    <div class="invoice-details">
                        <div class="invoice-header">
                            <p>CHI TIẾT HÓA ĐƠN</p>
                            <div class="close-icon" id="close-invoice-details">
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div class="customer-info-invoice">
                            <p>THÔNG TIN KHÁCH HÀNG</p>
                            <p>
                                <strong>Tên:</strong>
                                <span id="customer-name">Nguyễn Văn A</span>
                            </p>
                            <p>
                                <strong>Địa chỉ:</strong>
                                <span id="customer-address">123 Đường ABC</span>
                            </p>
                            <p>
                                <strong>Số điện thoại:</strong>
                                <span id="customer-phone">0987654321</span>
                            </p>
                        </div>

                        <div class="order-items">
                            <h4>SẢN PHẨM MUA</h4>
                            <table class="items-table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên SP</th>
                                    <th>Số Lượng</th>
                                    <th>Đơn Giá</th>
                                    <th>Thành Tiền</th>
                                </tr>
                                </thead>
                                <tbody id="order-items-body">
                                <tr>
                                    <td>1</td>
                                    <td>Đèn Trang Trí Hoa Mỹ</td>
                                    <td>5</td>
                                    <td>2,000,000 VND</td>
                                    <td>10,000,000 VND</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Đèn Chùm Pha Lê</td>
                                    <td>2</td>
                                    <td>3,500,000 VND</td>
                                    <td>7,000,000 VND</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Đèn Led Đổi Màu</td>
                                    <td>10</td>
                                    <td>500,000 VND</td>
                                    <td>5,000,000 VND</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Đèn Tường Hiện Đại</td>
                                    <td>3</td>
                                    <td>1,200,000 VND</td>
                                    <td>3,600,000 VND</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Đèn Bàn Gốm Sứ</td>
                                    <td>4</td>
                                    <td>1,000,000 VND</td>
                                    <td>4,000,000 VND</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="total-price">
                            <p>
                                <strong>TỔNG TIỀN:</strong>
                                <span id="total-amount">0 VND</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Bảng danh sách sản phẩm -->
                <div class="tab-container">
                    <table class="product-table" id="order-table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tên KH</th>
                            <th>Ngày đặt hàng</th>
                            <th>Ngày giao dự kiến</th>
                            <th>Địa chỉ</th>
                            <th>Trạng thái</th>
                            <th>Hóa đơn</th>
                            <th>Thao tác</th>
                        </tr>
                        </thead>
                        <tbody id="order-table-body">
                        <tr>
                            <td>101</td>
                            <td>Nguyễn Văn A</td>
                            <td>2024-12-16</td>
                            <td>2024-12-20</td>
                            <td>123 Đường ABC, Quận 1, TP.HCM</td>
                            <td>Chờ xử lý</td>
                            <td><button class="view-details">Chi tiết</button></td>
                            <td>
                                <button class="approve-order" onclick="approveOrder('101')">
                                    <i class="fa-solid fa-check"></i>
                                </button>
                                <button class="reject-order" onclick="rejectOrder('101')">
                                    <i class="fa-solid fa-times"></i>
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="module" src="${pageContext.request.contextPath}/admin/admin_js/orderAdmin.js" defer></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
</body>
</html>
