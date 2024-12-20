import { cateData, subcateData, productData } from "./data.js";
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
});
