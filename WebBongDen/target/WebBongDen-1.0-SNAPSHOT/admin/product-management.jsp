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
  <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/admin_css/productAdmin.css">
</head>
<style>
  #edit-product-btn, #save-product-btn {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    float: right;
    margin-bottom: 15px;
    border-radius: 4px;
  }

  .details-form {
    margin-top: 20px;
  }
</style>
<body>
<div class="wrapper">
  <%@ include file="header.jsp" %>

  <div class="main">
    <%@ include file="sidebar.jsp" %>

    <div class="main-content">
      <div class="tab-content" id="product-management-content">
        <div class="product-stats">8
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
              <p id="total-categories">${categoryQuantity}</p>
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
              <p id="latest-product">${newProductsInLast7Days}</p>
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
          <div class="overlay" id="overlay-add-product" data-index="0">
            <div class="add-product-form" id="add-product-form">
              <div class="form-header">
                <p>Thêm sản phẩm mới</p>
                <button class="close-btn" id="close-form">
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
              <form id="product-form" action="add-product" method="post">
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
                        <option value="<%= category.getName() %>">
                          <%= category.getName() %>
                        </option>
                        <%
                            }
                          }
                        %>
                      </select>
                    </div>

                    <div class="form-group">
                      <label for="product-image-url">Link hình ảnh sản phẩm:</label>
                      <input
                              type="text"
                              id="product-image-url"
                              name="imageUrl"
                              placeholder="Nhập link hình ảnh"
                              required
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

          <div class="overlay" id="overlay-add-category" data-index="1">
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
          <button id="close-details-btn">
            <i class="fa-solid fa-arrow-left"></i> Quay lại
          </button>
          <!-- Phần tiêu đề và thông tin cơ bản -->
          <div class="details-header">
            <div class="product-info">
              <div class="product-info-left">
                <div class="product-image">
                  <img id="product-image-main" src="" alt="Hình ảnh sản phẩm" />
                </div>
                <div class="basic-details">
                  <p>
                    <strong>Tên sản phẩm:</strong>
                    <span id="product-name-details"></span>
                  </p>
                  <p>
                    <strong>Mã sản phẩm:</strong>
                    <span id="product-id-details"></span>
                  </p>
                </div>
              </div>
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
              <button id="edit-product-btn" class="edit-product">
                <i class="fa-solid fa-pen"></i> Chỉnh sửa
              </button>
              <form class="details-form" action="edit-product-detail" method="post">
                <button id="save-product-btn" class="save-button" type="submit" style="display: none;">
                  <i class="fa-solid fa-pen"></i> Lưu
                </button>
                <div>
                  <strong>Id:</strong>
                  <span id="product-id-view"></span>
                  <input type="text" id="edit-product-id" value="" style="display: none" name="id" readonly />
                </div>

                <div>
                  <strong>Hình ảnh:</strong>
                  <span id="product-image-view"></span>
                  <input type="text" id="edit-product-image" style="display: none" name="mainImageUrl"/>
                </div>

                <div>
                  <strong>Tên sản phẩm:</strong>
                  <span id="product-name-view"></span>
                  <input type="text" id="edit-product-name" value="" name="productName" style="display: none" />
                </div>

                <div>
                  <strong>Giá:</strong>
                  <span id="product-price-view"></span>
                  <input type="text" id="edit-product-price" value="" name = unitPrice style="display: none" />
                </div>

                <div>
                  <strong>Loại sản phẩm:</strong>
                  <span id="product-category-view">$</span>
                  <select id="edit-product-category" name="subCategoryId" style="display: none" required>
                    <option value="">Chọn danh mục</option>
                    <!-- Duyệt qua danh sách categories -->
                    <%
                      List<SubCategory> subCategoriess = (List<SubCategory>) request.getAttribute("listSubCate");
                      if (subCategoriess != null) {
                        for (SubCategory category : subCategoriess) {
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

                <div>
                  <strong>Tình trạng:</strong>
                  <span id="product-status-view"></span>
                  <input type="text" id="edit-product-status" value="" name="productStatus" style="display: none" />
                </div>

                <div>
                  <strong>Mô tả:</strong>
                  <span id="product-description-view"></span>
                  <textarea id="edit-product-description" name="description" style="display: none"></textarea>
                </div>

                <div>
                  <strong>Ngày thêm:</strong>
                  <span id="product-date-view"></span>
                  <input type="date" id="edit-product-date" name="createdAt" value="" style="display: none" />
                </div>

                <div>
                  <strong>Giảm giá:</strong>
                  <span id="product-discount-view"></span>
                  <input type="text" id="edit-product-discount" name="discountPercent" value="%" style="display: none" />
                </div>

                <div>
                  <strong>Số lượng tồn kho:</strong>
                  <span id="product-stock-view"></span>
                  <input type="text" id="edit-product-stock" name="stockQuantity" value="" style="display: none" />
                </div>

                <div>
                  <strong>Đánh giá:</strong>
                  <span id="product-rating-view"></span>
                  <input type="text" id="edit-product-rating" name="rating" value="" style="display: none" />
                </div>

                <div>
                  <strong>Thời gian bảo hành:</strong>
                  <span id="product-warranty-view"></span>
                  <input type="text" id="edit-product-warranty" name="warrantyPeriod" value="" style="display: none" />
                </div>

                <div>
                  <strong>Chất liệu:</strong>
                  <span id="product-material-view"></span>
                  <input type="text" id="edit-product-material" name="material" value="" style="display: none" />
                </div>

                <div>
                  <strong>Màu sắc:</strong>
                  <span id="product-color-view"></span>
                  <input type="text" id="edit-product-color" name="lightColor" value="" style="display: none" />
                </div>

                <div>
                  <strong>Tuổi thọ:</strong>
                  <span id="product-lifespan-view"></span>
                  <input type="text" id="edit-product-lifespan" name="usageAge" value="" style="display: none" />
                </div>

                <div>
                  <strong>Công suất:</strong>
                  <span id="product-power-view"></span>
                  <input type="text" id="edit-product-power" name="voltage" value="" style="display: none" />
                </div>
              </form>
            </div>
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
