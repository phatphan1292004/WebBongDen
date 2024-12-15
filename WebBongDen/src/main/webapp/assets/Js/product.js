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

  function renderCategoryList(cateData, subcateData) {
    const categoryList = document.querySelector(".category-list");
  
    cateData.forEach((category) => {
      // Tạo phần tử `<li>` cho danh mục chính
      const categoryItem = document.createElement("li");
      categoryItem.innerHTML = `
        <div class="cate-item">
          <p>${category.name}</p>
          <i class="fa-solid fa-caret-down"></i>
        </div>
        <ul class="subcategory-list"></ul>
      `;
  
      // Lọc danh mục con theo `idCate`
      const subcategories = subcateData.filter(
        (subcategory) => subcategory.idCate === category.id
      );
  
      // Render danh mục con
      const subcategoryList = categoryItem.querySelector(".subcategory-list");
      subcategories.forEach((subcategory) => {
        const subcategoryItem = document.createElement("li");
  
        // Thêm thẻ <a> cho từng danh mục con
        subcategoryItem.innerHTML = `<a href="${'Detail.html' || '#'}">${subcategory.name}</a>`;
        subcategoryList.appendChild(subcategoryItem);
      });
  
      // Thêm sự kiện ẩn/hiện danh mục con khi click
      const cateHeader = categoryItem.querySelector(".cate-item");
      cateHeader.addEventListener("click", () => {
        const isVisible = subcategoryList.style.display === "block";
        subcategoryList.style.display = isVisible ? "none" : "block";
        subcategoryList.style.height = subcategoryList.style.height === "0px" ? "auto" : "0px";
        cateHeader.querySelector("i").classList.toggle("active");
      });
  
      // Thêm danh mục chính vào danh sách
      categoryList.appendChild(categoryItem);
    });
  }
  
  // Gọi hàm render
  renderCategoryList(cateData, subcateData);
});
