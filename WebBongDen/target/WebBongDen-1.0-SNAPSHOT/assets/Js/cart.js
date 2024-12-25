document.addEventListener("DOMContentLoaded", async function () {
  const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

// Lấy danh sách tỉnh/thành phố
  const provinces = await fetchData("https://provinces.open-api.vn/api/p/");
  const provinceSelect = document.getElementById("province");

// Hiển thị tên tỉnh/thành phố trong value
  provinces.forEach((province) => {
    const option = new Option(province.name, province.name); // Sử dụng name thay vì code
    provinceSelect.appendChild(option);
  });

// Khi chọn tỉnh/thành phố, lấy danh sách quận/huyện
  provinceSelect.addEventListener("change", async function () {
    const provinceName = this.value; // Lấy tên của tỉnh/thành phố
    const districtSelect = document.getElementById("district");
    const wardSelect = document.getElementById("ward");

    districtSelect.innerHTML = '<option value="">Chọn Quận, Huyện</option>';
    wardSelect.innerHTML = '<option value="">Chọn Phường, Xã</option>';

    // Tìm mã tỉnh/thành phố từ tên
    const selectedProvince = provinces.find(
        (province) => province.name === provinceName
    );

    if (selectedProvince) {
      const province = await fetchData(
          `https://provinces.open-api.vn/api/p/${selectedProvince.code}?depth=2`
      );

      province.districts.forEach((district) => {
        const option = new Option(district.name, district.name); // Sử dụng name thay vì code
        districtSelect.appendChild(option);
      });
    }
  });

// Khi chọn quận/huyện, lấy danh sách phường/xã
  document
      .getElementById("district")
      .addEventListener("change", async function () {
        const districtName = this.value; // Lấy tên của quận/huyện
        const wardSelect = document.getElementById("ward");
        wardSelect.innerHTML = '<option value="">Chọn Phường, Xã</option>';

        // Tìm mã quận/huyện từ tên
        const provinceName = provinceSelect.value;
        const selectedProvince = provinces.find(
            (province) => province.name === provinceName
        );

        if (selectedProvince) {
          const province = await fetchData(
              `https://provinces.open-api.vn/api/p/${selectedProvince.code}?depth=2`
          );

          const selectedDistrict = province.districts.find(
              (district) => district.name === districtName
          );

          if (selectedDistrict) {
            const district = await fetchData(
                `https://provinces.open-api.vn/api/d/${selectedDistrict.code}?depth=2`
            );

            district.wards.forEach((ward) => {
              const option = new Option(ward.name, ward.name); // Sử dụng name thay vì code
              wardSelect.appendChild(option);
            });
          }
        }
      });


  //Code cho phần chuyển tab
  const tabs = document.querySelectorAll('.tab-content');

  // Hàm chuyển tab
  function switchTab(hash) {
    // Ẩn tất cả các tab
    tabs.forEach(tab => {
      tab.style.display = 'none';
    });

    // Hiển thị tab tương ứng
    const targetTab = document.querySelector(hash);
    if (targetTab) {
      targetTab.style.display = 'block';
    } else {
      console.error(`Tab không tồn tại: ${hash}`);
    }
  }

  // Kiểm tra hash hiện tại khi tải trang
  const currentHash = window.location.hash || '#cart'; // Mặc định là #cart
  switchTab(currentHash);

  // Lắng nghe sự kiện hashchange khi người dùng điều hướng
  window.addEventListener('hashchange', () => {
    const newHash = window.location.hash || '#cart';
    switchTab(newHash);
  });

  // Thêm sự kiện click cho các nút chuyển tab
  document.querySelectorAll('.buy-btn').forEach(button => {
    button.addEventListener('click', function () {
      const targetTab = this.getAttribute('data-tab');
      if (targetTab) {
        // Thay đổi hash trong URL
        window.location.hash = `#${targetTab}`;
      }
    });
  });
})

function updateQuantity(button, change) {
  // Tìm form gần nhất của nút được nhấn
  const form = button.closest('form');

  // Lấy trường input số lượng từ form
  const quantityInput = form.querySelector('input[name="quantity"]');

  // Chuyển giá trị hiện tại thành số nguyên và tính giá trị mới
  const currentValue = parseInt(quantityInput.value, 10);
  const newValue = Math.max(1, currentValue + change); // Đảm bảo số lượng không dưới 1

  // Gán giá trị mới cho input
  quantityInput.value = newValue;

  // Gửi form để cập nhật
  form.submit();
}
