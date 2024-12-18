<%@ page import="com.example.webbongden.dao.model.Category" %>
<%@ page import="java.util.List" %>
<%@ page import="com.example.webbongden.dao.model.SubCategory" %>
<%@ page import="java.util.Map" %>
<%@ page import="java.util.HashMap" %><%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/15/2024
  Time: 11:32 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html lang="en">
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
    <style>
        .hidden {
            display: none;
        }
        .visible {
            display: block !important;
        }
    </style>
</head>
<body>
<div class="wrapper">
    <header class="header">
        <div class="header-left">
            <i class="fa-solid fa-bars"></i>
            <a href="index.html" class="header-logo">
                <img src="./img/logo-fold.png" alt="" />
            </a>
        </div>
        <div class="header-right">
            <div class="noti-icon">
                <i class="fa-regular fa-bell notification-bell shake"></i>
            </div>
            <div class="account">
                <img
                        src="https://images.unsplash.com/photo-1726554881162-ceeb7d68be8c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                />
            </div>
        </div>
    </header>

    <div class="main">
        <div class="sidebar">
            <div class="nav">
                <a href="admin?page=dashboard" class="nav-link" data-index="dashboard">
                    <div class="nav-item">
                        <i class="fa-solid fa-tachometer-alt"></i>
                        <p>Tổng quan</p>
                    </div>
                </a>
                <a href="admin?page=product-management" class="nav-link" data-index="product-management">
                    <div class="nav-item">
                        <i class="fa-solid fa-box"></i>
                        <p>Quản lý kho hàng</p>
                    </div>
                </a>
                <a href="admin?page=customer-management" class="nav-link" data-index="customer-management">
                    <div class="nav-item">
                        <i class="fa-solid fa-users"></i>
                        <p>Quản lý khách hàng</p>
                    </div>
                </a>
                <a href="admin?page=order-management" class="nav-link" data-index="order-management">
                    <div class="nav-item">
                        <i class="fa-solid fa-receipt"></i>
                        <p>Quản lý đơn hàng</p>
                    </div>
                </a>
                <a href="admin?page=revenue-statistics" class="nav-link" data-index="revenue-statistics">
                    <div class="nav-item">
                        <i class="fa-solid fa-chart-line"></i>
                        <p>Thống kê doanh thu</p>
                    </div>
                </a>
                <a href="admin?page=promotion" class="nav-link" data-index="promotion">
                    <div class="nav-item">
                        <i class="fa-solid fa-tags"></i>
                        <p>Quản lý khuyến mãi</p>
                    </div>
                </a>
                <a href="admin?page=account" class="nav-link" data-index="account">
                    <div class="nav-item">
                        <i class="fa-solid fa-user"></i>
                        <p>Quản lý tài khoản</p>
                    </div>
                </a>
            </div>

            <div class="sidebar-bottom" id="sign-up">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <p>Đăng xuất</p>
            </div>
        </div>

        <div class="main-content">
            <div class="tab-content" id="dashboard-content">
                <c:import url="dashboard.jsp" />
            </div>

            <div class="tab-content" id="product-management-content">
                <c:import url="product.jsp" />
            </div>


            <div class="tab-content" id="customer-management-content">
                <c:import url="customer.jsp" />
            </div>

            <div class="tab-content" id="order-management-content">
                <c:import url="order.jsp" />
            </div>
            <div class="tab-content" id="revenue-statistics-content">
                <div class="revenue-statistics">
                    <div class="revenue-header">
                        <p>THỐNG KÊ DOANH THU</p>
                    </div>
                    <div class="chart-selection">
                        <div class="left">
                            <label for="statistic-type">Chọn loại thống kê:</label>
                            <select id="statistic-type">
                                <option value="monthly">Thống kê theo tháng</option>
                                <option value="yearly">Thống kê theo năm</option>
                            </select>
                        </div>
                        <div class="right">
                            <div class="input-group" id="month-input-group">
                                <label for="month">Năm:</label>
                                <input
                                        type="number"
                                        id="month"
                                        placeholder="Nhập năm"
                                        required
                                />
                            </div>
                            <button id="submit-btn">Xem Thống Kê</button>
                        </div>
                    </div>

                    <!-- Biểu đồ -->
                    <div class="revenue-body">
                        <canvas id="revenue-chart"></canvas>
                    </div>
                </div>
            </div>
            <div
                    class="tab-content"
                    id="promotion-content"
                    style="display: none"
            >
                <div class="discount-container">
                    <h2>QUẢN LÝ PHIẾU GIẢM GIÁ</h2>
                    <p>Quản lý các phiếu giảm giá để thu hút khách hàng.</p>

                    <!-- Khu vực thêm phiếu giảm giá -->
                    <div id="add-discount-area">
                        <h3>THÊM PHIẾU GIẢM GIÁ</h3>
                        <form id="discount-form">
                            <div class="form-group">
                                <label for="discount-code">Mã giảm giá:</label>
                                <input
                                        type="text"
                                        id="discount-code"
                                        placeholder="Nhập mã giảm giá"
                                        required
                                />
                            </div>

                            <div class="form-group">
                                <label for="discount-percent">Mức giảm (%):</label>
                                <input
                                        type="number"
                                        id="discount-percent"
                                        min="1"
                                        max="100"
                                        placeholder="Nhập mức giảm"
                                        required
                                />
                            </div>

                            <div class="form-group">
                                <label for="product-discount">ID sản phẩm:</label>
                                <input
                                        type="text"
                                        id="product-discount"
                                        required
                                        placeholder="Nhập ID Sp"
                                />
                            </div>

                            <div class="form-group">
                                <label for="discount-expiry">Ngày hết hạn:</label>
                                <input type="date" id="discount-expiry" required />
                            </div>

                            <div class="form-group">
                                <button type="submit" id="add-discount-btn">
                                    THÊM PHIẾU GG
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Danh sách phiếu giảm giá -->
                <div class="list-discount">
                    <h3>DANH SÁCH PHIẾU GIẢM GIÁ</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>Mã giảm giá</th>
                            <th>Mức giảm (%)</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày hết hạn</th>
                            <th>DSSP</th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody id="discount-list">
                        <tr>
                            <td>SALE20</td>
                            <td>20%</td>
                            <td>12/09/2004</td>
                            <td>12/09/2024</td>
                            <td>
                                <button class="view-details">Xem chi tiết</button>
                            </td>
                            <td>
                                <button>Chỉnh sửa</button>
                                <button>Xóa</button>
                            </td>
                        </tr>
                        <tr>
                            <td>NEWYEAR30</td>
                            <td>30%</td>
                            <td>1/2/2024</td>
                            <td>15/03/2024</td>
                            <td>
                                <button class="view-details">Xem chi tiết</button>
                            </td>
                            <td>
                                <button>Chỉnh sửa</button>
                                <button>Xóa</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="super-sale-container">
                    <h2>QUẢN LÝ CHƯƠNG TRÌNH GIẢM GIÁ</h2>
                    <p>Quản lý các sản phẩm đang nằm trong chương trình giảm giá</p>

                    <!-- Khu vực thêm sản phẩm giảm giá -->
                    <div id="add-program-sale-area">
                        <h3>THÊM SẢN PHẨM GIẢM GIÁ</h3>
                        <form id="super-sale-form">
                            <div class="form-group">
                                <label for="program-id">ID:</label>
                                <input
                                        type="text"
                                        id="program-id"
                                        placeholder="Nhập ID chương trình"
                                        required
                                />
                            </div>

                            <div class="form-group">
                                <label for="end-date">Ngày kết thúc:</label>
                                <input type="date" id="end-date" required />
                            </div>

                            <div class="form-group">
                                <label for="program-name">Tên chương trình:</label>
                                <input
                                        type="text"
                                        id="program-name"
                                        placeholder="Nhập tên chương trình"
                                        required
                                />
                            </div>

                            <div class="form-group">
                                <label for="product-id-sale">ID sản phẩm:</label>
                                <input
                                        type="text"
                                        id="product-id-sale"
                                        placeholder="Nhập ID sản phẩm"
                                        required
                                />
                            </div>

                            <div class="form-group">
                                <button type="submit" id="add-saleproduct-btn">
                                    THÊM SẢN PHẨM
                                </button>
                            </div>
                        </form>
                    </div>

                    <!-- Danh sách sản phẩm giảm giá -->
                    <div class="list-discount">
                        <h3>DANH SÁCH SẢN PHẨM GIẢM GIÁ</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>ID chương trình</th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                                <th>Tên chương trình</th>
                                <th>DSSP</th>
                                <th>Hành động</th>
                            </tr>
                            </thead>
                            <tbody id="super-sale-list">
                            <!-- Dữ liệu mẫu -->
                            <tr>
                                <td>CT000</td>
                                <td>2024-11-01</td>
                                <td>2024-11-30</td>
                                <td>Siêu Sale Tháng 11</td>
                                <td>
                                    <button class="view-details">Xem chi tiết</button>
                                </td>
                                <td>
                                    <button class="edit-btn">Chỉnh sửa</button>
                                    <button class="delete-btn">Xóa</button>
                                </td>
                            </tr>
                            <tr>
                                <td>CT001</td>
                                <td>2024-12-01</td>
                                <td>2024-12-25</td>
                                <td>Giáng Sinh Rực Rỡ</td>
                                <td>
                                    <button class="view-details">Xem chi tiết</button>
                                </td>
                                <td>
                                    <button class="edit-btn">Chỉnh sửa</button>
                                    <button class="delete-btn">Xóa</button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="overlay" data-index="4">
                    <div class="modal">
                        <h2 id="modal-discount-code">Mã giảm giá: SALE20</h2>
                        <div class="product-list">
                            <h3>Danh sách sản phẩm:</h3>
                            <ul id="modal-product-list">
                                <!-- Sản phẩm sẽ được thêm động -->
                            </ul>
                        </div>
                        <button class="close-overlay-btn">Đóng</button>
                    </div>
                </div>
                <div class="overlay" data-index="5">
                    <div class="modal">
                        <h2 id="sale-modal-title">Chi tiết chương trình</h2>
                        <div class="product-list">
                            <p>
                                <strong>ID Chương trình:</strong>
                                <span id="sale-program-id"></span>
                            </p>
                            <p>
                                <strong>Ngày bắt đầu:</strong>
                                <span id="sale-start-date"></span>
                            </p>
                            <p>
                                <strong>Ngày kết thúc:</strong>
                                <span id="sale-end-date"></span>
                            </p>
                            <p>
                                <strong>Tên chương trình:</strong>
                                <span id="sale-program-name"></span>
                            </p>
                            <h3>Danh sách sản phẩm:</h3>
                            <ul id="sale-product-list">
                                <!-- Sản phẩm sẽ được thêm động -->
                            </ul>
                        </div>
                        <button class="close-overlay-btn">Đóng</button>
                    </div>
                </div>
            </div>

            <!-- Tab Quản lý tài khoản -->
            <div
                    class="tab-content"
                    id="account-content"
                    style="display: none"
            >
                <c:import url="account.jsp" />
            </div>
        </div>
    </div>

    <div class="notification-container hidden">
        <div class="noti-header">
            <p>Thông báo</p>
        </div>
        <div class="noti-content">
            <div class="none-noti" style="display: none">
                <i class="fa-regular fa-bell"></i>
                <p>Chưa có thông báo nào</p>
            </div>

            <ul class="notification-list-header">
                <!-- Thông báo sẽ được thêm vào đây qua JavaScript -->
            </ul>
        </div>
    </div>
    <div id="notification" class="notification hidden">
        <div class="noti-img">
            <img
                    id="noti-img"
                    src="./img/adminpage/checked.png"
                    alt="Notification Icon"
            />
        </div>
        <div class="noti-content">
            <span id="noti-message">This is a notification message!</span>
        </div>
    </div>
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
<script type="module" src="${pageContext.request.contextPath}/assets/Js/admin.js" defer></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
</body>
</html>

