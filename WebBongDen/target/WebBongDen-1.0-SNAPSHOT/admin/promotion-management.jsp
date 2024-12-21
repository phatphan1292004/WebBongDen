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
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/admin/admin_css/promotionAdmin.css">
</head>
<body>
<div class="wrapper">
    <%@ include file="header.jsp" %>

    <div class="main">
        <%@ include file="sidebar.jsp" %>

        <div class="main-content">
            <div
                    class="tab-content"
                    id="promotion-content"
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

                    <div class="add-super-sale">
                        <!-- Khu vực thêm sản phẩm giảm giá -->
                        <div id="add-promotion-area">
                            <h3>THÊM CHƯƠNG TRÌNH GIẢM GIÁ</h3>
                            <form id="promotion-form">
                                <div class="form-group">
                                    <label for="promotion-name">Tên Chương Trình:</label>
                                    <input type="text" id="promotion-name" placeholder="Nhập tên chương trình" required />
                                </div>
                                <div class="form-group">
                                    <label for="promotion-description">Mô Tả:</label>
                                    <textarea id="promotion-description" placeholder="Nhập mô tả chương trình" required></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="promotion-end-date">Ngày Kết Thúc:</label>
                                    <input type="date" id="promotion-end-date" required />
                                </div>
                                <div class="form-group">
                                    <label for="promotion-discount">Mức Giảm Giá (%):</label>
                                    <input type="number" id="promotion-discount" min="1" max="100" placeholder="Nhập mức giảm" required />
                                </div>
                                <div class="form-group">
                                    <label for="promotion-gift">Quà Tặng:</label>
                                    <input type="text" id="promotion-gift" placeholder="Nhập quà tặng kèm" />
                                </div>
                                <div class="form-group">
                                    <button type="submit" id="add-promotion-btn">Lưu Chương Trình</button>
                                </div>
                            </form>
                        </div>

                        <div id="add-product-to-promotion-area">
                            <h3>THÊM SẢN PHẨM VÀO CHƯƠNG TRÌNH</h3>
                            <form id="product-to-promotion-form">
                                <div class="form-group">
                                    <label for="promotion-id">Chọn Chương Trình:</label>
                                    <select id="promotion-id" required>
                                        <option value="">Chọn chương trình</option>
                                        <!-- Các chương trình sẽ được thêm vào đây -->
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="product-id">ID Sản Phẩm:</label>
                                    <input type="text" id="product-id" placeholder="Nhập ID sản phẩm" required />
                                </div>
                                <div class="form-group">
                                    <button type="submit" id="add-product-to-promotion-btn">Thêm Sản Phẩm</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- Danh sách sản phẩm giảm giá -->
                    <div class="list-discount">
                        <h3>DANH SÁCH CHƯƠNG TRÌNH GIẢM GIÁ</h3>
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
        </div>
    </div>
</div>
<script type="module" src="${pageContext.request.contextPath}/admin/admin_js/productAdmin.js" defer></script>
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
</body>
</html>
