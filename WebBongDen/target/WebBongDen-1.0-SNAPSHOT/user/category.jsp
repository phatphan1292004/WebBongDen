<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/15/2024
  Time: 10:21 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="./img/logo-fold.png" sizes="180x180">
    <title>Danh mục</title>
    <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
    />
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
            crossorigin="anonymous"
    />
    <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
    />
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <!-- jQuery UI -->

    <link
            rel="stylesheet"
            href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
    />
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
    />
    <script
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
    ></script>
    <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
            integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
            crossorigin="anonymous"
    ></script>
    <script src="https://cdn.jsdelivr.net/npm/paginationjs/dist/pagination.min.js"></script>
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/paginationjs/dist/pagination.css"
    />
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/Detail.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/header-footer.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/assets/css/reset.css">
</head>
<body>
<!-- Header -->

<div class="wrapper">
    <!-- Header -->
    <%@ include file="../reuse/header.jsp" %>
    <div class="main">
        <div class="container">
            <div class="breadcrumb">
                <i class="fa-solid fa-house"></i>
                <a href="index.html">Trang chủ</a>
                <span class="separator">›</span>
                <a href="#">Sản phẩm</a>
                <span class="separator">›</span>
                <span>ĐÈN CHÙM CỔ ĐIỂN</span>
            </div>
        </div>
        <section class="shop_grid_area section-padding-80">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-4 col-lg-3 d-none d-md-block">
                        <div class="shop_sidebar_area">
                            <!-- ##### Single Widget ##### -->
                            <div class="category-container">
                                <div class="category-header">
                                    <i class="fa-solid fa-list"></i>
                                    <p>Danh mục</p>
                                </div>
                                <ul class="category-list">
                                    <!-- Duyệt qua danh sách categories -->
                                    <c:forEach var="category" items="${categories}">
                                        <li class="a">
                                            <a class="cate-item" href="javascript:void(0);">
                                                <p>
                                                    <span>${category.categoryName}</span>
                                                </p>
                                                <i class="fa-solid fa-caret-down"></i>
                                            </a>
                                            <ul class="subcategory-list">
                                                <c:forEach var="subCategory" items="${subCategoriesMap[category.id]}">
                                                    <li class="sub-category-item">
                                                        <a href="CategoryController?categoryId=${category.id}&subCategoryId=${subCategory.id}">
                                                            <span>${subCategory.name}</span>
                                                        </a>
                                                    </li>
                                                </c:forEach>
                                            </ul>
                                        </li>
                                    </c:forEach>
                                </ul>
                            </div>
                        </div>
                        <div class="news-latest box-layer mb-3">
                            <div class="sidebarblog-title title_block">TIN TỨC MỚI</div>
                            <div class="list-news-latest">
                                <div class="item-article clearfix">
                                    <div class="post-image">
                                        <a href="#">
                                            <img
                                                    class="lazyload"
                                                    src="https://denhoamy.vn/upload/news/3018den-aeon-mall-le-chan-hai-phong-1.jpg"
                                                    alt="Đèn Hoa Mỹ cung cấp đèn trang trí cho Trung tâm thương mại Aeon Mall Lê Chân Hải Phòng"
                                            />
                                        </a>
                                    </div>
                                    <div class="post-content">
                                        <div class="title max">
                                            <a
                                                    href="/tin-tuc/den-hoa-my-thi-cong-den-trang-tri-cho-trung-tam-thuong-mai-aeon-mall-le-chan-hai-phong-n87.html"
                                            >
                                                Đèn Hoa Mỹ cung cấp đèn trang trí cho Trung tâm
                                                thương mại Aeon Mall Lê Chân Hải Phòng
                                            </a>
                                        </div>
                                        <div class="date">
                                            <i class="fa fa-calendar-alt"></i> 09/01/2024
                                        </div>
                                    </div>
                                </div>

                                <div class="item-article clearfix">
                                    <div class="post-image">
                                        <a href="#">
                                            <img
                                                    class="lazyload"
                                                    src="https://denhoamy.vn/upload/news/5664screenshot1622455555.png"
                                                    alt="Đèn Hoa Mỹ cung cấp đèn trang trí cho Trung tâm thương mại Aeon Mall Lê Chân Hải Phòng"
                                            />
                                        </a>
                                    </div>
                                    <div class="post-content">
                                        <div class="title max">
                                            <a
                                                    href="/tin-tuc/den-hoa-my-thi-cong-den-trang-tri-cho-trung-tam-thuong-mai-aeon-mall-le-chan-hai-phong-n87.html"
                                            >
                                                Những mẫu đèn chùm pha lê hiện đại sang trọng cho
                                                nội thất
                                            </a>
                                        </div>
                                        <div class="date">
                                            <i class="fa fa-calendar-alt"></i> 09/01/2024
                                        </div>
                                    </div>
                                </div>

                                <div class="item-article clearfix">
                                    <div class="post-image">
                                        <a href="#">
                                            <img
                                                    class="lazyload"
                                                    src="https://denhoamy.vn/upload/news/54743470den-op-tran-hien-dai-19097.jpg"
                                                    alt="Đèn Hoa Mỹ cung cấp đèn trang trí cho Trung tâm thương mại Aeon Mall Lê Chân Hải Phòng"
                                            />
                                        </a>
                                    </div>
                                    <div class="post-content">
                                        <div class="title max">
                                            <a
                                                    href="/tin-tuc/den-hoa-my-thi-cong-den-trang-tri-cho-trung-tam-thuong-mai-aeon-mall-le-chan-hai-phong-n87.html"
                                            >
                                                60+ MẪU ĐÈN TRANG TRÍ PHÒNG KHÁCH CAO CẤP
                                            </a>
                                        </div>
                                        <div class="date">
                                            <i class="fa fa-calendar-alt"></i> 09/01/2024
                                        </div>
                                    </div>
                                </div>

                                <div class="item-article clearfix">
                                    <div class="post-image">
                                        <a href="#">
                                            <img
                                                    class="lazyload"
                                                    src="https://denhoamy.vn/upload/news/16291329den-nghe-thuat-1.jpg"
                                                    alt="Đèn Hoa Mỹ cung cấp đèn trang trí cho Trung tâm thương mại Aeon Mall Lê Chân Hải Phòng"
                                            />
                                        </a>
                                    </div>
                                    <div class="post-content">
                                        <div class="title max">
                                            <a
                                                    href="/tin-tuc/den-hoa-my-thi-cong-den-trang-tri-cho-trung-tam-thuong-mai-aeon-mall-le-chan-hai-phong-n87.html"
                                            >
                                                50+ mẫu đèn trang trí quán cafe độc đáo hot nhất
                                            </a>
                                        </div>
                                        <div class="date">
                                            <i class="fa fa-calendar-alt"></i> 09/01/2024
                                        </div>
                                    </div>
                                </div>

                                <div class="item-article clearfix">
                                    <div class="post-image">
                                        <a href="#">
                                            <img
                                                    class="lazyload"
                                                    src="https://denhoamy.vn/upload/news/2922khuyen-mai-den-trang-tri-giang-sinh-bviet.jpg"
                                                    alt="Đèn Hoa Mỹ cung cấp đèn trang trí cho Trung tâm thương mại Aeon Mall Lê Chân Hải Phòng"
                                            />
                                        </a>
                                    </div>
                                    <div class="post-content">
                                        <div class="title max">
                                            <a
                                                    href="/tin-tuc/den-hoa-my-thi-cong-den-trang-tri-cho-trung-tam-thuong-mai-aeon-mall-le-chan-hai-phong-n87.html"
                                            >
                                                Khuyến mãi đèn trang trí nghệ thuật mừng ngày quốc
                                                tế phụ nữ 8-3
                                            </a>
                                        </div>
                                        <div class="date">
                                            <i class="fa fa-calendar-alt"></i> 09/01/2024
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-8 col-lg-9">
                        <div class="shop_grid_product_area">
                            <div class="row">
                                <div class="col-12">
                                    <div
                                            class="product-topbar d-flex align-items-center justify-content-between"
                                    >
                                        <!-- Total Products -->
                                        <div class="total-products">
                                            <p><span>150</span> Sản phẩm được tìm thấy</p>
                                        </div>
                                        <!-- Sorting -->
                                        <div class="product-sorting d-flex align-items-center">
                                            <p>Sắp xếp :</p>
                                            <form action="CategoryController" method="get" id="sortingForm">
                                                <select name="select" id="sortByselect" onchange="submitForm()">
                                                    <option value="">-- Chọn sắp xếp --</option> <!-- Thêm option mặc định không có giá trị -->
                                                    <option value="price_desc">Giá từ cao đến thấp</option>
                                                    <option value="price_asc">Giá từ thấp đến cao</option>
                                                    <option value="newest">Mới nhất</option>
                                                    <option value="best_selling">Sản phẩm bán chạy</option>
                                                </select>
                                            </form>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div class="row">
                            <!-- Single Product -->
                                <c:forEach var="product" items="${products}">
                                    <div class="col-6 col-md-4 col-lg-3 mb-4">
                                        <div class="product-item">
                                            <a href="home/product-detail?id=${product.id}">
                                                <div class="img">
                                                    <img src="${product.imageUrl}" alt="${product.productName}" />
                                                </div>

                                                <div class="product-info">
                                                    <div class="product-name">
                                                            ${product.productName}
                                                    </div>

                                                    <p class="original-price">
                                                            ${String.format('%,.0f', product.unitPrice)} VND
                                                    </p>

                                                    <div class="price-discount">
                                                        <p class="product-price">
                                                                ${String.format('%,.0f', product.discountedPrice)} VND
                                                        </p>
                                                        <p class="discount-percentage">
                                                            -${product.discountPercent}%
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </c:forEach>
                            </div>
                            <div id="product-container" class="row"></div>
                            <div id="pagination-controls">
                                <button id="prev">Trước</button>
                                <span id="pagination-info"></span>
                                <button id="next">Tiếp</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- footer -->
    <%@ include file="../reuse/footer.jsp" %>
</div>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        function toggleCategoryMenu() {
            // Lấy tất cả các danh mục chính
            const categoryItems = document.querySelectorAll(".cate-item");

            categoryItems.forEach((category) => {
                category.addEventListener("click", function (event) {
                    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

                    // Tìm danh mục con liên quan
                    const subcategoryList = this.parentElement.querySelector(".subcategory-list");
                    console.log(subcategoryList);

                    if (subcategoryList) {
                        // Kiểm tra trạng thái hiển thị và ẩn/hiện danh mục con
                        const isVisible = subcategoryList.style.height === "auto";
                        subcategoryList.style.height = isVisible ? "0" : "auto";

                        // Thay đổi icon trạng thái
                        const icon = this.querySelector("i");
                        if (icon) {
                            icon.classList.toggle("active");
                        }
                    }
                });
            });
        }

        // Gọi hàm sau khi trang đã được load
        toggleCategoryMenu();

        // Kiểm tra sự kiện 'prev'
        const prevButton = document.getElementById('prev');
        if (prevButton) {
            prevButton.addEventListener("click", function () {
                console.log('Previous button clicked');
            });
        } else {
            console.log("Prev button not found");
        }

    });
    // Hàm xử lý sự kiện khi thay đổi lựa chọn

    function submitForm() {
        var form = document.getElementById("sortingForm");
        form.submit(); // Gửi form đi khi thay đổi lựa chọn
    }

</script>
</body>
</html>