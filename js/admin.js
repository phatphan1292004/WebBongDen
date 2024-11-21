import {
  cateData,
  subcateData,
  productData,
  customerData,
  orderData,
} from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  const bar = document.querySelector(".fa-bars");
  const sidebar = document.querySelector(".sidebar");
  const navItemsP = document.querySelectorAll(".nav-item p");
  const navItems = document.querySelectorAll(".nav-item");
  const tabContents = document.querySelectorAll(".tab-content");
  const mainContent = document.querySelector(".main-content");
  const shortTexts = [
    "Dashboard",
    "Sản phẩm",
    "Khách hàng",
    "Đơn hàng",
    "Doanh thu",
  ];
  const fullTexts = [
    "Dashboard",
    "Quản lý sản phẩm",
    "Quản lý khách hàng",
    "Quản lý đơn hàng",
    "Thống kê doanh thu",
  ];
  const saveProductBtn = document.getElementById("save-product");
  const overlay = document.getElementById("overlay");
  const cancelAdd = document.querySelector(".fa-xmark");
  const productTableBody = document.getElementById("product-table-body");
  const cusTableBody = document.getElementById("customer-table-body");

  // Toggle sidebar
  bar.addEventListener("click", function () {
    sidebar.classList.toggle("expanded");
    mainContent.classList.toggle("collapsed");
    navItemsP.forEach((item, index) => {
      item.textContent = sidebar.classList.contains("expanded")
        ? shortTexts[index]
        : fullTexts[index];
    });
  });

  // Tab navigation
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const index = item.getAttribute("data-index");
      tabContents.forEach((content) => {
        content.style.display = "none";
      });
      navItems.forEach((nav) => {
        nav.classList.remove("active");
      });
      tabContents[index].style.display = "block";
      item.classList.add("active");

      tabContents.forEach((tab) => {
        tab.classList.remove("active"); // Xóa class active
      });

      if (index == 5) {
        document.getElementById("submenu-admin").classList.toggle("open");
      } else if (index < 5) {
        document.getElementById("submenu-admin").classList.remove("open");
      }
    });
  });

  tabContents[0].style.display = "block"; // Show the first tab by default
  navItems[0].classList.add("active"); // Activate the first tab by default

  // Trang product========================================

  // Load product table
  function loadProductTable(products = productData) {
    productTableBody.innerHTML = "";
    products.forEach((item) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${item.id}</td>
                <td>
                      <img src="${item.urlImage}" alt="" class = "row-image-item">
                </td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.nameCate}</td>
                <td>${item.dateCreate}</td>
                <td><button class="view-details view-details-product">Xem chi tiết</button></td>
                <td>
                    <button class="delete-product" data-id="${item.id}">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            `;
      productTableBody.appendChild(newRow);
    });
  }
  loadProductTable();
  // Hàm sắp xếp dữ liệu và cập nhật bảng
  function sortProductTable(sortType) {
    const sortedProducts = [...productData];
    switch (sortType) {
      case "name-asc":
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
    }
    loadProductTable(sortedProducts);
  }

  // Gắn sự kiện click cho nút sắp xếp
  document.getElementById("sort-btn-product").addEventListener("click", () => {
    const sortType = document.getElementById("sort-select-product").value;
    if (sortType) {
      sortProductTable(sortType);
    } else {
      alert("Vui lòng chọn kiểu sắp xếp");
    }
  });

  // Tái sử dụng hàm search chỉ cho tên sản phẩm
  // Tái sử dụng hàm search cho cả sản phẩm và khách hàng
  function searchProducts(
    searchBtnId,
    searchInputId,
    data,
    loadFunction,
    searchField
  ) {
    document.getElementById(searchBtnId).addEventListener("click", () => {
      const searchTerm = document
        .getElementById(searchInputId)
        .value.toLowerCase();
      const filteredData = data.filter((item) =>
        item[searchField].toLowerCase().includes(searchTerm)
      );
      loadFunction(filteredData); // Gọi hàm load với dữ liệu đã lọc
    });
  }

  function loadCustomerTable(cus = customerData) {
    cusTableBody.innerHTML = "";
    cus.forEach((item) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.address}</td>
                <td>${item.registeredDate}</td>
                <td><button class="view-details">Xem chi tiết</button></td>
            `;
      cusTableBody.appendChild(newRow);
    });
  }

  // Gọi hàm tìm kiếm cho sản phẩm chỉ theo tên
  searchProducts(
    "search-btn-product",
    "product-search",
    productData,
    loadProductTable,
    "name"
  );
  searchProducts(
    "search-btn-cus",
    "customer-search",
    customerData,
    loadCustomerTable,
    "name"
  );
  searchProducts(
    "search-btn-order",
    "order-search",
    orderData,
    loadOrderTable,
    "customerName"
  );

  document.querySelector(".add-product").addEventListener("click", function () {
    overlay.classList.add("active");
  });

  cancelAdd.addEventListener("click", function () {
    overlay.classList.remove("active");
    document.getElementById("product-form").reset();
  });

  saveProductBtn.addEventListener("click", () => {
    const productId = document.getElementById("product-id").value;
    const productImage = document.getElementById("product-image").value;
    const productName = document.getElementById("product-name").value;
    const productPrice = document.getElementById("product-price").value;
    const productCategory = document.getElementById("product-category").value;
    const productDate = document.getElementById("product-date").value;

    productData.push({
      id: productId,
      name: productName,
      urlImage: productImage,
      price: productPrice,
      discountPercent: "",
      desc: "",
      idCate: "01",
      cateName: productCategory,
      dateCreate: productDate,
    });

    loadProductTable();

    document.getElementById("product-form").reset();
    overlay.classList.remove("active");
  });

  // Xóa row khi ấn vào nút xóa
  document
    .querySelector("#product-table-body")
    .addEventListener("click", function (e) {
      const deleteButton = e.target.closest(".delete-product");
      if (deleteButton) {
        const productId = deleteButton.getAttribute("data-id");
        showCustomConfirm(
          `Bạn có chắc chắn muốn xóa đơn hàng ID: ${productId}?`,
          function () {
            deleteProductById(productId);
            showNotification(`Sản phẩm với ID ${productId} đã bị xóa.`);
            loadProductTable(productData);
          }
        );
      }
    });

  function deleteProductById(productId) {
    const index = productData.findIndex((product) => product.id === productId);
    if (index !== -1) {
      productData.splice(index, 1); // Xóa phần tử khỏi mảng
    }
  }

  // Trang khách hàng
  function loadCustomerTable(cus = customerData) {
    cusTableBody.innerHTML = "";
    cus.forEach((item) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.address}</td>
                <td>${item.registeredDate}</td>
                <td><button class="view-details">Xem chi tiết</button></td>
            `;
      cusTableBody.appendChild(newRow);
    });
  }

  cusTableBody.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("view-details")) {
      document
        .getElementById("purchase-history-overlay")
        .classList.add("active");
    }
  });
  document
    .getElementById("close-purchase-history-details")
    .addEventListener("click", function () {
      document
        .getElementById("purchase-history-overlay")
        .classList.remove("active");
    });

  loadCustomerTable();

  function sortCustomers(option) {
    const sortedCustomers = [...customerData];
    switch (option) {
      case "name-asc":
        sortedCustomers.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sortedCustomers.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "date-desc":
        sortedCustomers.sort(
          (a, b) => new Date(b.registeredDate) - new Date(a.registeredDate)
        );
        break;
      default:
        console.log("Tùy chọn không hợp lệ.");
        break;
    }
    loadCustomerTable(sortedCustomers);
  }

  // Thêm sự kiện cho nút sắp xếp
  document
    .querySelector("#sort-btn-cus")
    .addEventListener("click", function () {
      const selectedOption = document.querySelector(
        "#sort-select-customer"
      ).value;
      if (selectedOption) {
        sortCustomers(selectedOption);
      } else {
        showNotification("Vui lòng chọn một tùy chọn sắp xếp.", "error");
      }
    });

  // Trang đơn hàng ===========================================================
  const orderTableBody = document.getElementById("order-table-body");

  function loadOrderTable(orders = orderData) {
    orderTableBody.innerHTML = "";

    orders.forEach((order) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customerName}</td>
        <td>${order.orderDate}</td>
        <td>${order.expectedDeliveryDate}</td>
        <td>${order.address}</td>
        <td>${order.status}</td>
        <td>${order.paymentMethod}</td>
        <td><button class="view-details">Chi tiết</button></td>
        <td>
          ${
            order.status === "Chờ xử lý"
              ? `
            <button class="approve-order" onclick="approveOrder('${order.id}')"><i class="fa-solid fa-check"></i></button>
            <button class="reject-order" onclick="rejectOrder('${order.id}')"><i class="fa-solid fa-times"></i></button>
          `
              : ""
          }
        </td>
      `;
      orderTableBody.appendChild(row);
    });
  }

  // Ví dụ gọi hàm loadOrderTable để hiển thị `orderData`
  loadOrderTable(orderData);

  orderTableBody.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("view-details")) {
      document.getElementById("overlay2").classList.add("active");
    }
  });

  document
    .getElementById("close-invoice-details")
    .addEventListener("click", function () {
      document.getElementById("overlay2").classList.remove("active");
    });

  const sortSelect = document.getElementById("sort-select-order");
  const sortButton = document.getElementById("sort-btn-order");
  // Hàm lọc danh sách đơn hàng
  sortButton.addEventListener("click", function () {
    const sortValue = sortSelect.value;
    let filteredOrders = [...orderData];

    switch (sortValue) {
      case "name-asc": // Ngày đặt: Mới nhất
        // Sắp xếp danh sách theo ngày đặt hàng mới nhất
        filteredOrders.sort((a, b) => {
          const dateA = new Date(a.orderDate.split("-").reverse().join("-"));
          const dateB = new Date(b.orderDate.split("-").reverse().join("-"));
          return dateB - dateA; // Sắp xếp giảm dần
        });

        // Lấy ngày đặt hàng mới nhất
        const latestOrderDate =
          filteredOrders.length > 0
            ? new Date(
                filteredOrders[0].orderDate.split("-").reverse().join("-")
              )
            : null;

        // Lọc các đơn hàng có ngày đặt hàng trùng với ngày mới nhất
        const latestOrders = filteredOrders.filter((order) => {
          const orderDate = new Date(
            order.orderDate.split("-").reverse().join("-")
          );
          return orderDate.getTime() === latestOrderDate.getTime();
        });

        // Hiển thị danh sách đơn hàng mới nhất ra bảng
        loadOrderTable(latestOrders);
        break;

      case "name-desc": // Ngày đặt: Cũ nhất
        filteredOrders.sort(
          (a, b) => new Date(a.orderDate) - new Date(b.orderDate)
        );
        break;
      case "price-asc": // ID A-Z
        filteredOrders.sort((a, b) => a.id - b.id);
        break;
      case "price-desc": // ID Z-A
        filteredOrders.sort((a, b) => b.id - a.id);
        break;
      case "pending-orders": // Đơn hàng chưa duyệt
        filteredOrders = filteredOrders.filter(
          (order) => order.status === "Chờ xử lý"
        );
        break;
      default:
        break;
    }

    // Cập nhật bảng đơn hàng sau khi lọc
    loadOrderTable(filteredOrders);
  });

  // Hàm xử lý duyệt đơn hàng
  window.approveOrder = function (orderId) {
    const order = orderData.find((order) => order.id === orderId);

    if (order) {
      order.status = "Đã duyệt";
      showNotification(`Đơn hàng ID: ${orderId} đã được duyệt!`);
      loadOrderTable(orderData);
    } else {
      showNotification(`Không tìm thấy đơn hàng với ID: ${orderId}`, "error");
    }
  };

  window.rejectOrder = function (orderId) {
    showCustomConfirm(
      `Bạn có chắc chắn muốn xóa đơn hàng ID: ${orderId}?`,
      function () {
        const index = orderData.findIndex(
          (order) => String(order.id) === String(orderId)
        );
        if (index !== -1) {
          orderData.splice(index, 1); // Xóa phần tử tại vị trí index
        }
        showNotification(`Đơn hàng ID: ${orderId} đã bị xóa!`);
        loadOrderTable(orderData); // Cập nhật lại bảng
      }
    );
  };
  // ----Ket thuc trang don hang ============================

  // Trang thống kê

  // Dữ liệu cho biểu đồ khách hàng
  const data = {
    labels: ["Khách hàng mới", "Khách hàng thường xuyên", "Khác"], // Các nhãn
    datasets: [
      {
        data: [30, 50, 20],
        backgroundColor: ["#4ECDC4", "#FF6B6B", "#FFE66D"],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  // Cấu hình biểu đồ
  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      cutout: "85%",
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          enabled: true,
        },
      },
    },
  };

  const ctx2 = document.getElementById("customerPieChart").getContext("2d");

  // Khởi tạo biểu đồ
  new Chart(ctx2, config);

  const ctx = document.getElementById("revenueChart").getContext("2d");

  // Dữ liệu doanh thu và số lượng sản phẩm bán được cho 12 tháng
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const revenue = [
    100000, 150000, 130000, 180000, 20000, 25000, 30000, 40000, 50000, 60000,
    70000, 80000,
  ];
  const quantitySold = [120, 150, 170, 200, 50, 60, 70, 80, 90, 100, 110, 120];

  // Vẽ biểu đồ
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          label: "Doanh thu (VND)",
          data: revenue,
          backgroundColor: "rgba(75, 192, 192, 0.3)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          yAxisID: "y",
          barPercentage: 0.8, // Giảm độ rộng của cột
          categoryPercentage: 0.9, // Đưa cột sát với cạnh bên
        },
        {
          label: "Số lượng bán được",
          data: quantitySold,
          type: "line",
          borderColor: "#FF5733",
          backgroundColor: "rgba(255, 87, 51, 0.3)",
          borderWidth: 2,
          fill: true,
          tension: 0.3,
          yAxisID: "y1",
          pointBackgroundColor: "#FF5733",
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        tooltip: {
          mode: "index",
          intersect: false,
        },
        legend: {
          position: "top",
          labels: {
            font: {
              size: 14,
            },
          },
        },
      },
      layout: {
        padding: {
          left: 0, // Loại bỏ padding bên trái
          right: 0,
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 12,
            },
          },
        },
        y: {
          type: "linear",
          display: true,
          position: "left",
          title: {
            display: true,
            text: "Doanh thu (VND)",
          },
          ticks: {
            color: "rgba(75, 192, 192, 1)",
          },
          beginAtZero: true, // Bắt đầu từ 0
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          grid: {
            drawOnChartArea: false,
          },
          title: {
            display: true,
            text: "Số lượng sản phẩm",
          },
          ticks: {
            color: "#FF5733",
          },
        },
      },
    },
  });

  function showDateInputs(value) {
    var monthInputGroup = document.getElementById("month-input-group");

    if (value === "monthly") {
      monthInputGroup.style.display = "block";
    } else {
      monthInputGroup.style.display = "none";
    }
  }

  document
    .getElementById("statistic-type")
    .addEventListener("change", function () {
      var value = this.value;
      showDateInputs(value);
    });

  // Hàm xử lý khi nhấn nút "Xem Thống Kê"
  // Hàm xử lý khi nhấn nút "Xem Thống Kê"
  function processInput() {
    var year = document.getElementById("month").value; // lấy giá trị năm
    var statisticType = document.getElementById("statistic-type").value; // lấy loại thống kê (theo tháng hay theo năm)

    if (statisticType === "monthly" && !year) {
      alert("Vui lòng nhập năm.");
      return;
    }

    // Nếu chọn thống kê theo tháng, lấy dữ liệu tháng; nếu chọn theo năm, lấy dữ liệu năm
    var revenueData =
      statisticType === "monthly"
        ? getMonthlyRevenueData(year)
        : getYearlyRevenueData();
    generateChart(revenueData, statisticType);
  }

  // Giả lập dữ liệu doanh thu và sản phẩm bán được theo tháng (cần thay thế bằng dữ liệu thực tế)
  function getMonthlyRevenueData(year) {
    return {
      labels: [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
      ],
      datasets: [
        {
          label: "Doanh thu",
          data: [
            5000, 7000, 4000, 6000, 8000, 9000, 6500, 7500, 6700, 8000, 8500,
            9500,
          ],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
        {
          label: "Sản phẩm bán được",
          data: [150, 200, 120, 180, 220, 250, 190, 210, 180, 230, 240, 260],
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          fill: true,
        },
      ],
    };
  }

  // Giả lập dữ liệu doanh thu và sản phẩm bán được theo năm (cần thay thế bằng dữ liệu thực tế)
  function getYearlyRevenueData() {
    return {
      labels: ["2020", "2021", "2022", "2023", "2024"],
      datasets: [
        {
          label: "Doanh thu",
          data: [50000, 70000, 60000, 80000, 90000],
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: true,
        },
        {
          label: "Sản phẩm bán được",
          data: [1500, 2000, 1800, 2200, 2500],
          borderColor: "rgba(153, 102, 255, 1)",
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          fill: true,
        },
      ],
    };
  }

  // Hàm tạo biểu đồ
  function generateChart(data, statisticType) {
    var ctx = document.getElementById("revenue-chart").getContext("2d");

    if (window.myChart) {
      window.myChart.destroy(); // Hủy bỏ biểu đồ cũ nếu có
    }

    window.myChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: statisticType === "monthly" ? "Tháng" : "Năm",
            },
          },
          y: {
            title: {
              display: true,
              text: "Giá trị",
            },
          },
        },
      },
    });
  }

  // Thêm sự kiện cho nút "Xem Thống Kê"
  document.getElementById("submit-btn").addEventListener("click", processInput);

  // Thêm sự kiện khi thay đổi lựa chọn thống kê (theo tháng hoặc theo năm)
  document
    .getElementById("statistic-type")
    .addEventListener("change", function () {
      var statisticType = this.value;
      if (statisticType === "monthly") {
        document.getElementById("month").placeholder = "Nhập năm"; // Hiển thị placeholder "Nhập năm" khi chọn thống kê theo tháng
      } else {
        document.getElementById("month").placeholder = ""; // Không yêu cầu nhập tháng nếu chọn thống kê theo năm
      }
    });

  // Code phần chi tiết sản phẩm
  productTableBody.addEventListener("click", function (event) {
    if (
      event.target &&
      event.target.classList.contains("view-details-product")
    ) {
      document.querySelector(".tab-content-container").style.display = "none";
      document.querySelector(".product-details").style.display = "block";
      document.querySelector(".product-stats").style.display = "none";
    }
  });

  document
    .getElementById("close-details-btn")
    .addEventListener("click", function () {
      document.querySelector(".product-details").style.display = "none";
      document.querySelector(".tab-content-container").style.display = "block";
      document.querySelector(".product-stats").style.display = "flex";
    });

  document
    .getElementById("edit-product-btn")
    .addEventListener("click", function () {
      // Chuyển tất cả các trường sang chế độ chỉnh sửa (ẩn span và hiển thị input)
      document.getElementById("edit-product-id").style.display = "block";
      document.getElementById("edit-product-image").style.display = "block";
      document.getElementById("edit-product-name").style.display = "block";
      document.getElementById("edit-product-price").style.display = "block";
      document.getElementById("edit-product-category").style.display = "block";
      document.getElementById("edit-product-status").style.display = "block";
      document.getElementById("edit-product-description").style.display =
        "block";
      document.getElementById("edit-product-date").style.display = "block";
      document.getElementById("edit-product-discount").style.display = "block";

      document.getElementById("product-id-view").style.display = "none";
      document.getElementById("product-image-view").style.display = "none";
      document.getElementById("product-name-view").style.display = "none";
      document.getElementById("product-price-view").style.display = "none";
      document.getElementById("product-category-view").style.display = "none";
      document.getElementById("product-status-view").style.display = "none";
      document.getElementById("product-description-view").style.display =
        "none";
      document.getElementById("product-date-view").style.display = "none";
      document.getElementById("product-discount-view").style.display = "none";

      // Hiển thị nút Save
      document.getElementById("save-product-btn").style.display = "block";
      document.getElementById("edit-product-btn").style.display = "none";
    });

  document
    .getElementById("save-product-btn")
    .addEventListener("click", function () {
      // Lưu lại giá trị trong các input
      const productId = document.getElementById("edit-product-id").value;
      const productImage = document.getElementById("edit-product-image").value;
      const productName = document.getElementById("edit-product-name").value;
      const productPrice = document.getElementById("edit-product-price").value;
      const productCategory = document.getElementById(
        "edit-product-category"
      ).value;
      const productStatus = document.getElementById(
        "edit-product-status"
      ).value;
      const productDescription = document.getElementById(
        "edit-product-description"
      ).value;
      const productDate = document.getElementById("edit-product-date").value;
      const productDiscount = document.getElementById(
        "edit-product-discount"
      ).value;

      // Cập nhật lại các phần tử để hiển thị thông tin đã sửa
      document.getElementById("product-id-view").textContent = productId;
      document.getElementById("product-image-view").textContent = productImage;
      document.getElementById("product-name-view").textContent = productName;
      document.getElementById("product-price-view").textContent = productPrice;
      document.getElementById("product-category-view").textContent =
        productCategory;
      document.getElementById("product-status-view").textContent =
        productStatus;
      document.getElementById("product-description-view").textContent =
        productDescription;
      document.getElementById("product-date-view").textContent = productDate;
      document.getElementById("product-discount-view").textContent =
        productDiscount;

      // Chuyển lại các input và textarea thành ẩn
      document.getElementById("edit-product-id").style.display = "none";
      document.getElementById("edit-product-image").style.display = "none";
      document.getElementById("edit-product-name").style.display = "none";
      document.getElementById("edit-product-price").style.display = "none";
      document.getElementById("edit-product-category").style.display = "none";
      document.getElementById("edit-product-status").style.display = "none";
      document.getElementById("edit-product-description").style.display =
        "none";
      document.getElementById("edit-product-date").style.display = "none";
      document.getElementById("edit-product-discount").style.display = "none";

      // Hiển thị các phần tử thông tin ở dạng inline-block
      document.getElementById("product-id-view").style.display = "inline-block";
      document.getElementById("product-image-view").style.display =
        "inline-block";
      document.getElementById("product-name-view").style.display =
        "inline-block";
      document.getElementById("product-price-view").style.display =
        "inline-block";
      document.getElementById("product-category-view").style.display =
        "inline-block";
      document.getElementById("product-status-view").style.display =
        "inline-block";
      document.getElementById("product-description-view").style.display =
        "inline-block";
      document.getElementById("product-date-view").style.display =
        "inline-block";
      document.getElementById("product-discount-view").style.display =
        "inline-block";

      // Ẩn nút Save và hiện lại nút Edit
      document.getElementById("save-product-btn").style.display = "none";
      document.getElementById("edit-product-btn").style.display =
        "inline-block";
    });

  const menuItems = document.querySelectorAll(".submenu-admin .menu-item");

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Loại bỏ class active khỏi tất cả menu-items
      menuItems.forEach((menuItem) => menuItem.classList.remove("active"));

      // Thêm class active vào menu-item hiện tại
      item.classList.add("active");

      // Lấy target từ data-target
      const targetId = item.getAttribute("data-target");

      // Ẩn tất cả tab-content
      tabContents.forEach((tab) => {
        tab.classList.remove("active");
      });

      // Hiển thị tab-content tương ứng
      const targetTab = document.getElementById(targetId);
      if (targetTab) {
        targetTab.classList.add("active"); // Thêm class active
      }
    });
  });

  // Code trang phiếu khuyến mãi ------------------------------------------

  // Gán sự kiện cho các nút "Xóa"
  const discountList = document.querySelector(".list-discount");
  const notification = document.getElementById("notification");
  const customConfirm = document.getElementById("custom-confirm");
  const confirmMessage = document.getElementById("confirm-message");
  const confirmOk = document.getElementById("confirm-ok");
  const confirmCancel = document.getElementById("confirm-cancel");
  const addDiscountBtn = document.getElementById("add-discount-btn");
  let editingRow = null; // Lưu trữ hàng đang chỉnh sửa
  const discountCodeInput = document.getElementById("discount-code");
  const discountPercentInput = document.getElementById("discount-percent");
  const discountExpiryInput = document.getElementById("discount-expiry");
  const discountForm = document.getElementById("discount-form");

  discountList.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON" && e.target.textContent === "Xóa") {
      const row = e.target.closest("tr");
      const discountCode = row.cells[0].textContent;

      // Hiển thị khung xác nhận tùy chỉnh
      showCustomConfirm(
        `Bạn có chắc chắn muốn xóa mã giảm giá ${discountCode}?`,
        function () {
          row.remove(); // Xóa hàng khỏi bảng
          showNotification(`Phiếu giảm giá ${discountCode} đã bị xóa.`);
        }
      );
    }

    if (e.target.tagName === "BUTTON" && e.target.textContent === "Chỉnh sửa") {
      const row = e.target.closest("tr"); // Lấy hàng chứa nút "Chỉnh sửa"
      editingRow = row; // Lưu hàng đang chỉnh sửa

      // Lấy dữ liệu từ hàng
      const discountCode = row.cells[0].textContent; // Mã giảm giá
      const discountPercent = row.cells[1].textContent.replace("%", ""); // Mức giảm
      const discountExpiry = row.cells[3].textContent; // Ngày hết hạn (dd/MM/yyyy)

      // Chuyển đổi định dạng ngày từ dd/MM/yyyy sang yyyy-MM-dd
      const formattedExpiryDate = formatDateToDDMMYYYY(discountExpiry);

      // Điền dữ liệu vào form
      discountCodeInput.value = discountCode;
      discountPercentInput.value = discountPercent;
      discountExpiryInput.value = formattedExpiryDate; // Gán ngày đã định dạng (yyyy-MM-dd)

      // Đổi nút "THÊM PHIẾU GIẢM GIÁ" thành "CẬP NHẬT"
      addDiscountBtn.textContent = "CẬP NHẬT";
      addDiscountBtn.classList.add("toggleEdit");
      console.log(`Đang chỉnh sửa phiếu giảm giá: ${discountCode}`);
    }
    function formatDateToDDMMYYYY(dateString) {
      const [day, month, year] = dateString.split("/");
      return `${year}-${month}-${day}`;
    }
  });

  addDiscountBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (addDiscountBtn.classList.contains("toggleEdit")) {
      // Nếu nút có class toggleEdit => Xử lý cập nhật
      if (editingRow) {
        // Cập nhật dữ liệu trong bảng
        editingRow.cells[0].textContent = discountCodeInput.value.trim(); // Mã giảm giá
        editingRow.cells[1].textContent = `${discountPercentInput.value.trim()}%`; // Mức giảm
        editingRow.cells[3].textContent = discountExpiryInput.value.trim(); // Ngày hết hạn

        showNotification(
          `Cập nhật thành công mã giảm giá: ${discountCodeInput.value.trim()}`
        );

        // Reset trạng thái
        editingRow = null;
        discountForm.reset();
        addDiscountBtn.textContent = "THÊM PHIẾU GIẢM GIÁ";
        addDiscountBtn.classList.remove("toggleEdit"); // Bỏ class toggleEdit
      }
    } else {
      // Nếu nút không có class toggleEdit => Xử lý thêm mới
      const discountCode = discountCodeInput.value.trim(); // Mã giảm giá
      const discountPercent = discountPercentInput.value.trim(); // Mức giảm
      const discountExpiry = discountExpiryInput.value.trim(); // Ngày hết hạn

      // Kiểm tra dữ liệu nhập vào
      if (!discountCode || !discountPercent || !discountExpiry) {
        showNotification("Vui lòng điền đầy đủ thông tin phiếu giảm giá!");
        return;
      }

      // Tạo một hàng mới
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
        <td>${discountCode}</td>
        <td>${discountPercent}%</td>
        <td>${new Date().toISOString().split("T")[0]}</td> <!-- Ngày bắt đầu -->
        <td>${discountExpiry}</td>
        <td>
          <button class="edit-btn">Chỉnh sửa</button>
          <button class="delete-btn">Xóa</button>
        </td>
      `;

      // Thêm hàng mới vào bảng
      discountList.querySelector("tbody").appendChild(newRow);

      // Thông báo
      showNotification(`Đã thêm phiếu giảm giá: ${discountCode}`);

      // Reset form
      discountForm.reset();
    }
  });

  // End phiếu khuyến mãi  ==================

  // Xử lí phần quản lí tài khoản
  const accountForm = document.getElementById("account-form");
  const accountUsernameInput = document.getElementById("account-username");
  const accountEmailInput = document.getElementById("account-email");
  const accountRoleSelect = document.getElementById("account-role");
  const addAccountBtn = document.getElementById("add-account-btn");
  const accountListTable = document.querySelector("#account-list tbody");

  accountForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn chặn form submit mặc định

    console.log("a");
    const username = accountUsernameInput.value.trim();
    const email = accountEmailInput.value.trim();
    const role = accountRoleSelect.value;

    if (!username || !email || !role) {
      showNotification("Vui lòng điền đầy đủ thông tin tài khoản!", "error");
      return;
    }

    if (addAccountBtn.textContent.trim() === "Thêm Tài khoản") {
      // Thêm tài khoản mới
      const newRow = document.createElement("tr");
      const newId = accountListTable.querySelectorAll("tr").length + 1;

      newRow.innerHTML = `
        <td>${newId}</td>
        <td>${username}</td>
        <td>${email}</td>
        <td>${
          role === "admin"
            ? "Quản trị viên"
            : role === "editor"
            ? "Người chỉnh sửa"
            : "Người xem"
        }</td>
        <td>
          <button class="edit-btn">Chỉnh sửa</button>
          <button class="delete-btn">Xóa</button>
        </td>`;

      accountListTable.appendChild(newRow);
      showNotification("Đã thêm tài khoản thành công!");
    } else if (addAccountBtn.textContent === "Cập nhật Tài khoản") {
      // Cập nhật tài khoản
      if (editingRow) {
        editingRow.cells[1].textContent = username;
        editingRow.cells[2].textContent = email;
        editingRow.cells[3].textContent =
          role === "admin"
            ? "Quản trị viên"
            : role === "editor"
            ? "Người chỉnh sửa"
            : "Khách hàng";

        showNotification("Cập nhật tài khoản thành công!");
        addAccountBtn.textContent = "Thêm Tài khoản";
        editingRow = null;
      }
    }

    // Reset form
    accountForm.reset();
  });

  // Xử lý sự kiện "Chỉnh sửa" và "Xóa"
  accountListTable.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-btn")) {
      // Chỉnh sửa tài khoản
      const row = e.target.closest("tr");
      editingRow = row;

      // Điền thông tin tài khoản vào form
      accountUsernameInput.value = row.cells[1].textContent;
      accountEmailInput.value = row.cells[2].textContent;

      const roleText = row.cells[3].textContent;
      accountRoleSelect.value =
        roleText === "Quản trị viên"
          ? "admin"
          : roleText === "Người chỉnh sửa"
          ? "editor"
          : "viewer";

      // Thay đổi nút thành "Cập nhật Tài khoản"
      addAccountBtn.textContent = "Cập nhật Tài khoản";
    }

    if (e.target.classList.contains("delete-btn")) {
      // Xóa tài khoản
      const row = e.target.closest("tr");
      const username = row.cells[1].textContent;

      showCustomConfirm(
        `Bạn có chắc chắn muốn xóa tài khoản ${username}?`,
        function () {
          row.remove();
          showNotification(`Đã xóa tài khoản ${username}`);
        }
      );
    }
  });

  // Code phần Noti Setting
  const notificationForm = document.getElementById("notification-form");
  const notificationContentInput = document.getElementById(
    "notification-content"
  );
  const notificationTimeInput = document.getElementById("notification-time");
  const notificationList = document.getElementById("notification-list");
  const sendNotificationBtn = document.getElementById("send-notification-btn");
  const formOptionNoti = document.getElementById("form-option-noti");

  // **1. Lưu cài đặt thông báo**
  formOptionNoti.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailNotification = formOptionNoti.querySelector(
      "input[type='checkbox']:checked"
    );
    const browserNotification = formOptionNoti.querySelector(
      "input[type='checkbox']:not(:checked)"
    );
    const frequency = document.getElementById("notification-frequency").value;

    console.log("Cài đặt Thông báo:");
    console.log("Email Notification:", emailNotification ? "Bật" : "Tắt");
    console.log("Browser Notification:", browserNotification ? "Bật" : "Tắt");
    console.log("Tần suất:", frequency);

    alert("Cài đặt thông báo đã được lưu.");
  });

  // **2. Thêm hoặc cập nhật thông báo**
  notificationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const content = notificationContentInput.value.trim();
    const time = notificationTimeInput.value.trim();

    if (!content || !time) {
      showNotification("Vui lòng nhập đầy đủ nội dung và thời gian thông báo!");
      return;
    }

    if (editingRow) {
      // Cập nhật thông báo
      editingRow.cells[1].textContent = content;
      editingRow.cells[2].textContent = time;
      showNotification("Thông báo đã được cập nhật.");
      sendNotificationBtn.textContent = "Gửi Thông báo";
      editingRow = null;
    } else {
      // Thêm thông báo mới
      const newRow = document.createElement("tr");
      const newId = notificationList.querySelectorAll("tr").length + 1;

      newRow.innerHTML = `
        <td>${newId}</td>
        <td>${content}</td>
        <td>${time}</td>
        <td>
          <button class="edit-btn">Chỉnh sửa</button>
          <button class="delete-btn">Xóa</button>
        </td>
      `;

      notificationList.appendChild(newRow);
      showNotification("Thông báo mới đã được thêm.");
    }

    // Reset form
    notificationForm.reset();
  });

  // **3. Chỉnh sửa và xóa thông báo**
  notificationList.addEventListener("click", function (e) {
    if (e.target.classList.contains("edit-btn")) {
      const row = e.target.closest("tr");
      editingRow = row;

      // Điền thông tin vào form để chỉnh sửa
      notificationContentInput.value = row.cells[1].textContent;
      notificationTimeInput.value = row.cells[2].textContent;
      sendNotificationBtn.textContent = "Cập nhật Thông báo";
    }

    if (e.target.classList.contains("delete-btn")) {
      const row = e.target.closest("tr");
      const notificationId = row.cells[0].textContent;

      showCustomConfirm(
        `Bạn có chắc chắn muốn xóa thông báo ID ${notificationId}?`,
        function () {
          row.remove();
          showNotification(`Thông báo ID ${notificationId} đã bị xóa.`);
        }
      );
    }
  });

  function showCustomConfirm(message, onConfirm) {
    confirmMessage.textContent = message;
    customConfirm.classList.remove("hidden");

    // Xử lý sự kiện khi nhấn "Đồng ý"
    confirmOk.onclick = function () {
      customConfirm.classList.add("hidden");
      onConfirm();
    };

    // Xử lý sự kiện khi nhấn "Hủy"
    confirmCancel.onclick = function () {
      customConfirm.classList.add("hidden");
    };
  }

  function showNotification(message, status = "success") {
    notification.textContent = message;
    notification.classList.remove("success", "error", "warning");
    notification.classList.add("show");
    notification.classList.add(status);
    notification.classList.remove("hidden");

    // Ẩn thông báo sau 3 giây
    setTimeout(() => {
      notification.classList.remove("show");
      notification.classList.add("hidden");
    }, 3000);
  }

  // Danh sách thông báo mẫu
  const notifications = [
    {
      title: "Cập nhật hệ thống",
      message: "Hệ thống sẽ được bảo trì vào lúc 12:00 AM ngày 25/11/2023.",
      time: "20/11/2023, 10:00 AM",
    },

    {
      title: "Cập nhật hệ thống",
      message: "Hệ thống sẽ được bảo trì vào lúc 12:00 AM ngày 25/11/2023.",
      time: "20/11/2023, 10:00 AM",
    },

    {
      title: "Cập nhật hệ thống",
      message: "Hệ thống sẽ được bảo trì vào lúc 12:00 AM ngày 25/11/2023.",
      time: "20/11/2023, 10:00 AM",
    },

    {
      title: "Cập nhật hệ thống",
      message: "Hệ thống sẽ được bảo trì vào lúc 12:00 AM ngày 25/11/2023.",
      time: "20/11/2023, 10:00 AM",
    },
    {
      title: "Sản phẩm mới",
      message: "Sản phẩm mới đã được thêm vào danh mục Đèn chùm.",
      time: "19/11/2023, 8:30 AM",
    },
    {
      title: "Thông báo khuyến mãi",
      message: "Giảm giá 20% cho tất cả các sản phẩm từ 20/11 đến 25/11.",
      time: "18/11/2023, 3:15 PM",
    },
  ];

  // Hàm hiển thị danh sách thông báo
  function loadNotifications() {
    const notificationList = document.querySelector(".notification-list");
    const noneNoti = document.querySelector(".none-noti");

    // Kiểm tra nếu không có thông báo
    if (notifications.length === 0) {
      noneNoti.style.display = "block"; // Hiển thị "Chưa có thông báo nào"
      notificationList.style.display = "none"; // Ẩn danh sách thông báo
    } else {
      noneNoti.style.display = "none"; // Ẩn "Chưa có thông báo nào"
      notificationList.style.display = "block"; // Hiển thị danh sách thông báo

      // Thêm từng thông báo vào danh sách
      notifications.forEach((noti) => {
        const li = document.createElement("li");
        li.innerHTML = `
        <h4 class="noti-title">${noti.title}</h4>
        <p class="noti-message">${noti.message}</p>
        <span class="noti-time">${noti.time}</span>
      `;
        notificationList.appendChild(li);
      });
    }
  }

  // Gọi hàm khi tải trang
  loadNotifications();

  document.querySelector(".fa-bell").addEventListener("click", function () {
    document
      .querySelector(".notification-container")
      .classList.toggle("hidden");
  });

  // Đăng xuất
  document.getElementById("sign-up").addEventListener("click", function () {
    showCustomConfirm("Bạn có muốn đăng xuất không?", function () {
      window.location.href = "index.html";
      sessionStorage.clear();
    });
  });
});
