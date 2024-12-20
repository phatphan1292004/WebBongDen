<%--
  Created by IntelliJ IDEA.
  User: Admin
  Date: 12/15/2024
  Time: 10:21 AM
  To change this template use File | Settings | File Templates.
--%>
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
                            <li class="product-item">
                                <div class="box">
                                    <div class="product-img">
                                        <img
                                                src="https://denhoamy.vn/upload/attachment/thumb/3650den-chum-trang-tri-noi-that-phong-cach-my-dc03810-03.jpg"
                                                alt=""
                                        />
                                    </div>
                                    <div class="delete-item">Xóa</div>
                                </div>

                                <div class="product-detail">
                                    <div class="product-name">
                                        Đèn chùm trang trí nội thất phong cách Mỹ DC03810
                                    </div>
                                    <p class="product-note">
                                        Tặng: Phiếu giảm giá 20% khi hóa đơn tiếp theo trên 1.500.000VND
                                    </p>
                                </div>

                                <div class="product-qp">
                                    <div class="product-price">2.499.999VND</div>
                                    <div class="quantity-selector">
                                        <button class="quantity-btn decrease">-</button>
                                        <input
                                                type="number"
                                                class="quantity-input"
                                                value="1"
                                                min="1"
                                        />
                                        <button class="quantity-btn increase">+</button>
                                    </div>
                                </div>
                            </li>

                            <li class="product-item">
                                <div class="box">
                                    <div class="product-img">
                                        <img
                                                src="https://denhoamy.vn/upload/attachment/thumb/2036den-chum-tiffany-trang-tri-noi-that-dc03784-01.jpg"
                                                alt=""
                                        />
                                    </div>
                                    <div class="delete-item">Xóa</div>
                                </div>

                                <div class="product-detail">
                                    <div class="product-name">
                                        Đèn chùm Tiffany trang trí nội thất DC03784
                                    </div>
                                    <p class="product-note">
                                        Lắp đặt miễn phí trong bán kính 20km
                                    </p>
                                </div>

                                <div class="product-qp">
                                    <div class="product-price">1.990.000VND</div>
                                    <div class="quantity-selector">
                                        <button class="quantity-btn decrease">-</button>
                                        <input
                                                type="number"
                                                class="quantity-input"
                                                value="1"
                                                min="1"
                                        />
                                        <button class="quantity-btn increase">+</button>
                                    </div>
                                </div>
                            </li>

                            <li class="product-item">
                                <div class="box">
                                    <div class="product-img">
                                        <img
                                                src="https://denhoamy.vn/upload/attachment/3771den-chum-trang-tri-phong-cach-dong-que-my-dc03768-02.jpg"
                                                alt=""
                                        />
                                    </div>
                                    <div class="delete-item">Xóa</div>
                                </div>

                                <div class="product-detail">
                                    <div class="product-name">
                                        Đèn chùm trang trí phong cách đồng quê Mỹ DC03768
                                    </div>
                                    <p class="product-note">
                                        Tặng phiếu giảm giá 5% cho sản phẩm kế tiếp.
                                    </p>
                                </div>

                                <div class="product-qp">
                                    <div class="product-price">2.500.000VND</div>
                                    <div class="quantity-selector">
                                        <button class="quantity-btn decrease">-</button>
                                        <input
                                                type="number"
                                                class="quantity-input"
                                                value="1"
                                                min="1"
                                        />
                                        <button class="quantity-btn increase">+</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="a"></div>
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
                            <p class="total-price">3.652.000 V ND</p>
                        </div>
                    </div>

                    <button class="buy-btn">ĐẶT HÀNG NGAY</button>
                </div>
            </div>
            <div class="tab-content" id="order-info">
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
                                                placeholder=" "
                                                required
                                        />
                                        <label for="number-address" class="form-label"
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
                                <p class="total-price">3.652.000 V ND</p>
                            </div>
                        </div>
                        <button class="buy-btn">ĐẶT HÀNG NGAY</button>
                        <p style="font-size: 12px">
                            Bạn có thể chọn hình thức thanh toán sau khi đặt hàng.
                        </p>
                    </div>
                </div>
            </div>
            <div class="tab-content" id="payment">
                <div class="container-top">
                    <div class="section order-info">
                        <div class="order-info">
                            <h2>Thông tin đặt hàng</h2>
                            <p>
                                <span>Khách hàng:</span>
                                <span class="customer-name">Phan Phat</span>
                            </p>
                            <p>
                                <span>Số điện thoại:</span>
                                <span class="customer-phone">0973037104</span>
                            </p>
                            <p>
                                <span>Địa chỉ nhận hàng:</span>
                                <span class="customer-address"
                                >21, Xã Tân An, Huyện Tân Kỳ, Nghệ An</span
                                >
                            </p>
                            <p>
                                <span>Phí vận chuyển:</span>
                                <span class="highlight shipping-fee">Miễn phí</span>
                            </p>
                            <p>
                                <span>Tổng tiền:</span>
                                <span class="highlight total-amount">36.980.000đ</span>
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
                                    placeholder=" "
                            />
                            <label for="discount-code-cus" class="form-label">Mã giảm giá</label>
                        </div>
                        <button>Áp dụng mã</button>
                    </div>
                    <hr />
                    <div class="payment-method">
                        <h2>Chọn hình thức thanh toán</h2>
                        <div class="option">
                            <input type="radio" id="cod" name="payment" checked />
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
                            <p class="total-price">3.652.000 V ND</p>
                        </div>
                    </div>
                    <button class="buy-btn">ĐẶT HÀNG NGAY</button>
                </div>
            </div>
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

