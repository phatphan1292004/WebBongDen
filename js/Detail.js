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
            name: "Đèn chùm bằng đồng trang trí phòng khách phong cách",
            image1: "https://denhoamy.vn/upload/attachment/thumb/7301den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03443-01.jpg",
            image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
            oldPrice: "3,000,000",
            newPrice: "2,100,000",
            discount: 30
        },
        {
            name: "Đèn chùm bằng đồng trang trí phòng khách phong cách",
            image1: "https://denhoamy.vn/upload/attachment/thumb/1300den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03427-04.jpg",
            image2: "https://denhoamy.vn/upload/attachment/thumb/5225den-chum-pha-le-trang-tri-phong-khach-phong-cach-trung-hoa-dc03444-04.jpg",
            oldPrice: "4,000,000",
            newPrice: "2,800,000",
            discount: 30
        },
        {
            name: "Đèn chùm bằng đồng trang trí phòng khách phong cách",
            image1: "https://denhoamy.vn/upload/attachment/thumb/7301den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03443-01.jpg",
            image2: "https://denhoamy.vn/upload/attachment/thumb/5225den-chum-pha-le-trang-tri-phong-khach-phong-cach-trung-hoa-dc03444-04.jpg",
            oldPrice: "4,000,000",
            newPrice: "2,800,000",
            discount: 30
        },
        {
            name: "Đèn chùm bằng đồng trang trí phòng khách phong cách",
            image1: "https://denhoamy.vn/upload/attachment/thumb/7301den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03443-01.jpg",
            image2: "https://denhoamy.vn/upload/attachment/thumb/7000den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03441-02.jpg",
            oldPrice: "4,000,000",
            newPrice: "2,800,000",
            discount: 30
        }
       , {
        name: "Đèn chùm bằng đồng trang trí phòng khách phong cách",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7373den-chum-go-trang-tri-noi-that-phong-cach-trung-hoa-dc03397-02.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "3,000,000",
        newPrice: "2,100,000",
        discount: 30
    },
    {
        name: "Đèn chùm bằng đồng trang trí phòng khách phong cách",
        image1: "https://denhoamy.vn/upload/attachment/thumb/1300den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03427-04.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/5225den-chum-pha-le-trang-tri-phong-khach-phong-cach-trung-hoa-dc03444-04.jpg",
        oldPrice: "4,000,000",
        newPrice: "2,800,000",
        discount: 30
    },
    {
        name: "Đèn chùm pha lê cao cấp",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7301den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03443-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/5225den-chum-pha-le-trang-tri-phong-khach-phong-cach-trung-hoa-dc03444-04.jpg",
        oldPrice: "5,000,000",
        newPrice: "3,500,000",
        discount: 30
    },
    {
        name: "Đèn chùm pha lê sang trọng cho phòng khách",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7373den-chum-go-trang-tri-noi-that-phong-cach-trung-hoa-dc03397-02.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/7000den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03441-02.jpg",
        oldPrice: "6,000,000",
        newPrice: "4,200,000",
        discount: 30
    },
    {
        name: "Đèn chùm pha lê kiểu dáng hiện đại",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7301den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03443-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/1300den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03427-04.jpg",
        oldPrice: "7,000,000",
        newPrice: "5,000,000",
        discount: 30
    },
    {
        name: "Đèn chùm thủy tinh trang trí phòng khách",
        image1: "https://denhoamy.vn/upload/attachment/thumb/1300den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03427-04.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "4,500,000",
        newPrice: "3,000,000",
        discount: 33
    },
    {
        name: "Đèn chùm đồng trang trí phòng khách",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7301den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03443-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "2,500,000",
        newPrice: "1,800,000",
        discount: 28
    },
    {
        name: "Đèn chùm pha lê cho phòng khách sang trọng",
        image1: "https://denhoamy.vn/upload/attachment/thumb/1300den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03427-04.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/7000den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03441-02.jpg",
        oldPrice: "5,500,000",
        newPrice: "3,800,000",
        discount: 31
    },
    {
        name: "Đèn chùm cao cấp cho phòng khách hiện đại",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7301den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03443-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/7000den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03441-02.jpg",
        oldPrice: "7,200,000",
        newPrice: "5,200,000",
        discount: 28
    },
    {
        name: "Đèn chùm thủy tinh hiện đại cho phòng khách",
        image1: "https://denhoamy.vn/upload/attachment/thumb/1300den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03427-04.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/5225den-chum-pha-le-trang-tri-phong-khach-phong-cach-trung-hoa-dc03444-04.jpg",
        oldPrice: "6,500,000",
        newPrice: "4,500,000",
        discount: 31
    },
    {
        name: "Đèn chùm đồng trang trí phòng khách sang trọng",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7301den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03443-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "5,000,000",
        newPrice: "3,500,000",
        discount: 30
    },
    {
        name: "Đèn chùm đồng trang trí phòng khách sang trọng",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7811den-chum-trang-tri-noi-that-phong-cach-trung-hoa-dc03361-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "5,000,000",
        newPrice: "3,500,000",
        discount: 30
    },
    {
        name: "Đèn chùm đồng trang trí phòng khách sang trọng",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7811den-chum-trang-tri-noi-that-phong-cach-trung-hoa-dc03361-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "5,000,000",
        newPrice: "3,500,000",
        discount: 30
    },
    {
        name: "Đèn chùm đồng trang trí phòng khách sang trọng",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7811den-chum-trang-tri-noi-that-phong-cach-trung-hoa-dc03361-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "5,000,000",
        newPrice: "3,500,000",
        discount: 30
    },
    {
        name: "Đèn chùm đồng trang trí phòng khách sang trọng",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7811den-chum-trang-tri-noi-that-phong-cach-trung-hoa-dc03361-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "5,000,000",
        newPrice: "3,500,000",
        discount: 30
    },
    {
        name: "Đèn chùm đồng trang trí phòng khách sang trọng",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7811den-chum-trang-tri-noi-that-phong-cach-trung-hoa-dc03361-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "5,000,000",
        newPrice: "3,500,000",
        discount: 30
    },
    {
        name: "Đèn chùm đồng trang trí phòng khách sang trọng",
        image1: "https://denhoamy.vn/upload/attachment/thumb/7811den-chum-trang-tri-noi-that-phong-cach-trung-hoa-dc03361-01.jpg",
        image2: "https://denhoamy.vn/upload/attachment/thumb/2376den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03438-02.jpg",
        oldPrice: "5,000,000",
        newPrice: "3,500,000",
        discount: 30
    },
    ];
    

    document.addEventListener("DOMContentLoaded", function() {
        let container = document.getElementById('product-container');
        products.forEach((product, index) => {
            container.innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 mb-4">
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





