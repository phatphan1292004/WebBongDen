

document.addEventListener("DOMContentLoaded", function () {
  // Kiểm tra xem có phần tử .category-item > a trong DOM không
  const categoryLinks = document.querySelectorAll(".category-item > a");
  
  if (categoryLinks.length === 0) {
    console.log("Không tìm thấy các phần tử .category-item > a");
  } else {
    categoryLinks.forEach(function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();

        // Đóng tất cả các sub-menu
        document.querySelectorAll(".category-item").forEach(function (el) {
          el.classList.remove("active");
        });
        
        const parent = this.parentElement;
        parent.classList.toggle("active");
      });
    });
  }
});


// Dữ liệu sản phẩm
const products = [
  {
    name: "Đèn chùm trang trí nội thất phong cách Indochine",
    image1: "https://denhoamy.vn/upload/attachment/thumb/5173den-chum-trang-tri-noi-that-phong-cach-indochine-dc03475-01.jpg",
    oldPrice: "3.000.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-33%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7690den-chum-bang-dong-trang-tri-phong-khach-phong-ngu-phong-cach-hien-dai-dc03448-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/1572den-chum-la-sen-trang-tri-phong-khach-phong-cach-trung-hoa-dc03445-01.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/5162den-chum-trang-tri-phong-khach-phong-cach-trung-hoa-dc03429-03.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7301den-chum-thong-tang-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03443-01.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/5225den-chum-pha-le-trang-tri-phong-khach-phong-cach-trung-hoa-dc03444-04.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/369den-chum-da-cam-thach-trang-tri-dai-sanh-phong-cach-trung-hoa-dc03432-01.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/2809den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-hien-dai-dc03442-04.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/2809den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-hien-dai-dc03442-04.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7000den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03441-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/2689den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03435-04.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/4566den-chum-bang-dong-trang-tri-phong-khach-phong-cach-trung-hoa-dc03428-04.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7690den-chum-bang-dong-trang-tri-phong-khach-phong-ngu-phong-cach-hien-dai-dc03448-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7690den-chum-bang-dong-trang-tri-phong-khach-phong-ngu-phong-cach-hien-dai-dc03448-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7690den-chum-bang-dong-trang-tri-phong-khach-phong-ngu-phong-cach-hien-dai-dc03448-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7690den-chum-bang-dong-trang-tri-phong-khach-phong-ngu-phong-cach-hien-dai-dc03448-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7690den-chum-bang-dong-trang-tri-phong-khach-phong-ngu-phong-cach-hien-dai-dc03448-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7690den-chum-bang-dong-trang-tri-phong-khach-phong-ngu-phong-cach-hien-dai-dc03448-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7690den-chum-bang-dong-trang-tri-phong-khach-phong-ngu-phong-cach-hien-dai-dc03448-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },
  {
    name: "Đèn chùm bằng đồng trang trí phòng khách phòng ngủ phong cách hiện đại DC03448",
    image1: "https://denhoamy.vn/upload/attachment/thumb/7690den-chum-bang-dong-trang-tri-phong-khach-phong-ngu-phong-cach-hien-dai-dc03448-02.jpg",
    oldPrice: "2.500.000 VND",
    newPrice: "2.000.000 VND",
    discount: "-20%"
  },

];

// Đợi khi DOM đã tải xong
document.addEventListener("DOMContentLoaded", () => {
  let container = document.getElementById("product-container");

  // Hiển thị danh sách sản phẩm
  products.forEach((product) => {
    container.innerHTML += `
      <div class="col-6 col-md-4 col-lg-3 mb-4">
        <div class="single-product-wrapper">
          <div class="product-item">
            <div class="img">
              <img src="${product.image1}" alt="${product.name}" />
            </div>
            <div class="product-info">
              <div class="product-name">${product.name}</div>
              <p class="original-price">${product.oldPrice}</p>
              <div class="price-discount">
                <p class="product-price">${product.newPrice}</p>
                <p class="discount-percentage">${product.discount}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  });
});
