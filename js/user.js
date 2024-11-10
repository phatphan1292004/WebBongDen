  // Show the modal
  function showContent(sectionId) {
    // Ẩn tất cả các phần nội dung
    document.querySelectorAll(".content_section").forEach(section => {
      section.style.display = 'none';
    });

    // Hiển thị phần nội dung được chọn
    document.getElementById(sectionId).style.display = 'block';
  }
  // Hiển thị hộp thông báo khi nhấn vào "Đăng xuất"
  document.getElementById("logoutLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("logoutModal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
});

// Hàm xử lý đăng xuất
function logout() {
    alert("Bạn đã đăng xuất!");
    // Chuyển hướng hoặc thực hiện hành động đăng xuất tại đây
    document.getElementById("logoutModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

// Hàm hủy bỏ đăng xuất
function cancelLogout() {
    document.getElementById("logoutModal").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
// option cho ngày
function populateDays() {
    const daySelect = document.getElementById('day');
    daySelect.innerHTML = '<option value="date">Ngày</option>'; // Reset options
    for (let i = 1; i <= 31; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      daySelect.appendChild(option);
    }
  }
// option cho tháng
  function populateMonths() {
    const monthSelect = document.getElementById('month');
    monthSelect.innerHTML = '<option value="month">Tháng</option>'; // Reset options
    for (let i = 1; i <= 12; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      monthSelect.appendChild(option);
    }
  }
// option cho năm
  function populateYears() {
    const yearSelect = document.getElementById('year');
    yearSelect.innerHTML = '<option value="year">Năm</option>'; // Reset options
    const currentYear = new Date().getFullYear();
    for (let i = 1920; i <= currentYear; i++) {
      const option = document.createElement('option');
      option.value = i;
      option.textContent = i;
      yearSelect.appendChild(option);
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
  // Populate dropdowns on page load
    populateDays();
    populateMonths();
    populateYears();
  });