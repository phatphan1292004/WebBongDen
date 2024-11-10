import { cateData, subcateData, productData } from "./data.js";
window.addEventListener("load", function () {
  const sliderMain = document.querySelector(".slider-main");
  const sliderItems = document.querySelectorAll(".slider-item");
  const nextBtn = document.querySelector(".slider-right");
  const prevBtn = document.querySelector(".slider-left");
  const dotItems = document.querySelectorAll(".slider-dot-item");
  let positionX = 0;
  const sliderItemWidth = sliderMain.offsetWidth;
  const sliderLength = sliderItems.length;
  let index = 0;

  setInterval(() => {
    handleChangeSlide(1);
  }, 3000);

  nextBtn.addEventListener("click", function () {
    handleChangeSlide(1);
  });

  prevBtn.addEventListener("click", function () {
    handleChangeSlide(-1);
  });

  [...dotItems].forEach((item) => {
    item.addEventListener("click", function (e) {
      [...dotItems].forEach((el) => el.classList.remove("active"));
      const sliderIndex = parseInt(e.target.dataset.index);
      index = sliderIndex;
      e.target.classList.add("active");
      positionX = -1 * index * sliderItemWidth;
      sliderMain.style.transform = `translateX(${positionX}px)`;
    });
  });

  function handleChangeSlide(dir) {
    if (dir === 1) {
      index++;
      if (index >= sliderLength) {
        index = 0;
      }
    } else if (dir === -1) {
      index--;
      if (index < 0) {
        index = sliderLength - 1;
      }
    }

    positionX = -1 * index * sliderItemWidth;
    sliderMain.style.transform = `translateX(${positionX}px)`;

    [...dotItems].forEach((el) => el.classList.remove("active"));
    dotItems[index].classList.add("active");
  }

  //Load category
  cateData.forEach((category) => {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("category");

    const productsList = `
            <p class="category-header">${category.name}</p>
            <ul class="category-products">
                ${subcateData
                  .filter((subcate) => subcate.idCate === category.id)
                  .map(
                    (subcate) =>
                      `<li class="category-item">${subcate.name}</li>`
                  )
                  .join("")}
            </ul>
        `;
    categoryItem.innerHTML = productsList;
    document.getElementById("category-list").appendChild(categoryItem);
  });

  //LoadProduct
  // <li class="product-item">
  //     <div class="img">
  //     <img
  //       src="https://denhoamy.vn/upload/attachment/thumb/7239den-chum-tiffany-trang-tri-noi-that-dc03596-05.jpg"
  //       alt="Đèn chùm tiffany trang trí nội thất DC03596"
  //     />
  //   </div>

  //   <div class="product-info">
  //     <div class="product-name">
  //       Đèn chùm tiffany trang trí nội thất DC03596
  //     </div>

  //     <p class="original-price">3.000.000 VND</p>

  //     <div class="price-discount">
  //       <p class="product-price">2.000.000 VND</p>
  //       <p class="discount-percentage">-33%</p>
  //     </div>
  //   </div>
  // </li>
  productData.forEach((item) => {
    const categoryItem = document.createElement("li");
    categoryItem.classList.add("product-item");

    // Tính toán giá sau giảm
    const originalPrice = parseInt(item.price);
    const discountPercent = parseFloat(item.discountPercent);
    const discountedPrice = originalPrice * (1 - discountPercent); // Giá sau giảm

    const productList = `
        <div class="img">
            <img
                src="${item.urlImage}"
                alt="${item.name}"
            />
        </div>

        <div class="product-info">
            <div class="product-name">
                ${item.name}
            </div>

            <p class="original-price">${originalPrice.toLocaleString()} VND</p>

            <div class="price-discount">
                <p class="product-price">${discountedPrice.toLocaleString()} VND</p>
                <p class="discount-percentage">${(
                  discountPercent * 100
                ).toFixed(0)}%</p>
            </div>
        </div>
    `;

    categoryItem.innerHTML = productList;

    document
      .getElementsByClassName("list-product")[0]
      .appendChild(categoryItem);
  });

  // JavaScript to toggle the sidebar and overlay visibility
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  // Function to open sidebar
  menuToggle.addEventListener("click", function () {
    sidebar.classList.add("active"); // Show sidebar
    overlay.classList.add("active"); // Show overlay
  });

  // Function to close sidebar when overlay is clicked
  overlay.addEventListener("click", function () {
    sidebar.classList.remove("active"); // Hide sidebar
    overlay.classList.remove("active"); // Hide overlay
  });

  const searchIcon = document.querySelector(".search-btn");
  const searchForm = document.querySelector("#search-form");

  // Xử lý sự kiện khi nhấp vào biểu tượng tìm kiếm
  searchIcon.addEventListener("click", () => {
    searchForm.classList.toggle("open");
  });
});
