document.addEventListener('DOMContentLoaded', function() {
    $(document).ready(function(){
        $('.product-image-list').slick({
          infinite: true,
          slidesToShow: 1,
          prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-angle-left"></i></button>`,
          nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-angle-right"></i></button>`,
        });
    });

    // Code phần rating
  const ratingItems = document.querySelectorAll(".rating-item");
  const selectedRatingDisplay = document.querySelector(".selected-rating");

  // Xử lý sự kiện hover
  ratingItems.forEach((item, index) => {
    item.addEventListener("mouseover", function() {
      // Đổi màu các sao trước sao được hover
      for (let i = 0; i <= index; i++) {
        ratingItems[i].classList.add("selected");
      }
      for (let i = index + 1; i < ratingItems.length; i++) {
        ratingItems[i].classList.remove("selected");
      }

    });

    // Xử lý sự kiện click
    item.addEventListener("click", function() {
      const ratingValue = index + 1;
      console.log("Điểm đánh giá: " + ratingValue);
      for (let i = 0; i <= index; i++) {
        ratingItems[i].classList.add("selected");
      }
    });
  });

  function toggleCategoryMenu() {
    // Lấy tất cả các danh mục chính
    const categoryItems = document.querySelectorAll(".cate-item");

    categoryItems.forEach((category) => {
      category.addEventListener("click", function (event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

        // Tìm danh mục con liên quan
        const subcategoryList = this.parentElement.querySelector(".subcategory-list");
        console.log(subcategoryList)
        if (subcategoryList) {
          // Kiểm tra trạng thái hiển thị
          const isVisible = subcategoryList.style.height === "auto";

          // Ẩn/hiện danh mục con
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
  toggleCategoryMenu()


  const buyBtn = document.getElementById("addToCart");
  if (buyBtn) { // Kiểm tra nếu nút tồn tại
    buyBtn.addEventListener('click', function () {
      // Lấy productId từ thuộc tính data-id
      const productId = parseInt(buyBtn.dataset.id, 10); // Sử dụng parseInt (cơ số 10)

      // Gửi request đến server
      fetch('/WebBongDen_war/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `productId=${productId}`,
      })
          .then(response => {
            if (response.ok) {
              alert('Sản phẩm đã được thêm vào giỏ hàng!');
            } else {
              alert('Có lỗi xảy ra, vui lòng thử lại!');
            }
          })
          .catch(error => console.error('Error:', error));
    });
  } else {
    console.error("Nút 'addToCart' không tồn tại trong DOM.");
  }
});
