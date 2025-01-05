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

  // // Thêm sự kiện click cho các nút chuyển tab
  // document.querySelectorAll('.buy-btn').forEach(button => {
  //   button.addEventListener('click', function () {
  //     const targetTab = this.getAttribute('data-tab');
  //     if (targetTab) {
  //       // Thay đổi hash trong URL
  //       window.location.hash = `#${targetTab}`;
  //     }
  //   });
  // });
})

function updateQuantity(button, change) {
  const form = button.closest('form');
  const quantityInput = form.querySelector('input[name="quantity"]');
  const productId = form.querySelector('input[name="productId"]').value;

  // Cập nhật số lượng mới
  const newValue = Math.max(1, parseInt(quantityInput.value, 10) + change);
  quantityInput.value = newValue;

  // Hiển thị loader
  Notiflix.Loading.standard('Đang cập nhật...');

  // Gửi yêu cầu AJAX
  fetch(form.action, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `productId=${productId}&quantity=${newValue}`,
  })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Cập nhật tổng tiền trên giao diện
          document.querySelector('.total-price').textContent = `${data.totalPrice.toLocaleString()} VND`;
        } else {
          Notiflix.Notify.failure('Cập nhật thất bại. Vui lòng thử lại.');
        }
      })
      .catch(() => {
        Notiflix.Notify.failure('Có lỗi xảy ra. Vui lòng thử lại.');
      })
      .finally(() => {
        // Ẩn loader
        Notiflix.Loading.remove();
      });

  // Gắn sự kiện cho nút buy-btn của tab thứ 2
  document.getElementById('buy-btn-tab2').addEventListener('click', function (e) {
    const form = this.closest('form'); // Lấy form gần nhất của nút
    const customerName = document.getElementById('cus-name').value.trim();
    const customerPhone = document.getElementById('cus-tele').value.trim();
    const province = document.getElementById('province').value;
    const district = document.getElementById('district').value;
    const ward = document.getElementById('ward').value;
    const streetAddress = document.getElementById('number-address').value.trim();

    // Kiểm tra các trường bắt buộc
    if (!customerName) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi!',
        text: 'Vui lòng nhập họ tên.',
      });
      e.preventDefault();
      return false;
    }
    if (!customerPhone) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi!',
        text: 'Vui lòng nhập số điện thoại.',
      });
      e.preventDefault();
      return false;
    }
    if (!province) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi!',
        text: 'Vui lòng chọn Tỉnh/Thành phố.',
      });
      e.preventDefault();
      return false;
    }
    if (!district) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi!',
        text: 'Vui lòng chọn Quận/Huyện.',
      });
      e.preventDefault();
      return false;
    }
    if (!ward) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi!',
        text: 'Vui lòng chọn Phường/Xã.',
      });
      e.preventDefault();
      return false;
    }
    if (!streetAddress) {
      Swal.fire({
        icon: 'error',
        title: 'Lỗi!',
        text: 'Vui lòng nhập địa chỉ (Số nhà, tên đường).',
      });
      e.preventDefault();
      return false;
    }

    // Nếu tất cả đều hợp lệ
    Swal.fire({
      icon: 'success',
      title: 'Thành công!',
      text: 'Thông tin hợp lệ, đang xử lý đặt hàng...',
      timer: 2000,
      showConfirmButton: false,
    }).then(() => {
      form.submit(); // Gửi form sau khi hiển thị thông báo thành công
    });
  });
}




