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
    });
  });

  tabContents[0].style.display = "block"; // Show the first tab by default
  navItems[0].classList.add("active"); // Activate the first tab by default

  // Load product table
  function loadProductTable() {
    productTableBody.innerHTML = "";
    productData.forEach((item) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `
                <td>${item.id}</td>
                <td>
                    <a href="${item.urlImage}" target="_blank">${item.urlImage}</a>
                </td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.nameCate}</td>
                <td>${item.dateCreate}</td>
                <td><button class="view-details">Xem chi tiết</button></td>
                <td>
                    <button class="edit-product">
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                </td>
                <td>
                    <button class="delete-product">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            `;
      productTableBody.appendChild(newRow);
    });
  }

  loadProductTable();

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
  document.querySelector("tbody").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-product")) {
      e.stopPropagation();
      const row = e.target.closest("tr");
      row.remove();
      document.querySelector("tbody").dispatchEvent(new Event("change"));
    }
  });

  function loadCustomerTable() {
    cusTableBody.innerHTML = "";
    customerData.forEach((item) => {
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

  loadCustomerTable();

  const orderTableBody = document.getElementById("order-table-body");

  orderData.forEach((order) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${order.id}</td>
        <td>${order.customerName}</td>
        <td>${order.orderDate}</td>
        <td>${order.expectedDeliveryDate}</td>
        <td>${order.address}</td>
        <td>${order.status}</td>
        <td>${order.paymentMethod}</td>
        <td>${order.orderTime}</td>
        <td><button class="view-details">Xem chi tiết</button></td>
      `;

    orderTableBody.appendChild(row);
  });

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

  // Vẽ biểu đồ vào canvas
  const ctx = document.getElementById("customerPieChart").getContext("2d");
  new Chart(ctx, config);

  // Dữ liệu cho biểu đồ doanh thu cả năm
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
  const salesData = [
    100000, 150000, 120000, 180000, 20000, 25000, 30000, 35000,
  ];

  const ctx2 = document.getElementById("salesChart").getContext("2d");
  const salesChart = new Chart(ctx2, {
    type: "bar",
    data: {
      labels: months,
      datasets: [
        {
          label: "Doanh thu (VND)",
          data: salesData,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          ticks: {
            maxRotation: 0,
            autoSkip: false,
          },
          categoryPercentage: 0.8,
          barPercentage: 0.7,
        },
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        bar: {
          barThickness: 12,
        },
      },
      // plugins: {
      //   tooltip: {
      //     callbacks: {
      //       title: function (tooltipItem) {
      //         return months[tooltipItem[0].dataIndex]; // Hiển thị tháng của cột khi hover vào
      //       },
      //       label: function (tooltipItem) {
      //         return "Doanh thu: " + tooltipItem.raw.toLocaleString(); // Hiển thị doanh thu của tháng khi hover vào
      //       },
      //     },
      //   },
      // },
    },
  });

  const ctx3 = document.getElementById("topProductsChart").getContext("2d");
  const topProductsLineChart = new Chart(ctx3, {
    type: "line", // Dạng biểu đồ đường
    data: {
      labels: [
        "Sản phẩm 1",
        "Sản phẩm 2",
        "Sản phẩm 3",
        "Sản phẩm 4",
        "Sản phẩm 5",
        "Sản phẩm 6",
        "Sản phẩm 7",
        "Sản phẩm 8",
        "Sản phẩm 9",
        "Sản phẩm 10",
      ],
      datasets: [
        {
          label: "Số lượng bán ra",
          data: [120, 150, 100, 90, 110, 85, 120, 130, 140, 160], // Số lượng bán ra của từng sản phẩm
          borderColor: "rgba(54, 162, 235, 1)", // Màu sắc đường cho số lượng bán ra
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: true, // Đổ màu cho khu vực dưới đường
          tension: 0.4, // Làm mượt đường
          borderWidth: 2,
        },
        {
          label: "Số lượng tồn kho",
          data: [80, 40, 60, 100, 50, 90, 30, 70, 50, 40], // Số lượng tồn kho của từng sản phẩm
          borderColor: "rgba(255, 99, 132, 1)", // Màu sắc đường cho số lượng tồn kho
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: true, // Đổ màu cho khu vực dưới đường
          tension: 0.4, // Làm mượt đường
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
        },
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        title: {
          display: true,
          text: "Top 10 Sản phẩm bán chạy",
        },
      },
    },
  });
});