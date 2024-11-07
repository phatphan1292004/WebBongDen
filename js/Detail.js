//sub-menu sidebar
document.querySelectorAll('.category-item > a').forEach(function(item){
    item.addEventListener('click', function(e){
        e.preventDefault();

        // Đóng tất cả các sub-menu
        document.querySelectorAll('category-item').forEach(function(el){
            el.classList.remove('active');
        });
        const parent = this.parentElement;
        parent.classList.toggle('active')
    });
});

// Phạm vi giá
$(document).ready(function() {
$(".slider-range-price").slider({
    range: true,  // Kích hoạt phạm vi (range) với 2 tay cầm
    min: 0,
    max: 1000000,
    values: [0, 1000000],  // Giá trị mặc định cho tay cầm trái và phải
    slide: function(event, ui) {
        // Cập nhật giá trị phạm vi khi di chuyển tay cầm
        $(".range-price").text("Giá từ: " + ui.values[0] +"-"  + ui.values[1] + "VND");
    }
});

// Thiết lập giá trị ban đầu hiển thị trên thanh phạm vi
$(".range-price").text("Giá từ: " + $(".slider-range-price").slider("values", 0) + " - " + $(".slider-range-price").slider("values", 1));
});


function increaseQuantity(){
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
}

function decreaseQuantity(){
    let quantityInput = document.getElementById('quantity');
    let currentValue = parseInt(quantityInput.value);
    if(currentValue > 1){
        quantityInput.value = currentValue -1;
    }
}

// tạo 150 sp


    // Dữ liệu cụ thể cho các sản phẩm
    const products = [
        {
            name: "Đèn chùm cổ điển số 1",
            image1: "https://denhoamy.vn/upload/attachment/thumb/2051den-chum-trang-tri-noi-that-phong-cach-my-hien-dai-dc03782-02.jpg",
            image2: "https://denhoamy.vn/upload/attachment/thumb/7239den-chum-tiffany-trang-tri-noi-that-dc03596-05.jpg",
            oldPrice: "3,000,000",
            newPrice: "2,100,000",
            discount: 30
        },
        {
            name: "Đèn chùm cổ điển số 2",
            image1: "https://denhoamy.vn/upload/attachment/thumb/1254den-chum-co-dien-phong-khach-dc02713-04.jpg",
            image2: "https://denhoamy.vn/upload/attachment/thumb/3425den-chum-hien-dai-phong-ngu-dc01392-06.jpg",
            oldPrice: "4,000,000",
            newPrice: "2,800,000",
            discount: 30
        },
        // Thêm sản phẩm khác tại đây...
    ];

    document.addEventListener("DOMContentLoaded", function() {
        let container = document.getElementById('product-container');
        products.forEach((product, index) => {
            container.innerHTML += `
                <div class="col-6 col-md-4 col-lg-3">
                    <div class="single-product-wrapper">
                        <div class="product-img">
                            <img src="${product.image1}" alt="Product Image" onerror="this.src='https://via.placeholder.com/150';">
                            <img class="hover-img" src="${product.image2}" alt="Product Hover Image" onerror="this.src='https://via.placeholder.com/150';">
                            <div class="product-badge offer-badge">
                                <span>- ${product.discount}%</span>
                            </div>
                        </div>
                        <div class="product-description">
                            <a href="single-product-details.html">
                                <h6>${product.name}</h6>
                            </a>
                            <p class="product-price"><span class="old-price">${product.oldPrice}</span> ${product.newPrice}</p>
                            <div class="hover-content">
                                <div class="quantity-selector d-flex align-items-center">
                                    <button class="quantity-btn" onclick="decreaseQuantity(${index})">-</button>
                                    <input type="text" id="quantity${index}" value="1" readonly>
                                    <button class="quantity-btn" onclick="increaseQuantity(${index})">+</button>
                                </div>
                                <div class="add-to-cart-btn">
                                    <a href="#" class="btn essence-btn">Thêm vào giỏ hàng</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    });

    // Hàm tăng giảm số lượng (tùy chọn)
    function decreaseQuantity(index) {
        let quantityInput = document.getElementById(`quantity${index}`);
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    }

    function increaseQuantity(index) {
        let quantityInput = document.getElementById(`quantity${index}`);
        quantityInput.value = parseInt(quantityInput.value) + 1;
    }



