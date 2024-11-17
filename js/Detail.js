document.addEventListener("DOMContentLoaded", function () {
  // Đợi 3 giây sau khi DOMContentLoad
  // Code xử lý submenu sidebar
  document.querySelectorAll(".category-item > a").forEach(function (item) {
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

  // Code tăng giảm số lượng sản phẩm
  function increaseQuantity() {
    let quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
  }

  function decreaseQuantity() {
    let quantityInput = document.getElementById("quantity");
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  }

  // Hiển thị danh sách sản phẩm
  let container = document.getElementById("product-container");
  products.forEach((product, index) => {
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
