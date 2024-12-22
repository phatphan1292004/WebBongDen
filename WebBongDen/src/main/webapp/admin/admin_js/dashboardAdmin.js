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

//------------End tạo biểu đồ