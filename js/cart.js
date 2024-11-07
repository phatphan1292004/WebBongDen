document.addEventListener("DOMContentLoaded", async function () {
  const tabHistory = []; // Mảng lưu trữ các tab đã qua
  let canChangeTab = false; // Biến này kiểm tra chuyển tab hay không

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
      const province = await fetchData(
        `https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`
      );
      province.districts.forEach((district) => {
        const option = new Option(district.name, district.code);
        districtSelect.appendChild(option);
      });
    }
  });

  // Lắng nghe sự kiện thay đổi quận/huyện
  document
    .getElementById("district")
    .addEventListener("change", async function () {
      const districtCode = this.value;
      const wardSelect = document.getElementById("ward");
      wardSelect.innerHTML = '<option value="">Chọn Phường, Xã</option>';

      if (districtCode) {
        // Lấy danh sách phường/xã theo quận/huyện
        const district = await fetchData(
          `https://provinces.open-api.vn/api/d/${districtCode}?depth=2`
        );
        district.wards.forEach((ward) => {
          const option = new Option(ward.name, ward.code);
          wardSelect.appendChild(option);
        });
      }
    });

  // Xử lý sự kiện thanh điều hướng
  const navList = document.querySelectorAll(".nav-item");
  
  function showTab(tabName) {
    // Ẩn tất cả các tab và bỏ active của tất cả các tab item
    document
      .querySelectorAll(".tab-content, .nav-item")
      .forEach((el) => el.classList.remove("active", "highlight"));
    
    // Thêm active vào tab hiện tại
    document.getElementById(tabName)?.classList.add("active");
    document
      .querySelector(`.nav-item[data-tab="${tabName}"]`)
      ?.classList.add("active");
  
    // Kiểm tra xem tab hiện tại có trong mảng tabHistory
    const tabIndex = tabHistory.indexOf(tabName);
    
    if (tabIndex === -1) {
      // Nếu tab chưa có trong mảng, thêm vào mảng
      tabHistory.push(tabName);
    } else {
      // Nếu tab đã có trong mảng, xóa các tab sau tab này trong mảng
      tabHistory.splice(tabIndex + 1); // Loại bỏ các tab sau tab hiện tại
    }
  
    // Cập nhật màu nền cho tab trong mảng tabHistory
    navList.forEach((item) => {
      if (tabHistory.includes(item.getAttribute("data-tab"))) {
        item.classList.add("highlight");
      } else {
        item.classList.remove("highlight"); // Loại bỏ màu cho tab không có trong mảng
      }
    });
  }  

  navList.forEach((item) => {
    item.addEventListener("click", (event) => {
      if (canChangeTab) {
        showTab(item.getAttribute("data-tab"));
      } else {
        event.preventDefault(); // Ngừng hành động khi không cho phép chuyển tab
      }
    });
  });

  // Hiển thị tab mặc định (Giỏ hàng)
  showTab("cart");

  // Lắng nghe sự kiện trên các trường có thuộc tính required
  const buyBtn = document.querySelectorAll(".buy-btn");

  // Lắng nghe sự kiện click trên nút mua
  buyBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const currentTab = document.querySelector(".tab-content.active");
      const nextTab = currentTab?.nextElementSibling; // Tab tiếp theo nếu có

      if (currentTab?.id === "order-info") {
        const inputs = currentTab.querySelectorAll(
          "input[required], select[required]"
        );
        let isAllValid = true;

        // Lấy thông tin khách hàng từ các trường và cập nhật vào tab tiếp theo
        const provinceSelect = document.getElementById("province");
        const districtSelect = document.getElementById("district");
        const wardSelect = document.getElementById("ward");

        const province =
          provinceSelect.options[provinceSelect.selectedIndex]?.text || "";
        const district =
          districtSelect.options[districtSelect.selectedIndex]?.text || "";
        const ward = wardSelect.options[wardSelect.selectedIndex]?.text || "";

        const fullAddress = `${
          document.getElementById("number-address").value
        }, ${ward}, ${district}, ${province}`;

        document.querySelector(".customer-name").textContent =
          document.getElementById("cus-name").value;
        document.querySelector(".customer-phone").textContent =
          document.getElementById("cus-tele").value;
        document.querySelector(".customer-address").textContent = fullAddress;

        // Duyệt qua các input và kiểm tra tính hợp lệ
        inputs.forEach((input) => {
          if (!input.validity.valid || !input.value) {
            isAllValid = false;
          }
        });

        if (isAllValid && nextTab) {
          // Cho phép chuyển tab sau khi mua hàng
          canChangeTab = true;
          showTab(nextTab.id);
        } else {
          alert("Vui lòng điền đầy đủ và hợp lệ thông tin!");
        }
      } else if (nextTab) {
        canChangeTab = true;
        showTab(nextTab.id);
      }
    });
  });
});
