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
<html>
<head>
    <title>Title</title>
</head>
<body>
    <div class="product-stats">
        <div class="stat-card">
            <div class="card-image">
                <img src="${pageContext.request.contextPath}/assets/img/adminpage/product.png" alt="" />
            </div>
            <div class="card-content">
                <h3>Tổng sản phẩm trong kho</h3>
                <p id="total-stock">${totalProducts}</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="card-image">
                <img src="${pageContext.request.contextPath}/assets/img/adminpage/category.png" alt="" />
            </div>
            <div class="card-content">
                <h3>Số loại sản phẩm</h3>
                <p id="total-categories">${cateQuantity}</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="card-image">
                <img src="${pageContext.request.contextPath}/assets/img/adminpage/out-of-stock.png" alt="" />

            </div>
            <div class="card-content">
                <h3>Sản phẩm hết hàng</h3>
                <p id="out-of-stock">${outOfStockProducts}</p>
            </div>
        </div>
        <div class="stat-card">
            <div class="card-image">
                <img src="${pageContext.request.contextPath}/assets/img/adminpage/new-product.png" alt="" />
            </div>
            <div class="card-content">
                <h3>Sản phẩm mới nhất</h3>
                <p id="latest-product">${newProducts}</p>
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
                <form id="product-form" action="/admin" method="post" enctype="multipart/form-data">
                    <div class="form-grid">
                        <!-- Cột 1 -->
                        <div class="form-column">
                            <!-- Tên sản phẩm -->
                            <div class="form-group">
                                <label for="product-name">Tên sản phẩm:</label>
                                <input
                                        type="text"
                                        id="product-name"
                                        name="productName"
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
                                        name="unitPrice"
                                        placeholder="Nhập giá sản phẩm"
                                        required
                                />
                            </div>

                            <!-- Số lượng sản phẩm -->
                            <div class="form-group">
                                <label for="product-stock">Số lượng:</label>
                                <input
                                        type="number"
                                        id="product-stock"
                                        name="stockQuantity"
                                        placeholder="Nhập số lượng sản phẩm"
                                        required
                                />
                            </div>

                            <!-- Trạng thái sản phẩm -->
                            <div class="form-group">
                                <label for="product-status">Trạng thái sản phẩm:</label>
                                <select id="product-status" name="productStatus" required>
                                    <option value="">Chọn trạng thái</option>
                                    <option value="Available">Còn hàng</option>
                                    <option value="Unavailable">Hết hàng</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="product-category">Danh mục sản phẩm:</label>
                                <select id="product-category" name="categoryName" required>
                                    <option value="">Chọn danh mục</option>
                                    <!-- Duyệt qua danh sách categories -->
                                    <%
                                        List<SubCategory> subCategories = (List<SubCategory>) request.getAttribute("listSubCate");
                                        if (subCategories != null) {
                                            for (SubCategory category : subCategories) {
                                    %>
                                    <option value="<%= category.getId() %>">
                                        <%= category.getName() %>
                                    </option>
                                    <%
                                            }
                                        }
                                    %>
                                </select>
                            </div>

                            <!-- Ngày thêm sản phẩm -->
                            <div class="form-group">
                                <label for="product-date">Ngày thêm:</label>
                                <input type="date" id="product-date" name="createdAt" required />
                            </div>
                            <!-- Hình ảnh sản phẩm -->
                            <div class="form-group">
                                <label for="product-images">Hình ảnh sản phẩm:</label>
                                <input
                                        type="file"
                                        id="product-images"
                                        name="images"
                                        multiple
                                />
                            </div>
                        </div>

                        <!-- Cột 2 -->
                        <div class="form-column">

                            <!-- Mô tả sản phẩm -->
                            <div class="form-group">
                                <label for="product-desc">Mô tả sản phẩm:</label>
                                <textarea
                                        id="product-desc"
                                        name="description"
                                        placeholder="Nhập mô tả sản phẩm"
                                ></textarea>
                            </div>

                            <!-- Thời gian bảo hành -->
                            <div class="form-group">
                                <label for="product-warranty">Thời gian bảo hành:</label>
                                <input
                                        type="text"
                                        id="product-warranty"
                                        name="warrantyPeriod"
                                        placeholder="Nhập thời gian bảo hành"
                                />
                            </div>

                            <!-- Màu sắc ánh sáng -->
                            <div class="form-group">
                                <label for="product-light-color">Màu ánh sáng:</label>
                                <input
                                        type="text"
                                        id="product-light-color"
                                        name="lightColor"
                                        placeholder="Nhập màu ánh sáng"
                                />
                            </div>

                            <!-- Chất liệu sản phẩm -->
                            <div class="form-group">
                                <label for="product-material">Chất liệu:</label>
                                <input
                                        type="text"
                                        id="product-material"
                                        name="material"
                                        placeholder="Nhập chất liệu sản phẩm"
                                />
                            </div>

                            <!-- Điện áp sản phẩm -->
                            <div class="form-group">
                                <label for="product-voltage">Điện áp:</label>
                                <input
                                        type="text"
                                        id="product-voltage"
                                        name="voltage"
                                        placeholder="Nhập điện áp sản phẩm"
                                />
                            </div>

                            <!-- Tuổi thọ sử dụng -->
                            <div class="form-group">
                                <label for="product-usage-age">Tuổi thọ sử dụng:</label>
                                <input
                                        type="text"
                                        id="product-usage-age"
                                        name="usageAge"
                                        placeholder="Nhập tuổi thọ sản phẩm"
                                />
                            </div>

                            <!-- Giảm giá -->
                            <div class="form-group">
                                <label for="product-discount-add">Phần trăm giảm giá:</label>
                                <input
                                        type="number"
                                        id="product-discount-add"
                                        name="discountPercent"
                                        placeholder="Nhập phần trăm giảm giá"
                                        step="0.1"
                                        min="0"
                                />
                            </div>
                        </div>
                    </div>

                    <!-- Nút lưu -->
                    <div class="form-group">
                        <button type="submit" id="save-product" class="save-btn">
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

                </tbody>
            </table>
        </div>
    </div>

    <!-- Khung chi tiết sản phẩm -->

    <div class="product-details" id="product-details" style="display: none;">
        <button id="close-details-btn" onclick="window.location.href='admin?page=product-management';">
            <i class="fa-solid fa-arrow-left"></i> Quay lại
        </button>
        <!-- Phần tiêu đề và thông tin cơ bản -->
        <div class="details-header">
            <div class="product-info">
                <div class="product-info-left">
                    <div class="product-image">
                        <img id="product-image-main" src="${productViewDetail.mainImageUrl}" alt="Hình ảnh sản phẩm" />
                    </div>
                    <div class="basic-details">
                        <p>
                            <strong>Tên sản phẩm:</strong>
                            <span id="product-name-details">${productViewDetail.productName}</span>
                        </p>
                        <p>
                            <strong>Mã sản phẩm:</strong>
                            <span id="product-id-details">${productViewDetail.id}</span>
                        </p>
                    </div>
                </div>
                <button id="save-product-btn" class="save-button" style="display: none;">
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
                        <%--                                    <span id="sold-quantity">${productViewDetail.soldQuantity}</span>--%>
                    </div>
                </div>
                <div class="stat-box">
                    <div class="stat-image">
                        <img src="./img/adminpage/inventory.png" alt="" />
                    </div>
                    <div class="stat-text">
                        <p>Số lượng tồn kho</p>
                        <span id="stock-quantity-product">${productViewDetail.stockQuantity}</span>
                    </div>
                </div>
                <div class="stat-box">
                    <div class="stat-image">
                        <img src="./img/adminpage/star.png" alt="" />
                    </div>
                    <div class="stat-text">
                        <p>Rating</p>
                        <span id="product-rating">${productViewDetail.rating}</span>
                    </div>
                </div>
                <div class="stat-box">
                    <div class="stat-image">
                        <img src="./img/adminpage/chat.png" alt="" />
                    </div>
                    <div class="stat-text">
                        <p>Đánh giá</p>
                        <%--                                    <span id="product-reviews">${productViewDetail.reviewsCount} đánh giá</span>--%>
                    </div>
                </div>
            </div>

            <!-- Phần chi tiết sản phẩm -->
            <div class="details-content">
                <div>
                    <strong>Id:</strong>
                    <span id="product-id-view">${productViewDetail.id}</span>
                    <input type="text" id="edit-product-id" value="${productViewDetail.id}" style="display: none" readonly />
                </div>

                <div>
                    <strong>Hình ảnh:</strong>
                    <span id="product-image-view">${productViewDetail.mainImageUrl}</span>
                    <input type="text" id="edit-product-image" style="display: none" accept="image/*" />
                </div>

                <div>
                    <strong>Tên sản phẩm:</strong>
                    <span id="product-name-view">${productViewDetail.productName}</span>
                    <input type="text" id="edit-product-name" value="${productViewDetail.productName}" style="display: none" />
                </div>

                <div>
                    <strong>Giá:</strong>
                    <span id="product-price-view">${productViewDetail.discountedPrice} VNĐ</span>
                    <input type="text" id="edit-product-price" value="${productViewDetail.unitPrice} VNĐ" style="display: none" />
                </div>

                <div>
                    <strong>Loại sản phẩm:</strong>
                    <span id="product-category-view">${productViewDetail.categoryName}</span>
                    <input type="text" id="edit-product-category" value="${productViewDetail.subCategoryId}" style="display: none" />
                </div>

                <div>
                    <strong>Tình trạng:</strong>
                    <span id="product-status-view">${productViewDetail.productStatus}</span>
                    <input type="text" id="edit-product-status" value="${productViewDetail.productStatus}" style="display: none" />
                </div>

                <div>
                    <strong>Mô tả:</strong>
                    <span id="product-description-view">${productViewDetail.description}</span>
                    <textarea id="edit-product-description" style="display: none">${productViewDetail.description}</textarea>
                </div>

                <div>
                    <strong>Ngày thêm:</strong>
                    <span id="product-date-view">${productViewDetail.createdAt}</span>
                    <input type="date" id="edit-product-date" value="${productViewDetail.createdAt}" style="display: none" />
                </div>

                <div>
                    <strong>Giảm giá:</strong>
                    <span id="product-discount-view">${productViewDetail.discountPercent}</span>
                    <input type="text" id="edit-product-discount" value="${productViewDetail.discountPercent}%" style="display: none" />
                </div>

                <div>
                    <strong>Số lượng tồn kho:</strong>
                    <span id="product-stock-view">${productViewDetail.stockQuantity}</span>
                    <input type="text" id="edit-product-stock" value="${productViewDetail.stockQuantity}" style="display: none" />
                </div>

                <div>
                    <strong>Đánh giá:</strong>
                    <span id="product-rating-view">${productViewDetail.rating}</span>
                    <input type="text" id="edit-product-rating" value="${productViewDetail.rating}" style="display: none" />
                </div>

                <div>
                    <strong>Thời gian bảo hành:</strong>
                    <span id="product-warranty-view">${productViewDetail.warrantyPeriod}</span>
                    <input type="text" id="edit-product-warranty" value="${productViewDetail.warrantyPeriod}" style="display: none" />
                </div>

                <div>
                    <strong>Chất liệu:</strong>
                    <span id="product-material-view">${productViewDetail.material}</span>
                    <input type="text" id="edit-product-material" value="${productViewDetail.material}" style="display: none" />
                </div>

                <div>
                    <strong>Màu sắc:</strong>
                    <span id="product-color-view">${productViewDetail.lightColor}</span>
                    <input type="text" id="edit-product-color" value="${productViewDetail.lightColor}" style="display: none" />
                </div>

                <div>
                    <strong>Tuổi thọ:</strong>
                    <span id="product-lifespan-view">${productViewDetail.usageAge}</span>
                    <input type="text" id="edit-product-lifespan" value="${productViewDetail.usageAge}" style="display: none" />
                </div>

                <div>
                    <strong>Công suất:</strong>
                    <span id="product-power-view">${productViewDetail.voltage}</span>
                    <input type="text" id="edit-product-power" value="${productViewDetail.voltage}" style="display: none" />
                </div>
            </div>
        </div>
</div>
</body>
</html>
