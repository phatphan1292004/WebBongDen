document.addEventListener("DOMContentLoaded", function () {
  fetch("https://provinces.open-api.vn/api/p/")
    .then((response) => response.json())
    .then((provinces) => {
      const provinceSelect = document.getElementById("province");
      provinces.forEach((province) => {
        const option = document.createElement("option");
        option.value = province.code;
        option.textContent = province.name;
        provinceSelect.appendChild(option);
      });
    });

  // Lắng nghe sự kiện thay đổi tỉnh
  document.getElementById("province").addEventListener("change", function () {
    const provinceCode = this.value;
    const districtSelect = document.getElementById("district");
    districtSelect.innerHTML = '<option value="">Chọn Quận, Huyện</option>';
    document.getElementById("ward").innerHTML =
      '<option value="">Chọn Phường, Xã</option>';

    if (provinceCode) {
      // Lấy danh sách quận/huyện theo tỉnh
      fetch(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
        .then((response) => response.json())
        .then((province) => {
          province.districts.forEach((district) => {
            const option = document.createElement("option");
            option.value = district.code;
            option.textContent = district.name;
            districtSelect.appendChild(option);
          });
        });
    }
  });

  // Lắng nghe sự kiện thay đổi quận/huyện
  document.getElementById("district").addEventListener("change", function () {
    const districtCode = this.value;
    const wardSelect = document.getElementById("ward");
    wardSelect.innerHTML = '<option value="">Chọn Phường, Xã</option>';

    if (districtCode) {
      // Lấy danh sách phường/xã theo quận/huyện
      fetch(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
        .then((response) => response.json())
        .then((district) => {
          district.wards.forEach((ward) => {
            const option = document.createElement("option");
            option.value = ward.code;
            option.textContent = ward.name;
            wardSelect.appendChild(option);
          });
        });
    }
  });

  const navList = document.querySelectorAll(".nav-item");

  function showTab(tabName) {
    const tabContents = document.querySelectorAll(".tab-content");
    tabContents.forEach((tab) => tab.classList.remove("active"));

    navList.forEach((item) => item.classList.remove("active"));

    const activeTabContent = document.getElementById(tabName);
    if (activeTabContent) {
      activeTabContent.classList.add("active");
    }

    const activeNavItem = document.querySelector(
      `.nav-item[data-tab="${tabName}"]`
    );
    if (activeNavItem) {
      activeNavItem.classList.add("active");
    }
  }

  navList.forEach((item) => {
    item.addEventListener("click", function () {
      const tabName = item.getAttribute("data-tab");
      showTab(tabName);
    });
  });

  // Hiển thị tab mặc định (Giỏ hàng)
  showTab("cart");

  const buyBtn = document.querySelector(".buy-btn");
  buyBtn.addEventListener("click", function () {
    showTab("order-info");
  });
});
