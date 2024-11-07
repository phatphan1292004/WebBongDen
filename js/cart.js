document.addEventListener("DOMContentLoaded", async function () {
  // Hàm lấy dữ liệu từ API
  const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  // Gọi API để lấy danh sách các tỉnh, huyện, xã
  const provinces = await fetchData("https://provinces.open-api.vn/api/p/");
  const provinceSelect = document.getElementById("province");
  provinces.forEach((province) => {
    const option = new Option(province.name, province.code);
    provinceSelect.appendChild(option);
  });

  // Lắng nghe sự kiện thay đổi tỉnh
  provinceSelect.addEventListener("change", async function () {
    const provinceCode = this.value;
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");

    // Xóa các lựa chọn trước khi thêm mới
    districtSelect.innerHTML = '<option value="">Chọn Quận, Huyện</option>';
    wardSelect.innerHTML = '<option value="">Chọn Phường, Xã</option>';

    if (provinceCode) {
      // Lấy danh sách quận/huyện theo tỉnh
      const province = await fetchData(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
      province.districts.forEach((district) => {
        const option = new Option(district.name, district.code);
        districtSelect.appendChild(option);
      });
    }
  });

  // Lắng nghe sự kiện thay đổi quận/huyện
  document.getElementById("district").addEventListener("change", async function () {
    const districtCode = this.value;
    const wardSelect = document.getElementById("ward");
    wardSelect.innerHTML = '<option value="">Chọn Phường, Xã</option>';

    if (districtCode) {
      // Lấy danh sách phường/xã theo quận/huyện
      const district = await fetchData(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
      district.wards.forEach((ward) => {
        const option = new Option(ward.name, ward.code);
        wardSelect.appendChild(option);
      });
    }
  });

  // Xử lý sự kiện thanh điều hướng
  const navList = document.querySelectorAll(".nav-item");
  function showTab(tabName) {
    document.querySelectorAll(".tab-content, .nav-item").forEach(el => el.classList.remove("active"));
    document.getElementById(tabName)?.classList.add("active");
    document.querySelector(`.nav-item[data-tab="${tabName}"]`)?.classList.add("active");
  }

  navList.forEach((item) => {
    item.addEventListener("click", () => showTab(item.getAttribute("data-tab")));
  });

  // Hiển thị tab mặc định (Giỏ hàng)
  showTab("cart");

  // Lắng nghe sự kiện trên các trường có thuộc tính required
  const buyBtn = document.querySelectorAll(".buy-btn");

  // Lắng nghe sự kiện click trên nút mua
  buyBtn.forEach((button) => {
    button.addEventListener("click", function () {
      const currentTab = document.querySelector(".tab-content.active");
      const nextTab = currentTab.nextElementSibling; // Lấy tab tiếp theo
  
      // Kiểm tra xem nếu đang ở tab "order-info"
      if (currentTab && currentTab.id === "order-info") {
        // Lấy tất cả input và select có thuộc tính required trong tab order-info
        const listInput = currentTab.querySelectorAll("input[required], select[required]");
  
        let isAllValid = true;
  
        // Duyệt qua tất cả các input và select để kiểm tra tính hợp lệ
        listInput.forEach((input) => {
          // Kiểm tra tính hợp lệ của input
          if (!input.validity.valid || !input.value) {
            isAllValid = false;
            input.classList.add("invalid");
            input.classList.remove("valid");
          } else {
            input.classList.remove("invalid");
            input.classList.add("valid");
          }
        });
  
        // Nếu tất cả các trường hợp lệ, chuyển sang tab tiếp theo
        if (isAllValid) {
          if (nextTab) {
            showTab(nextTab.id);
          }
        } else {
          alert("Vui lòng điền đầy đủ và hợp lệ thông tin!");
        }
      } else {
        if (nextTab) {
          showTab(nextTab.id);
        }
      }
    });
  });
  
  // Lắng nghe sự kiện input trên các trường có thuộc tính required
  const inputs = document.querySelectorAll("input[required], select[required]");
  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (input.validity.valid && input.value) {
        input.classList.remove("invalid");
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
        input.classList.add("invalid");
      }
    });
  });  
});
