<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/15/2024
  Time: 11:32 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
                <div class="nav-item" data-index="0">
                    <div class="nav-item-left">
                        <i class="fa-solid fa-tachometer-alt"></i>
                        <p>Tổng quan</p>
                    </div>
                </div>

                <div class="nav-item" data-index="1">
                    <div class="nav-item-left">
                        <i class="fa-solid fa-box"></i>
                        <p>Quản lý kho hàng</p>
                    </div>
                </div>

                <div class="nav-item" data-index="2">
                    <div class="nav-item-left">
                        <i class="fa-solid fa-users"></i>
                        <p>Quản lý khách hàng</p>
                    </div>
                </div>

                <div class="nav-item" data-index="3">
                    <div class="nav-item-left">
                        <i class="fa-solid fa-receipt"></i>
                        <p>Quản lý đơn hàng</p>
                    </div>
                </div>

                <div class="nav-item" data-index="4">
                    <div class="nav-item-left">
                        <i class="fa-solid fa-chart-line"></i>
                        <p>Thống kê doanh thu</p>
                    </div>
                </div>

                <div class="nav-item" data-index="5">
                    <div class="nav-item-header">
                        <div class="nav-item-left">
                            <i class="fa-solid fa-tags"></i>
                            <p>Quản lý khuyến mãi</p>
                        </div>
                    </div>
                </div>

                <div class="nav-item" data-index="6">
                    <div class="nav-item-header">
                        <div class="nav-item-left">
                            <i class="fa-solid fa-user"></i>
                            <p>Quản lý tài khoản</p>
                        </div>
                    </div>
                </div>
                <!-- Submenu-->
                <!-- <ul class="submenu-admin" id="submenu-admin">
                    <li class="menu-item" data-target="discount-management">
                      <i class="fa-solid fa-tags"></i><a href="#">Giảm giá</a>
                    </li>

                    <li class="menu-item" data-target="account-management">
                      <i class="fa-solid fa-user"></i
                      ><a href="#">Quản lý tài khoản</a>
                    </li>
                  </ul> -->
            </div>

            <div class="sidebar-bottom" id="sign-up">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                <p>Đăng xuất</p>
            </div>
        </div>

        <div class="main-content">
            <div class="tab-content" id="dashboard-content">
                <div class="card-revenue">
                    <div class="container-left">
                        <div class="card" id="revenue-card">
                            <div class="top-card">
                                <div class="top-card-title">
                                    <p>Tổng doanh thu</p>
                                    <div class="percentage up">↑ 6.71%</div>
                                </div>
                                <div class="value">107950.00</div>
                            </div>

                            <div class="bottom-card">
                                <div class="goal">
                                    <div class="goal-title">
                                        Monthly Goal
                                        <div class="goal-progress">70%</div>
                                    </div>
                                    <div class="bar blue">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" id="orders-card">
                            <div class="top-card">
                                <div class="top-card-title">
                                    <p>Số đơn hàng</p>
                                    <div class="percentage down">↓ 3.26%</div>
                                </div>
                                <div class="value">16</div>
                            </div>

                            <div class="bottom-card">
                                <div class="goal">
                                    <div class="goal-title">
                                        Monthly Goal
                                        <div class="goal-progress">60%</div>
                                    </div>
                                    <div class="bar green">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" id="customers-card">
                            <div class="top-card">
                                <div class="top-card-title">
                                    <p>Số khách hàng</p>
                                    <div class="percentage down">↓ 2.71%</div>
                                </div>
                                <div class="value">5</div>
                            </div>

                            <div class="bottom-card">
                                <div class="goal">
                                    <div class="goal-title">
                                        Monthly Goal
                                        <div class="goal-progress">45%</div>
                                    </div>
                                    <div class="bar yellow">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card" id="visits-card">
                            <div class="top-card">
                                <div class="top-card-title">
                                    <p>Lượt truy cập</p>
                                    <div class="percentage na">↑ N/A</div>
                                </div>
                                <div class="value">N/A</div>
                            </div>

                            <div class="bottom-card">
                                <div class="goal">
                                    <div class="goal-title">
                                        Monthly Goal
                                        <div class="goal-progress">50%</div>
                                    </div>
                                    <div class="bar purple">
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="top-product">
                        <div class="top-product-header">
                            <p>Top 5 sản phẩm bán chạy</p>
                        </div>
                        <div class="top-product-list">
                            <table class="top-product-table">
                                <thead>
                                <tr>
                                    <th>Tên SP</th>
                                    <th>Số lượng bán</th>
                                    <th>Tổng tiền thu được</th>
                                    <th>Số lượng tồn kho</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Đèn ngủ LED phong cách hiện đại DK04530</td>
                                    <td>150</td>
                                    <td>1,500,000 VND</td>
                                    <td>50</td>
                                </tr>
                                <tr>
                                    <td>Đèn bàn trang trí phong cách nghệ thuật DK04529</td>
                                    <td>120</td>
                                    <td>1,200,000 VND</td>
                                    <td>30</td>
                                </tr>
                                <tr>
                                    <td>Đèn LED chiếu sáng nội thất sang trọng DK04527</td>
                                    <td>100</td>
                                    <td>1,000,000 VND</td>
                                    <td>20</td>
                                </tr>
                                <tr>
                                    <td>
                                        Đèn quạt trần hiện đại cho không gian mở QV04525
                                    </td>
                                    <td>90</td>
                                    <td>900,000 VND</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Đèn quạt trần phòng bếp QV04523</td>
                                    <td>80</td>
                                    <td>800,000 VND</td>
                                    <td>5</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="card-container">
                    <div class="recent-order">
                        <div class="recent-order-header">
                            <p>Đơn hàng gần đây</p>
                        </div>
                        <table class="order-table">
                            <thead>
                            <tr>
                                <th>ID Khách Hàng</th>
                                <th>Khách Hàng</th>
                                <th>Ngày Đặt</th>
                                <th>Trạng Thái</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#CUST001</td>
                                <td class="customer-info">
                                    <img
                                            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                                            alt="Avatar"
                                            class="customer-avatar"
                                    />
                                    <span>Phạm Minh Duy</span>
                                </td>
                                <td>10/11/2024</td>
                                <td class="status completed">
                                    <span>Hoàn thành</span>
                                </td>
                            </tr>

                            <tr>
                                <td>#CUST002</td>
                                <td class="customer-info">
                                    <img
                                            src="https://images.unsplash.com/photo-1623582854588-d60de57fa33f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="Avatar"
                                            class="customer-avatar"
                                    />
                                    <span>Nguyễn Thị Lan</span>
                                </td>
                                <td>09/11/2024</td>
                                <td class="status pending">
                                    <span>Đang chờ</span>
                                </td>
                            </tr>

                            <tr>
                                <td>#CUST003</td>
                                <td class="customer-info">
                                    <img
                                            src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="Avatar"
                                            class="customer-avatar"
                                    />
                                    <span>Lê Anh Tuấn</span>
                                </td>
                                <td>08/11/2024</td>
                                <td class="status canceled">
                                    <span>Đã hủy</span>
                                </td>
                            </tr>

                            <tr>
                                <td>#CUST004</td>
                                <td class="customer-info">
                                    <img
                                            src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="Avatar"
                                            class="customer-avatar"
                                    />
                                    <span>Trần Quốc Khang</span>
                                </td>
                                <td>07/11/2024</td>
                                <td class="status completed">
                                    <span>Hoàn thành</span>
                                </td>
                            </tr>

                            <tr>
                                <td>#CUST005</td>
                                <td class="customer-info">
                                    <img
                                            src="https://media.istockphoto.com/id/1401980646/photo/3d-rendered-classic-sculpture-metaverse-avatar-with-network-of-low-poly-glowing-purple-lines.webp?a=1&b=1&s=612x612&w=0&k=20&c=ktqSUQjjCAu9keEW0BYhrnVSiOZQWqk7kv_x29NmHP0="
                                            alt="Avatar"
                                            class="customer-avatar"
                                    />
                                    <span>Võ Minh Tâm</span>
                                </td>
                                <td>06/11/2024</td>
                                <td class="status pending">
                                    <span>Đang chờ</span>
                                </td>
                            </tr>

                            <tr>
                                <td>#CUST006</td>
                                <td class="customer-info">
                                    <img
                                            src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="Avatar"
                                            class="customer-avatar"
                                    />
                                    <span>Đinh Thị Kim</span>
                                </td>
                                <td>05/11/2024</td>
                                <td class="status canceled">
                                    <span>Đã hủy</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="customer-chart">
                        <div class="cus-chart-header">
                            <p>Khách hàng</p>
                            Đơn vị tính: %
                        </div>
                        <canvas id="customerPieChart"></canvas>
                    </div>
                </div>

                <div class="card-container2">
                    <div class="revenue-year">
                        <div class="revenue-year-header">Doanh thu trong năm</div>
                        <canvas id="revenueChart"></canvas>
                    </div>

                    <div class="review-customer">
                        <div class="review-header">Đánh giá</div>
                        <div class="review-content">
                            <div class="review-item">
                                <div class="img-user">
                                    <img
                                            src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="User Image"
                                    />
                                </div>
                                <div class="user-info">
                                    <h4>Sarah Graves</h4>
                                    <p>Highly recommend</p>
                                </div>
                                <div class="rating">★★★★★</div>
                            </div>
                            <div class="review-item">
                                <div class="img-user">
                                    <img
                                            src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="User Image"
                                    />
                                </div>
                                <div class="user-info">
                                    <h4>Garbease sha</h4>
                                    <p>Awesome Pro</p>
                                </div>
                                <div class="rating">★★★★☆</div>
                            </div>

                            <div class="review-item">
                                <div class="img-user">
                                    <img
                                            src="https://images.unsplash.com/photo-1633957897986-70e83293f3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="User Image"
                                    />
                                </div>
                                <div class="user-info">
                                    <h4>Sarah Graves</h4>
                                    <p>Highly recommend</p>
                                </div>
                                <div class="rating">★★★★★</div>
                            </div>
                            <div class="review-item">
                                <div class="img-user">
                                    <img
                                            src="https://images.unsplash.com/photo-1636041282694-aa4e52370419?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="User Image"
                                    />
                                </div>
                                <div class="user-info">
                                    <h4>Garbease sha</h4>
                                    <p>Awesome Pro</p>
                                </div>
                                <div class="rating">★★★★☆</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="product-management-content">
                <div class="product-stats">
                    <div class="stat-card">
                        <div class="card-image">
                            <img src="./img/adminpage/product.png" alt="" />
                        </div>
                        <div class="card-content">
                            <h3>Tổng sản phẩm trong kho</h3>
                            <p id="total-stock">0</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="card-image">
                            <img src="./img/adminpage/category.png" alt="" />
                        </div>
                        <div class="card-content">
                            <h3>Số loại sản phẩm</h3>
                            <p id="total-categories">0</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="card-image">
                            <img src="./img/adminpage/out-of-stock.png" alt="" />
                        </div>
                        <div class="card-content">
                            <h3>Sản phẩm hết hàng</h3>
                            <p id="out-of-stock">0</p>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="card-image">
                            <img src="./img/adminpage/new-product.png" alt="" />
                        </div>
                        <div class="card-content">
                            <h3>Sản phẩm mới nhất</h3>
                            <p id="latest-product">Chưa có</p>
                        </div>
                    </div>
                </div>

                <div class="tab-content-container">
                    <div class="header-tab">
                        <div class="search-container">
                            <input
                                    type="text"
                                    id="product-search"
                                    placeholder="Tìm kiếm sản phẩm..."
                            />
                            <button id="search-btn-product">Tìm kiếm</button>
                        </div>
                        <button class="add-category">
                            <i class="fa-solid fa-plus"></i>
                            Thêm loại sản phẩm
                        </button>

                        <button class="add-product">
                            <i class="fa-solid fa-plus"></i>
                            Thêm sản phẩm
                        </button>
                    </div>

                    <!-- Overlay và Form thêm sản phẩm -->
                    <div class="overlay" id="overlay" data-index="0">
                        <div class="add-product-form" id="add-product-form">
                            <div class="form-header">
                                <p>Thêm sản phẩm mới</p>
                                <button class="close-btn" id="close-form">
                                    <i class="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                            <form id="product-form">
                                <div class="form-grid">
                                    <!-- Cột 1 -->
                                    <div class="form-column">
                                        <!-- ID sản phẩm -->
                                        <div class="form-group">
                                            <label for="product-id">ID Sản phẩm:</label>
                                            <input
                                                    type="text"
                                                    id="product-id"
                                                    placeholder="Nhập ID sản phẩm"
                                                    required
                                            />
                                        </div>

                                        <!-- Hình ảnh sản phẩm -->
                                        <div class="form-group">
                                            <label for="product-image">Link Hình ảnh:</label>
                                            <input
                                                    type="text"
                                                    id="product-image"
                                                    placeholder="Nhập link hình ảnh"
                                                    required
                                            />
                                        </div>

                                        <!-- Tên sản phẩm -->
                                        <div class="form-group">
                                            <label for="product-name">Tên sản phẩm:</label>
                                            <input
                                                    type="text"
                                                    id="product-name"
                                                    placeholder="Nhập tên sản phẩm"
                                                    required
                                            />
                                        </div>

                                        <!-- Giá sản phẩm -->
                                        <div class="form-group">
                                            <label for="product-price">Giá sản phẩm:</label>
                                            <input
                                                    type="number"
                                                    id="product-price"
                                                    placeholder="Nhập giá sản phẩm"
                                                    required
                                            />
                                        </div>
                                    </div>

                                    <!-- Cột 2 -->
                                    <div class="form-column">
                                        <!-- Loại sản phẩm -->
                                        <div class="form-group">
                                            <label for="product-category"
                                            >Danh mục sản phẩm:</label
                                            >
                                            <select id="product-category" required>
                                                <option value="">Chọn danh mục</option>
                                            </select>
                                        </div>

                                        <div class="form-group">
                                            <label for="product-subcategory"
                                            >Tên loại sản phẩm:</label
                                            >
                                            <input
                                                    type="text"
                                                    id="product-subcategory"
                                                    placeholder="Nhập tên loại sản phẩm chính xác"
                                                    required
                                            />
                                        </div>

                                        <!-- Ngày thêm sản phẩm -->
                                        <div class="form-group">
                                            <label for="product-date">Ngày thêm:</label>
                                            <input type="date" id="product-date" required />
                                        </div>

                                        <!-- Mô tả sản phẩm -->
                                        <div class="form-group">
                                            <label for="product-desc">Mô tả sản phẩm:</label>
                                            <textarea
                                                    id="product-desc"
                                                    placeholder="Nhập mô tả sản phẩm"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                <!-- Nút lưu -->
                                <div class="form-group">
                                    <button type="button" id="save-product" class="save-btn">
                                        Lưu sản phẩm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="overlay" data-index="1">
                        <div class="categories-container">
                            <!-- Nút Đóng lại -->
                            <div class="top-actions">
                                <i class="fa-solid fa-xmark"></i>
                            </div>

                            <div class="categories-content">
                                <!-- Danh sách danh mục -->
                                <div class="categories-list">
                                    <h3>Danh sách danh mục</h3>
                                    <ul id="category-list">
                                        <!-- Các danh mục -->
                                    </ul>
                                </div>

                                <!-- Form thêm danh mục -->
                                <div class="add-category-form">
                                    <h3>Thêm danh mục mới</h3>
                                    <form id="category-form">
                                        <label for="category-id">ID:</label>
                                        <input
                                                type="text"
                                                id="category-id"
                                                class="form-input"
                                                required
                                        />

                                        <label for="category-name">Tên danh mục:</label>
                                        <input
                                                type="text"
                                                id="category-name"
                                                class="form-input"
                                                required
                                        />

                                        <label for="parent-category">Danh mục cha:</label>
                                        <input
                                                type="text"
                                                id="parent-category"
                                                class="form-input"
                                        />

                                        <label for="stock-quantity">Số lượng tồn:</label>
                                        <input
                                                type="number"
                                                id="stock-quantity"
                                                class="form-input"
                                                required
                                        />

                                        <label for="category-desc">Mô tả:</label>
                                        <textarea
                                                id="category-desc"
                                                class="form-textarea"
                                                rows="3"
                                        ></textarea>

                                        <button
                                                type="button"
                                                id="add-category-btn"
                                                class="add-category-button"
                                        >
                                            Thêm danh mục
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Bảng danh sách sản phẩm -->
                    <div class="tab-container">
                        <table class="product-table" id="product-table">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Loại sản phẩm</th>
                                <th>Ngày thêm</th>
                                <th>Thao tác</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody id="product-table-body">
                            <!-- <tr>
                               <td>001</td>
                               <td>
                                 <a href="https://via.placeholder.com/50" target="_blank"
                                   >https://via.placeholder.com/50</a
                                 >
                               </td>
                               <td>Sản phẩm 1</td>
                               <td>200.000 VNĐ</td>
                               <td>Đèn LED</td>
                               <td>01/12/2024</td>
                               <td><button class="view-details">Xem chi tiết</button></td>
                               <td>
                                 <button class="edit-product">
                                   <i class="fa-regular fa-pen-to-square"></i>
                                 </button>
                               </td>
                               <td>
                                 <button class="delete-product">
                                   <i class="fa-regular fa-trash-can"></i>
                                 </button>
                               </td>
                             </tr> -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Khung chi tiết sản phẩm -->
                <div
                        class="product-details"
                        id="product-details"
                        style="display: none"
                >
                    <button id="close-details-btn">
                        <i class="fa-solid fa-arrow-left"></i> Quay lại
                    </button>
                    <!-- Phần tiêu đề và thông tin cơ bản -->
                    <div class="details-header">
                        <div class="product-info">
                            <div class="product-info-left">
                                <div class="product-image">
                                    <img
                                            id="product-image-main"
                                            src="https://denhoamy.vn/upload/attachment/5647den-chum-trang-tri-noi-that-phong-cach-my-dc03812-01.jpg"
                                            alt="Hình ảnh sản phẩm"
                                    />
                                </div>
                                <div class="basic-details">
                                    <p>
                                        <strong>Tên sản phẩm:</strong>
                                        <span id="product-name-details">Skinny Men Blazer</span>
                                    </p>
                                    <p>
                                        <strong>Mã sản phẩm:</strong>
                                        <span id="product-id-details">#5353</span>
                                    </p>
                                </div>
                            </div>
                            <button
                                    id="save-product-btn"
                                    class="save-button"
                                    style="display: none"
                            >
                                <i class="fa-solid fa-pen"></i> Lưu
                            </button>

                            <button id="edit-product-btn" class="edit-button">
                                <i class="fa-solid fa-pen"></i> Chỉnh sửa
                            </button>
                        </div>
                    </div>

                    <div class="details-main">
                        <!-- Phần thông tin thống kê -->
                        <div class="stats-container">
                            <div class="stat-box">
                                <div class="stat-image">
                                    <img src="./img/adminpage/sales.png" alt="" />
                                </div>
                                <div class="stat-text">
                                    <p>Số lượng bán được</p>
                                    <span id="sold-quantity">0</span>
                                </div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-image">
                                    <img src="./img/adminpage/inventory.png" alt="" />
                                </div>
                                <div class="stat-text">
                                    <p>Số lượng tồn kho</p>
                                    <span id="stock-quantity-product">0</span>
                                </div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-image">
                                    <img src="./img/adminpage/star.png" alt="" />
                                </div>
                                <div class="stat-text">
                                    <p>Rating</p>
                                    <span id="product-rating">0/5</span>
                                </div>
                            </div>
                            <div class="stat-box">
                                <div class="stat-image">
                                    <img src="./img/adminpage/chat.png" alt="" />
                                </div>
                                <div class="stat-text">
                                    <p>Đánh giá</p>
                                    <span id="product-reviews">0 đánh giá</span>
                                </div>
                            </div>
                        </div>

                        <!-- Phần chi tiết sản phẩm -->
                        <div class="details-content">
                            <div>
                                <strong>Id:</strong>
                                <span id="product-id-view">5353</span>
                                <input
                                        type="text"
                                        id="edit-product-id"
                                        value="5353"
                                        style="display: none"
                                        readonly
                                />
                            </div>

                            <div>
                                <strong>Hình ảnh:</strong>
                                <span id="product-image-view"
                                >https://denhoamy.vn/upload/attachment/5647den-chum-trang-tri-noi-that-phong-cach-my-dc03812-01.jpg</span
                                >
                                <input
                                        type="text"
                                        id="edit-product-image"
                                        style="display: none"
                                        accept="image/*"
                                />
                            </div>

                            <div>
                                <strong>Tên sản phẩm:</strong>
                                <span id="product-name-view">Skinny Men Blazer</span>
                                <input
                                        type="text"
                                        id="edit-product-name"
                                        value="Skinny Men Blazer"
                                        style="display: none"
                                />
                            </div>

                            <div>
                                <strong>Giá:</strong>
                                <span id="product-price-view">200,000 VNĐ</span>
                                <input
                                        type="text"
                                        id="edit-product-price"
                                        value="200,000 VNĐ"
                                        style="display: none"
                                />
                            </div>

                            <div>
                                <strong>Loại sản phẩm:</strong>
                                <span id="product-category-view">Thời trang nam</span>
                                <input
                                        type="text"
                                        id="edit-product-category"
                                        value="Thời trang nam"
                                        style="display: none"
                                />
                            </div>

                            <div>
                                <strong>Tình trạng:</strong>
                                <span id="product-status-view">Còn hàng</span>
                                <input
                                        type="text"
                                        id="edit-product-status"
                                        value="Còn hàng"
                                        style="display: none"
                                />
                            </div>

                            <div>
                                <strong>Mô tả:</strong>
                                <span id="product-description-view"
                                >Blazer phong cách trẻ trung, phù hợp cho các sự
                      kiện.</span
                                >
                                <textarea
                                        id="edit-product-description"
                                        style="display: none"
                                >
Blazer phong cách trẻ trung, phù hợp cho các sự kiện.</textarea
                                >
                            </div>

                            <div>
                                <strong>Ngày thêm:</strong>
                                <span id="product-date-view">2024-11-15</span>
                                <input
                                        type="date"
                                        id="edit-product-date"
                                        value="2024-11-15"
                                        style="display: none"
                                />
                            </div>

                            <div>
                                <strong>Giảm giá:</strong>
                                <span id="product-discount-view">10%</span>
                                <input
                                        type="text"
                                        id="edit-product-discount"
                                        value="10%"
                                        style="display: none"
                                />
                            </div>
                            <div>
                                <strong>Số lượng tồn kho:</strong>
                                <span id="product-stock-view">213</span>
                                <input
                                        type="text"
                                        id="edit-product-stock"
                                        value="213"
                                        style="display: none"
                                />
                            </div>
                            <div>
                                <strong>Đánh giá:</strong>
                                <span id="product-rating-view">5</span>
                                <input
                                        type="text"
                                        id="edit-product-rating"
                                        value="5"
                                        style="display: none"
                                />
                            </div>
                            <div>
                                <strong>Thời gian bảo hành:</strong>
                                <span id="product-warranty-view">12 tháng</span>
                                <input
                                        type="text"
                                        id="edit-product-warranty"
                                        value="12 tháng"
                                        style="display: none"
                                />
                            </div>
                            <div>
                                <strong>Chất liệu:</strong>
                                <span id="product-material-view">Nhôm</span>
                                <input
                                        type="text"
                                        id="edit-product-material"
                                        value="Nhôm"
                                        style="display: none"
                                />
                            </div>
                            <div>
                                <strong>Màu sắc:</strong>
                                <span id="product-color-view">Trắng</span>
                                <input
                                        type="text"
                                        id="edit-product-color"
                                        value="Trắng"
                                        style="display: none"
                                />
                            </div>
                            <div>
                                <strong>Tuổi thọ:</strong>
                                <span id="product-lifespan-view">5 năm</span>
                                <input
                                        type="text"
                                        id="edit-product-lifespan"
                                        value="5 năm"
                                        style="display: none"
                                />
                            </div>
                            <div>
                                <strong>Công suất:</strong>
                                <span id="product-power-view">60W</span>
                                <input
                                        type="text"
                                        id="edit-product-power"
                                        value="60W"
                                        style="display: none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="customer-management-content">
                <div class="stats-container">
                    <!-- Khối 1 -->
                    <div class="stat-box">
                        <div class="stat-image">
                            <img src="./img/adminpage/client.png" alt="" />
                        </div>
                        <div class="stat-text">
                            <h3>Tổng khách hàng trong tháng</h3>
                            <span id="monthly-total-customers">0</span>
                            <!-- Đổi id -->
                        </div>
                    </div>
                    <!-- Khối 2 -->
                    <div class="stat-box">
                        <div class="stat-image">
                            <img src="./img/adminpage/demand.png" alt="" />
                        </div>
                        <div class="stat-text">
                            <h3>Khách hàng mới</h3>
                            <span id="new-customers-today">0</span>
                            <!-- Đổi id -->
                        </div>
                    </div>
                    <!-- Khối 3 -->
                    <div class="stat-box">
                        <div class="stat-image">
                            <img src="./img/adminpage/rating.png" alt="" />
                        </div>
                        <div class="stat-text">
                            <h3>Khách hàng thường xuyên</h3>
                            <span id="regular-customers">0/5</span>
                            <!-- Đổi id -->
                        </div>
                    </div>
                    <!-- Khối 4 -->
                    <div class="stat-box">
                        <div class="stat-image">
                            <img src="./img/adminpage/chat.png" alt="" />
                        </div>
                        <div class="stat-text">
                            <h3>Phản hồi từ khách hàng</h3>
                            <span id="customer-feedback-count">0 đánh giá</span>
                            <!-- Đổi id -->
                        </div>
                    </div>
                </div>

                <div class="header-tab">
                    <div class="search-container">
                        <input
                                type="text"
                                id="customer-search"
                                placeholder="Tìm kiếm khách hàng..."
                        />
                        <button id="search-btn-cus">Tìm kiếm</button>
                    </div>

                    <div class="sort-dropdown">
                        <select id="sort-select-customer" class="sort-select">
                            <option value="" disabled selected>Chọn</option>
                            <option value="date-desc">Đăng kí gần đây</option>
                        </select>
                        <button id="sort-btn-cus" class="sort-button">
                            <i class="fa-solid fa-sort"></i> Sắp xếp
                        </button>
                    </div>
                </div>

                <!-- Bảng danh sách khách hàng -->
                <div class="tab-container">
                    <table class="customer-table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Tên khách hàng</th>
                            <th>Email</th>
                            <th>Số điện thoại</th>
                            <th>Địa chỉ</th>
                            <th>Ngày đăng ký</th>
                            <th>Lịch sử mua hàng</th>
                        </tr>
                        </thead>
                        <tbody id="customer-table-body">
                        <!-- <tr>
                            <td>C001</td>
                            <td>Nguyễn An</td>
                            <td>nguyenan@example.com</td>
                            <td>0123456789</td>
                            <td>123 Đường Lê Lợi, Quận 1, TP.HCM</td>
                            <td>15/10/2023</td>
                            <td>
                              <button class="view-details">Xem chi tiết</button>
                            </td>
                          </tr> -->
                        </tbody>
                    </table>
                </div>

                <div class="overlay" data-index="2">
                    <div class="purchase-history-details">
                        <div class="purchase-history-header">
                            <p>LỊCH SỬ MUA HÀNG</p>
                            <div class="close-icon" id="close-purchase-history-details">
                                <i class="fa-solid fa-xmark"></i>
                            </div>
                        </div>

                        <div class="customer-info-purchase-history">
                            <p>THÔNG TIN KHÁCH HÀNG</p>
                            <p>
                                <strong>Tên:</strong>
                                <span id="name-info">Nguyễn Văn A</span>
                            </p>
                            <p>
                                <strong>Địa chỉ:</strong>
                                <span id="address-info">123 Đường ABC</span>
                            </p>
                            <p>
                                <strong>Số điện thoại:</strong>
                                <span id="phone-info">0987654321</span>
                            </p>
                        </div>

                        <div class="order-items">
                            <h4>SẢN PHẨM MUA</h4>
                            <table class="items-table">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tên SP</th>
                                    <th>SL</th>
                                    <th>Đơn Giá</th>
                                    <th>Thành Tiền</th>
                                </tr>
                                </thead>
                                <tbody id="order-items-cus-body">
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
                                <span id="total-amount-order">29,600,000 VND</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="order-management-content">
                <div class="stats-container">
                    <!-- Khối 1 -->
                    <div class="stat-box">
                        <div class="stat-image">
                            <img src="./img/adminpage/shopping-list.png" alt="" />
                        </div>
                        <div class="stat-text">
                            <h3>Tổng đơn hàng</h3>
                            <span id="total-orders">0</span>
                            <!-- Đổi id -->
                        </div>
                    </div>
                    <!-- Khối 2 -->
                    <div class="stat-box">
                        <div class="stat-image">
                            <img src="./img/adminpage/pending.png" alt="" />
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
                            <img src="./img/adminpage/fast-delivery.png" alt="" />
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
                            <option value="pending-orders">Đơn hàng chưa duyệt</option>
                            <option value="in-progress-orders">Đang giao hàng</option>
                            <option value="completed-orders">Đã giao</option>
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
                        <tbody id="order-table-body"></tbody>
                    </table>
                </div>
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
                    id="discount-management"
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
                    id="account-management"
                    style="display: none"
            >
                <h2>QUẢN LÝ TÀI KHOẢN</h2>
                <p>
                    Đây là phần quản lý tài khoản. Bạn có thể thêm, chỉnh sửa hoặc
                    phân quyền tài khoản tại đây.
                </p>

                <!-- Khu vực thêm tài khoản -->
                <div class="account-management">
                    <!-- Form thêm tài khoản mới -->
                    <div class="account-form">
                        <h3>THÊM TÀI KHOẢN MỚI</h3>
                        <form id="add-account-form">
                            <!-- Tên đăng nhập -->
                            <div class="form-group">
                                <label for="username">Tên đăng nhập:</label>
                                <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Nhập tên đăng nhập"
                                        required
                                />
                            </div>

                            <!-- Email -->
                            <div class="form-group">
                                <label for="email">Email:</label>
                                <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Nhập email"
                                        required
                                />
                            </div>

                            <!-- Mật khẩu -->
                            <div class="form-group">
                                <label for="password">Mật khẩu:</label>
                                <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Nhập mật khẩu"
                                        required
                                />
                            </div>

                            <!-- Xác nhận mật khẩu -->
                            <div class="form-group">
                                <label for="confirm-password">Xác nhận mật khẩu:</label>
                                <input
                                        type="password"
                                        id="confirm-password"
                                        name="confirm-password"
                                        placeholder="Xác nhận mật khẩu"
                                        required
                                />
                            </div>

                            <!-- Vai trò -->
                            <div class="form-group">
                                <label for="role">Phân quyền:</label>
                                <select id="role" name="role" required>
                                    <option value="" disabled selected>Chọn vai trò</option>
                                    <option value="admin">Quản trị viên</option>
                                    <option value="editor">Người chỉnh sửa</option>
                                    <option value="customer">Khách hàng</option>
                                </select>
                            </div>

                            <!-- Nút thêm tài khoản -->
                            <button
                                    type="submit"
                                    id="add-account-btn"
                                    class="primary-button"
                            >
                                Thêm tài khoản
                            </button>
                        </form>
                    </div>
                </div>

                <div class="header-tab">
                    <div class="search-container">
                        <input
                                type="text"
                                id="account-search"
                                placeholder="Tìm kiếm tài khoản..."
                        />
                        <button id="search-btn-account">Tìm kiếm</button>
                    </div>
                </div>

                <!-- Danh sách tài khoản -->
                <div id="account-list">
                    <h3>DANH SÁCH TÀI KHOẢN</h3>
                    <table>
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên đăng nhập</th>
                            <th>Email</th>
                            <th>Phân quyền</th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
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
<script type="module" src="${pageContext.request.contextPath}/assets/Js/admin.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
</body>
</html>
