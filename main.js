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


function sortProductsByPrice() {
    const productList = document.querySelector('.product-list');
    const products = Array.from(productList.children);

    products.sort((a, b) => {
        const priceA = parseInt(a.getAttribute('data-price'));
        const priceB = parseInt(b.getAttribute('data-price'));
        return priceB - priceA;
    });

    // Clear existing products and re-append in sorted order
    productList.innerHTML = '';
    products.forEach(product => productList.appendChild(product));
}
