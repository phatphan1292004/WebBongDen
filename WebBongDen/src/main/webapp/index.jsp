<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="jakarta.servlet.http.HttpSession" %>
<%
    HttpSession httpSession  = request.getSession(false); // Lấy session hiện tại (nếu có)
    String username = (String) httpSession.getAttribute("username");
%>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="./img/logo-fold.png" sizes="180x180">
    <title>Trang chủ</title>
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
            type="text/css"
            href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
    />
    <link rel="stylesheet" type="text/css"
          href="${pageContext.request.contextPath}/assets/css/reset.css">
    <link rel="stylesheet" type="text/css"
          href="${pageContext.request.contextPath}/assets/css/home.css">
</head>

<body>
<div class="wrapper">
    <!-- Header -->
    <jsp:include page="/reuse/header.jsp" />
    <div class="main">
        <!-- Slider -->
        <div class="slider-container">
            <div class="container">
                <div class="slider">
                    <div class="slider-wrapper">
                        <div class="slider-item">
                            <div class="slider-image">
                                <img
                                        src="https://denhoamy.vn/upload/partner/9303the-gioi-den-nghe-thuat.png"
                                        alt=""
                                />
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="slider-image">
                                <img
                                        src="https://denhoamy.vn/upload/partner/3103noi-that-thong-minh.png"
                                        alt=""
                                />
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="slider-image">
                                <img
                                        src="https://denhoamy.vn/upload/partner/2247banner-the-gioi-den-nghe-thuat-va-noi-that-trang-tri.png"
                                        alt=""
                                />
                            </div>
                        </div>
                        <div class="slider-item">
                            <div class="slider-image">
                                <img
                                        src="https://denhoamy.vn/upload/partner/3470benner-the-gioi-den-nghe-thuat-va-noi-that-trang-tri-den-hoa-my-vn-1.png"
                                        alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="banner">
                    <div class="banner-top">
                        <img
                                src="https://denhoamy.vn/upload/partner/7850den-hoa-my-dia-chi-mua-den-uy-tin-tai-hai-phong.jpg"
                                alt=""
                        />
                    </div>
                    <div class="banner-bottom">
                        <div class="box">
                            <i class="fas fa-gem"></i>
                            <div class="box-desc">
                                <div class="title">Mẫu mới đa dạng</div>
                                <p>Luôn đi đầu xu hướng sản phẩm</p>
                            </div>
                        </div>

                        <div class="box">
                            <i class="fa-solid fa-truck-fast"></i>
                            <div class="box-desc">
                                <div class="title">Shipcode toàn quốc</div>
                                <p>Vận chuyển giá rẻ, nhanh chóng, tiết kiệm</p>
                            </div>
                        </div>

                        <div class="box">
                            <i class="fa-solid fa-wrench"></i>
                            <div class="box-desc">
                                <div class="title">Tư vấn mua hàng và lắp đặt 24/7</div>
                                <p>Nhận đặt làm các mẫu theo thiết kế</p>
                            </div>
                        </div>

                        <div class="box">
                            <i class="fa-solid fa-money-bill-transfer"></i>
                            <div class="box-desc">
                                <div class="title">Hoàn trả 100%</div>
                                <p>Một đổi một trong vòng 7 ngày</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sale sốc -->
        <div class="container">
            <div class="container-sale">
                <div class="container-sale-header">
                    <div class="sale-info">
                        <h2>SIÊU SALE - GIẢM SỐC!</h2>
                    </div>
                    <div class="countdown-timer">
                        <div class="time-box">
                            <p id="days">00</p>
                            <span>Ngày</span>
                        </div>
                        <div class="time-box">
                            <p id="hours">00</p>
                            <span>Giờ</span>
                        </div>
                        <div class="time-box">
                            <p id="minutes">00</p>
                            <span>Phút</span>
                        </div>
                        <div class="time-box">
                            <p id="seconds">00</p>
                            <span>Giây</span>
                        </div>
                    </div>
                </div>

                <div class="container-sale-product">
                    <ul class="list-product-hot" id="list-product-sale">
                        <li class="product-hot-item">
                            <a href="user/product-detail.jsp">
                                <div class="img">
                                    <img
                                            src="https://denhoamy.vn/upload/attachment/thumb/8519den-quat-tich-hop-ban-chong-tham-nuoc-trang-tri-san-vuon-phong-cach-chau-au-dq00682-08.jpg"
                                            alt=""
                                    />
                                </div>

                                <div class="product-info">
                                    <div class="product-name">
                                        Đèn quạt tích hợp bàn chống thấm nước trang trí sân vườn phong cách Châu Âu DQ00682
                                    </div>
                                    <p class="original-price">2.000.000 VND</p>
                                    <div class="price-discount">
                                        <p class="product-price">1.800.000VND</p>
                                        <p class="discount-percentage">-10%</p>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li class="product-hot-item">
                            <a href="user/product-detail.jsp">
                                <div class="img">
                                    <img
                                            src="https://denhoamy.vn/upload/attachment/thumb/8519den-quat-tich-hop-ban-chong-tham-nuoc-trang-tri-san-vuon-phong-cach-chau-au-dq00682-08.jpg"
                                            alt=""
                                    />
                                </div>

                                <div class="product-info">
                                    <div class="product-name">
                                        Đèn quạt tích hợp bàn chống thấm nước trang trí sân vườn phong cách Châu Âu DQ00682
                                    </div>
                                    <p class="original-price">2.000.000 VND</p>
                                    <div class="price-discount">
                                        <p class="product-price">1.800.000VND</p>
                                        <p class="discount-percentage">-10%</p>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li class="product-hot-item">
                            <a href="user/product-detail.jsp">
                                <div class="img">
                                    <img
                                            src="https://denhoamy.vn/upload/attachment/thumb/8519den-quat-tich-hop-ban-chong-tham-nuoc-trang-tri-san-vuon-phong-cach-chau-au-dq00682-08.jpg"
                                            alt=""
                                    />
                                </div>

                                <div class="product-info">
                                    <div class="product-name">
                                        Đèn quạt tích hợp bàn chống thấm nước trang trí sân vườn phong cách Châu Âu DQ00682
                                    </div>
                                    <p class="original-price">2.000.000 VND</p>
                                    <div class="price-discount">
                                        <p class="product-price">1.800.000VND</p>
                                        <p class="discount-percentage">-10%</p>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li class="product-hot-item">
                            <a href="user/product-detail.jsp">
                                <div class="img">
                                    <img
                                            src="https://denhoamy.vn/upload/attachment/thumb/8519den-quat-tich-hop-ban-chong-tham-nuoc-trang-tri-san-vuon-phong-cach-chau-au-dq00682-08.jpg"
                                            alt=""
                                    />
                                </div>

                                <div class="product-info">
                                    <div class="product-name">
                                        Đèn quạt tích hợp bàn chống thấm nước trang trí sân vườn phong cách Châu Âu DQ00682
                                    </div>
                                    <p class="original-price">2.000.000 VND</p>
                                    <div class="price-discount">
                                        <p class="product-price">1.800.000VND</p>
                                        <p class="discount-percentage">-10%</p>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li class="product-hot-item">
                            <a href="user/product-detail.jsp">
                                <div class="img">
                                    <img
                                            src="https://denhoamy.vn/upload/attachment/thumb/8519den-quat-tich-hop-ban-chong-tham-nuoc-trang-tri-san-vuon-phong-cach-chau-au-dq00682-08.jpg"
                                            alt=""
                                    />
                                </div>

                                <div class="product-info">
                                    <div class="product-name">
                                        Đèn quạt tích hợp bàn chống thấm nước trang trí sân vườn phong cách Châu Âu DQ00682
                                    </div>
                                    <p class="original-price">2.000.000 VND</p>
                                    <div class="price-discount">
                                        <p class="product-price">1.800.000VND</p>
                                        <p class="discount-percentage">-10%</p>
                                    </div>
                                </div>
                            </a>
                        </li>

                        <li class="product-hot-item">
                            <a href="user/product-detail.jsp">
                                <div class="img">
                                    <img
                                            src="https://denhoamy.vn/upload/attachment/thumb/8519den-quat-tich-hop-ban-chong-tham-nuoc-trang-tri-san-vuon-phong-cach-chau-au-dq00682-08.jpg"
                                            alt=""
                                    />
                                </div>

                                <div class="product-info">
                                    <div class="product-name">
                                        Đèn quạt tích hợp bàn chống thấm nước trang trí sân vườn phong cách Châu Âu DQ00682
                                    </div>
                                    <p class="original-price">2.000.000 VND</p>
                                    <div class="price-discount">
                                        <p class="product-price">1.800.000VND</p>
                                        <p class="discount-percentage">-10%</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- BestSeller - Products -->
        <div class="container">
            <div class="product-wrapper">
                <div class="wrapper-title">SẢN PHẨM BÁN CHẠY</div>
                <ul class="list-product-hot">
                    <li class="product-hot-item">
                        <a href="">
                            <div class="img">
                                <img
                                        src="https://denhoamy.vn/upload/attachment/thumb/8709den-chum-tiffany-trang-tri-noi-that-dc03776-04.jpg"
                                        alt=""
                                />
                            </div>

                            <div class="product-info">
                                <div class="product-name">
                                    Đèn chùm Tiffany trang trí nội thất DC03776
                                </div>
                                <p class="original-price">3.000.000 VND</p>
                                <div class="price-discount">
                                    <p class="product-price">2.000.000 VND</p>
                                    <p class="discount-percentage">-33%</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="product-hot-item">
                        <a href="">
                            <div class="img">
                                <img
                                        src="https://denhoamy.vn/upload/attachment/thumb/8709den-chum-tiffany-trang-tri-noi-that-dc03776-04.jpg"
                                        alt=""
                                />
                            </div>

                            <div class="product-info">
                                <div class="product-name">
                                    Đèn chùm Tiffany trang trí nội thất DC03776
                                </div>
                                <p class="original-price">3.000.000 VND</p>
                                <div class="price-discount">
                                    <p class="product-price">2.000.000 VND</p>
                                    <p class="discount-percentage">-33%</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="product-hot-item">
                        <a href="">
                            <div class="img">
                                <img
                                        src="https://denhoamy.vn/upload/attachment/thumb/8709den-chum-tiffany-trang-tri-noi-that-dc03776-04.jpg"
                                        alt=""
                                />
                            </div>

                            <div class="product-info">
                                <div class="product-name">
                                    Đèn chùm Tiffany trang trí nội thất DC03776
                                </div>
                                <p class="original-price">3.000.000 VND</p>
                                <div class="price-discount">
                                    <p class="product-price">2.000.000 VND</p>
                                    <p class="discount-percentage">-33%</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="product-hot-item">
                        <a href="">
                            <div class="img">
                                <img
                                        src="https://denhoamy.vn/upload/attachment/thumb/8709den-chum-tiffany-trang-tri-noi-that-dc03776-04.jpg"
                                        alt=""
                                />
                            </div>

                            <div class="product-info">
                                <div class="product-name">
                                    Đèn chùm Tiffany trang trí nội thất DC03776
                                </div>
                                <p class="original-price">3.000.000 VND</p>
                                <div class="price-discount">
                                    <p class="product-price">2.000.000 VND</p>
                                    <p class="discount-percentage">-33%</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="product-hot-item">
                        <a href="">
                            <div class="img">
                                <img
                                        src="https://denhoamy.vn/upload/attachment/thumb/8709den-chum-tiffany-trang-tri-noi-that-dc03776-04.jpg"
                                        alt=""
                                />
                            </div>

                            <div class="product-info">
                                <div class="product-name">
                                    Đèn chùm Tiffany trang trí nội thất DC03776
                                </div>
                                <p class="original-price">3.000.000 VND</p>
                                <div class="price-discount">
                                    <p class="product-price">2.000.000 VND</p>
                                    <p class="discount-percentage">-33%</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li class="product-hot-item">
                        <a href="">
                            <div class="img">
                                <img
                                        src="https://denhoamy.vn/upload/attachment/thumb/8709den-chum-tiffany-trang-tri-noi-that-dc03776-04.jpg"
                                        alt=""
                                />
                            </div>

                            <div class="product-info">
                                <div class="product-name">
                                    Đèn chùm Tiffany trang trí nội thất DC03776
                                </div>
                                <p class="original-price">3.000.000 VND</p>
                                <div class="price-discount">
                                    <p class="product-price">2.000.000 VND</p>
                                    <p class="discount-percentage">-33%</p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Home Products -->
        <section class="home-product">
            <div class="container">
                <div class="product-wrapper">
                    <div class="wrapper-top">
                        <div class="wrapper-category">ĐÈN CHÙM</div>
                        <a href="Detail.html">Xem thêm</a>
                    </div>

                    <div class="wrapper-bottom">
                        <ul class="list-product" id="list-product1">
                            <c:forEach var="product" items="${denChumList}">
                                <li class="product-item">
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
                                </li>
                            </c:forEach>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-product">
            <div class="container">
                <div class="product-wrapper">
                    <div class="wrapper-top">
                        <div class="wrapper-category">ĐÈN THẢ</div>
                        <a href="Detail.html">Xem thêm</a>
                    </div>

                    <div class="wrapper-bottom">
                        <ul class="list-product" id="list-product2">
                            <c:forEach var="product" items="${denThaList}">
                                <li class="product-item">
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
                                </li>
                            </c:forEach>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-product">
            <div class="container">
                <div class="product-wrapper">
                    <div class="wrapper-top">
                        <div class="wrapper-category">ĐÈN BÀN</div>
                        <a href="Detail.html">Xem thêm</a>
                    </div>

                    <div class="wrapper-bottom">
                        <ul class="list-product" id="list-product3">
                            <c:forEach var="product" items="${denBanList}">
                                <li class="product-item">
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
                                </li>
                            </c:forEach>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-product">
            <div class="container">
                <div class="product-wrapper">
                    <div class="wrapper-top">
                        <div class="wrapper-category">ĐÈN ỐP TRẦN</div>
                        <a href="Detail.html">Xem thêm</a>
                    </div>

                    <div class="wrapper-bottom">
                        <ul class="list-product" id="list-product4">
                            <c:forEach var="product" items="${denOpTranList}">
                                <li class="product-item">
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
                                </li>
                            </c:forEach>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-product">
            <div class="container">
                <div class="product-wrapper">
                    <div class="wrapper-top">
                        <div class="wrapper-category">ĐÈN QUẠT</div>
                        <a href="Detail.html">Xem thêm</a>
                    </div>

                    <div class="wrapper-bottom">
                        <ul class="list-product" id="list-product5">
                            <c:forEach var="product" items="${denQuatList}">
                                <li class="product-item">
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
                                </li>
                            </c:forEach>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="home-product">
            <div class="container">
                <div class="product-wrapper">
                    <div class="wrapper-top">
                        <div class="wrapper-category">ĐÈN KHÁC</div>
                        <a href="Detail.html">Xem thêm</a>
                    </div>

                    <div class="wrapper-bottom">
                        <ul class="list-product" id="list-product6">
                            <c:forEach var="product" items="${denKhacList}">
                                <li class="product-item">
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
                                </li>
                            </c:forEach>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Tin tức -->
        <section class="home-info">
            <div class="container">
                <div class="info-wrapper">
                    <div class="header-info">
                        TIN TỨC
                        <div class="bar"></div>
                    </div>
                    <div class="list-info">
                        <div class="info-item">
                            <div class="info-img">
                                <img
                                        src="https://denhoamy.vn/upload/news/5157sofa-da-nhap-khau-cao-cap-trang-tri-noi-that-phong-khach-phong-cach-hien-dai-nt00401-01.jpg"
                                        alt=""
                                />
                            </div>

                            <div class="info-main">
                                <div class="info-name">
                                    999+MẪU THIẾT KẾ NỘI THẤT ĐẸP - SANG TRỌNG - CAO CẤP XU
                                    HƯỚNG MỚI NHẤT NĂM
                                </div>
                                <div class="info-time">
                                    <i class="fa-regular fa-clock"></i>
                                    Saturday, June 01, 2024
                                </div>
                                <p>
                                    Nội thất hay còn gọi là vật dụng, thiết bị nội thất được
                                    xem là điểm nhấn trang trí ấn tượng ở không gian phòng
                                    ngủ, phòng khách, phòng bếp hay văn phòng công ty.
                                </p>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-img">
                                <img
                                        src="https://denhoamy.vn/upload/news/32475008den-chum-pha-le-trang-tri-thong-tang-phong-khach-dc03620-03.jpg"
                                        alt=""
                                />
                            </div>

                            <div class="info-main">
                                <div class="info-name">
                                    +99 MẪU ĐÈN TRANG TRÍ PHA LÊ CAO CẤP
                                </div>
                                <div class="info-time">
                                    <i class="fa-regular fa-clock"></i>
                                    Monday, Sep 01, 2024
                                </div>
                                <p>
                                    Đèn chùm pha lê được trang trí rộng rãi trong các công trình nhằm tăng độ chiếu sáng và tính thẩm mỹ c
                                </p>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-img">
                                <img
                                        src="https://denhoamy.vn/upload/news/161tong-hop-cac-mau-quat-tran-den-cho-khong-gian-biet-thu-dep.png"
                                        alt=""
                                />
                            </div>

                            <div class="info-main">
                                <div class="info-name">
                                    Tổng hợp các mẫu quạt trần đèn cho không gian biệt thự đẹp
                                </div>
                                <div class="info-time">
                                    <i class="fa-regular fa-clock"></i>
                                    Sunday, Nov 01, 2023
                                </div>
                                <p>
                                    Hiện nay việc sử dụng quạt trần đèn cho không gian biệt thự cao cấp là điều rất cần thiết để làm tăng lên sự sang trọng, đẳng cấp cho không gian thiết kế này.
                                </p>
                            </div>
                        </div>

                        <div class="info-item">
                            <div class="info-img">
                                <img
                                        src="https://denhoamy.vn/upload/news/1333184den-quat-sai-canh-trang-tri-noi-that-phong-cach-trung-hoa-dq00684.jpg"
                                        alt=""
                                />
                            </div>

                            <div class="info-main">
                                <div class="info-name">
                                    Đèn quạt trần – sản phẩm nội thất thông minh cho mọi gia đình
                                </div>
                                <div class="info-time">
                                    <i class="fa-regular fa-clock"></i>
                                    Tuesday, July 01, 2024
                                </div>
                                <p>
                                    Chạy theo sự phát triển của thời đại, nội thất thông minh ngày càng trở thành xu hướng và được ưa chuộng. Trong đó đèn quạt trần là món đồ trang trí mang tính ứng dụng cao.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="container">
            <div class="feedback">
                <h2 class="feedback-title">
                    ĐÁNH GIÁ KHÁCH HÀNG
                    <div class="bar"></div>
                </h2>
                <ul class="feedback-list">
                    <li class="feedback-item">
                        <div class="feedback-img">
                            <img
                                    src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww"
                                    alt="User Image"
                            />
                        </div>
                        <div class="feedback-content">
                            <h3 class="user-name">Nguyễn Minh Tú</h3>
                            <p class="feedback-text">
                                "Trang web này thật sự đã mang đến cho tôi một trải nghiệm
                                tuyệt vời. Giao diện dễ sử dụng, sản phẩm đa dạng và chất
                                lượng rất tốt. Tôi đặc biệt ấn tượng với chính sách giao
                                hàng nhanh chóng và dịch vụ hỗ trợ khách hàng thân thiện.
                                Tôi sẽ quay lại và giới thiệu cho bạn bè!"
                            </p>
                        </div>
                    </li>

                    <li class="feedback-item">
                        <div class="feedback-img">
                            <img
                                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                    alt="User Image"
                            />
                        </div>
                        <div class="feedback-content">
                            <h3 class="user-name">Lê Anh Tuấn</h3>
                            <p class="feedback-text">
                                "Tôi thực sự hài lòng với trang web này. Các sản phẩm luôn
                                có thông tin chi tiết và dễ dàng tìm kiếm. Tôi đặc biệt
                                thích giao diện dễ sử dụng và khả năng duyệt qua các sản
                                phẩm nhanh chóng. Dịch vụ chăm sóc khách hàng rất tuyệt vời
                                và luôn sẵn sàng hỗ trợ tôi khi có vấn đề."
                            </p>
                        </div>
                    </li>

                    <li class="feedback-item">
                        <div class="feedback-img">
                            <img
                                    src="https://plus.unsplash.com/premium_photo-1702598525684-fe2f8b75eb62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
                                    alt="User Image"
                            />
                        </div>
                        <div class="feedback-content">
                            <h3 class="user-name">Bùi Minh Anh</h3>
                            <p class="feedback-text">
                                "Mua sắm trực tuyến thật dễ dàng với trang web này. Sản phẩm
                                phong phú, chất lượng tuyệt vời và dịch vụ khách hàng cực kỳ
                                nhanh chóng. Tôi rất vui với việc giao hàng đúng hẹn và sản
                                phẩm đến tay tôi trong tình trạng hoàn hảo. Chắc chắn sẽ
                                quay lại!"
                            </p>
                        </div>
                    </li>

                    <li class="feedback-item">
                        <div class="feedback-img">
                            <img
                                    src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="User Image"
                            />
                        </div>
                        <div class="feedback-content">
                            <h3 class="user-name">Vũ Quang Hải</h3>
                            <p class="feedback-text">
                                "Tôi rất hài lòng với trải nghiệm mua sắm trên trang web
                                này. Giao diện rất dễ hiểu, dễ điều hướng và sản phẩm đa
                                dạng. Dịch vụ chăm sóc khách hàng luôn hỗ trợ nhanh chóng và
                                hiệu quả. Tôi rất mong sẽ có nhiều ưu đãi hấp dẫn hơn trong
                                tương lai."
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <jsp:include page="/reuse/footer.jsp" />
</div>
<script type="module" src="assets/Js/home.js"></script>
<script
        type="text/javascript"
        src="https://code.jquery.com/jquery-1.11.0.min.js"
></script>
<script
        type="text/javascript"
        src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"
></script>
<script
        type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"
></script>
</body>
</html>