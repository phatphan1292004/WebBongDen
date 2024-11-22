
  
  function showContent(sectionId) {
    // Ẩn tất cả các phần nội dung
    document.querySelectorAll(".content_section").forEach(section => {
      section.style.display = 'none';
    });

    // Hiển thị phần nội dung được chọn
    document.getElementById(sectionId).style.display = 'block';
  }

// Hàm xử lý đăng xuất
function logout() {
  alert("Đăng xuất thành công");
  window.location.href = "login.html";
}

function luuThongTin(){
  // document.getElementById("saveMessage").style.display = "block";
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
      option.textContent = "tháng " + i;
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

  // // hàm xử lí quản lí đơn hàng
  const orders = []; // Change to an array with order objects to show the table.

  // Function to load orders
  function loadOrders() {
      const orders = []; 
      const noOrdersDiv = document.getElementById('noOrders');
      const orderTableContainer = document.getElementById('orderTableContainer');
      const orderTableBody = document.getElementById('orderTableBody');
          if (orders.length === 0) {
              // hiện thị ra không có đơn hàng nào
              noOrdersDiv.style.display = 'block';
              orderTableContainer.style.display = 'none';
                  } else {
                      // hiện thị ra order table
                      noOrdersDiv.style.display = 'none';
                      orderTableContainer.style.display = 'block';
                  }
                //           // Populate orders in the table
                //           orders.forEach(order => {
                //                         const row = document.createElement('tr');
                         
                //                                     row.innerHTML = 
                //                                                 <td>${order.id}</td>,
                          
                // <td>${order.productName}</td>,
                //     <td>${order.price} VNĐ</td>,
                //     <td>${order.category}</td>,
                //     <td>${order.dateAdded}</td>,
                //     <td><a href="${order.imageUrl}" target="_blank">${order.imageUrl}</a></td>,
                //     <td>${order.productName}</td>,
                //     <td>${order.price} VNĐ</td>,
                //     <td>${order.category}</td>,
                //     <td>${order.dateAdded}</td>,
                //     <td>
                //         <button class="btn-view">Xem chi tiết</button>
                //         <button class="btn-edit">Sửa</button>
                //         <button class="btn-delete">Xóa</button>
                //     </td>;
                //      orderTableBody.appendChild(row);
                //                                               });

  }

