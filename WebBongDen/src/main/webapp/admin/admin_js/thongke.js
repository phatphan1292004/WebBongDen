// Lấy ngữ cảnh của canvas biểu đồ
let ctx;

function initializeChartContext() {
    const canvas = document.getElementById("revenue-chart");
    if (canvas) {
        ctx = canvas.getContext("2d");
    } else {
        console.error("Canvas element with id 'revenueChart' not found.");
    }
}

// Hàm hiển thị/ẩn input cho thống kê theo tháng
function showDateInputs(value) {
    const monthInputGroup = document.getElementById("month-input-group");
    monthInputGroup.style.display = value === "monthly" ? "block" : "none";
}

// Thêm sự kiện khi thay đổi loại thống kê
const statisticTypeElement = document.getElementById("statistic-type");
statisticTypeElement.addEventListener("change", function () {
    const value = this.value;
    showDateInputs(value);

    // Reset placeholder và giá trị input khi thay đổi loại thống kê
    const monthInput = document.getElementById("month");
    if (value === "monthly") {
        monthInput.placeholder = "Nhập năm";
    } else {
        monthInput.placeholder = "";
        monthInput.value = "";
    }
});

// Hàm xử lý khi nhấn nút "Xem Thống Kê"
function processInput() {
    const year = document.getElementById("month").value.trim(); // Lấy giá trị năm
    const statisticType = document.getElementById("statistic-type").value; // Loại thống kê

    // Kiểm tra điều kiện nhập cho thống kê theo tháng
    if (statisticType === "monthly" && (!year || isNaN(year) || year.length !== 4)) {
        alert("Vui lòng nhập năm hợp lệ (4 chữ số).");
        return;
    }

    // Lấy dữ liệu dựa trên loại thống kê
    const revenueData =
        statisticType === "monthly"
            ? getMonthlyRevenueData(year || new Date().getFullYear())
            : getYearlyRevenueData();

    // Tạo biểu đồ với dữ liệu
    generateChart(revenueData, statisticType);
}

// Hàm giả lập dữ liệu doanh thu và sản phẩm bán được theo tháng
function getMonthlyRevenueData(year) {
    const data = {
        labels: [
            "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6",
            "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
        ],
        datasets: [
            {
                label: `Doanh thu năm ${year}`,
                data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 10000) + 5000),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true
            }
        ]
    };
    return data;
}

// Hàm giả lập dữ liệu doanh thu và sản phẩm bán được theo năm
function getYearlyRevenueData() {
    const currentYear = new Date().getFullYear();
    const years = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear];
    const data = {
        labels: years,
        datasets: [
            {
                label: "Doanh thu theo năm",
                data: years.map(() => Math.floor(Math.random() * 50000) + 30000),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true
            }
        ]
    };
    return data;
}

// Hàm tạo biểu đồ
function generateChart(data, statisticType) {
    if (!ctx) {
        console.error("Canvas context is not initialized.");
        return;
    }

    // Hủy biểu đồ cũ nếu đã tồn tại
    if (window.myChart) {
        window.myChart.destroy();
    }

    // Tạo biểu đồ mới
    window.myChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: statisticType === "monthly" ? "Tháng" : "Năm"
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: "Doanh thu (VND)"
                    }
                }
            }
        }
    });
}

// Thêm sự kiện cho nút "Xem Thống Kê"
document.getElementById("submit-btn").addEventListener("click", processInput);

// Khởi tạo ngữ cảnh của biểu đồ khi tài liệu đã tải xong
initializeChartContext();
