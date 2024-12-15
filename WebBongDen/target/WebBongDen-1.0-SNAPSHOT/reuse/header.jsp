<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/15/2024
  Time: 11:33 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<header class="header">
    <div class="header-top">
        <div class="header-left">
            <!-- Hamburger icon for opening sidebar -->
            <div style="display: flex; align-items: center">
                <i class="fa-solid fa-bars" id="menu-toggle"></i>
                <a href="index.html" class="logo">
                    <img src="./img/logo2.png" alt="" />
                </a>
            </div>
            <div class="search-bar">
                <form action="/search" method="GET" id="search-form">
                    <input placeholder="Bạn cần tìm gì?" type="text" name="query" />
                </form>
                <button type="submit" aria-label="Search" class="search-btn">
                    <i class="fas fa-search"></i>
                </button>
            </div>
            <div class="mobile-search-bar" id="mobile-search-bar">
                <form action="/search" method="GET">
                    <input type="text" name="query" placeholder="Bạn cần tìm gì?" />
                    <button type="submit" aria-label="mobile-search">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button
                        type="button"
                        id="close-search-button"
                        aria-label="Close Search"
                >
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>

        <div class="header-right">
            <div class="info">
                <div class="info-item">
                    <i class="fas fa-headphones-alt"></i>
                    <span>Hotline 1900.5301</span>
                </div>

                <a class="info-item" href="support.html">
                    <i class="fa-solid fa-circle-question"></i>
                    <span>Hỗ trợ</span>
                </a>

                <a class="info-item" href="cart.html">
                    <i class="fas fa-shopping-cart"></i>
                    <span>Giỏ hàng</span>
                    <p>(<span class="quantity-product">0</span>)</p>
                </a>

                <div class="header-user">
                    <img
                            src="https://images.unsplash.com/photo-1636041282694-aa4e52370419?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            class="avt-user"
                    />

                    <div class="user-info-dropdown">
                        <div class="dropdown-header">
                            <img src="./img/icon-dropdownuser.png" alt="" />
                            <p>Xin chào <span>Phat Phan.</span></p>
                        </div>
                        <div class="dropdown-content">
                            <div class="dropdown-item">
                                <i class="fa fa-user"></i>
                                <a href="user.html">Thông tin cá nhân</a>
                            </div>

                            <div class="dropdown-item">
                                <i class="fa-regular fa-eye"></i>
                                <a href="user.html">Đã xem gần đây</a>
                            </div>
                        </div>
                        <div class="dropdown-footer">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            <a href="index.html">Đăng xuất</a>
                        </div>
                    </div>
                </div>
                <a href="login.html" id="login-header-btn">
                    <button class="login" id="login-btn">
                        <i class="fas fa-user"></i>
                        <span>Đăng nhập</span>
                    </button>
                </a>
            </div>
        </div>
    </div>

    <nav class="navbar">
        <ul class="navbar-list">
            <li><a href="index.html">TRANG CHỦ</a></li>
            <li class="dropdown">
                <a href="Detail.html">DANH MỤC <i class="fa-solid fa-caret-down"></i></a>
                <div class="submenu">
                    <ul id="category-list">
                        <!-- Categories will go here -->
                    </ul>
                </div>
            </li>
            <li><a href="News.html">TIN TỨC</a></li>
            <li><a href="Contact.html">LIÊN HỆ</a></li>
        </ul>
    </nav>
</header>
</body>
</html>