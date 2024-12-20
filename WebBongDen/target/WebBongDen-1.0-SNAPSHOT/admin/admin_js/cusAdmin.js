document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        const table = $(".customer-table").DataTable({
            ajax: {
                url: "/WebBongDen_war/list-customer", // URL Servlet trả về JSON
                type: "GET", // Phương thức HTTP
                dataSrc: "", // DataTables sẽ lấy dữ liệu từ gốc JSON
                data: function (d) {
                    d.searchValue = $("#customer-search").val(); // Truyền giá trị tìm kiếm
                },
            },
            error: function (xhr, error, thrown) {
                console.log("Error:", error);
                console.log("Response Text:", xhr.responseText);
            },
            destroy: true, // Đảm bảo bảng được làm mới khi reload
            autoWidth: false,
            paging: true,
            pageLength: 10,
            columns: [
                { data: "customerId" }, // ID khách hàng
                { data: "customerName" }, // Tên khách hàng
                { data: "email" }, // Email
                { data: "phone" }, // Số điện thoại
                { data: "address" }, // Địa chỉ
                {
                    data: "createdAt", // Ngày đăng ký
                    render: function (data) {
                        const date = new Date(data);
                        return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
                            .toString()
                            .padStart(2, "0")}/${date.getFullYear()}`;
                    },
                },
                {
                    data: null, // Lịch sử mua hàng: Nút xem chi tiết
                    render: function (data, type, row) {
                        return `<button class="view-details" data-index="${row.customerId}">Xem chi tiết</button>`;
                    },
                },
            ],
            lengthChange: false,
            searching: false,
            ordering: true,
            info: true,
            language: {
                paginate: {
                    previous: "Trước",
                    next: "Tiếp",
                },
                info: "Hiển thị _START_ đến _END_ của _TOTAL_ sản phẩm",
            },
        });
        $("#search-btn-cus").on("click", function () {
            table.ajax.reload(); // Reload lại bảng với dữ liệu lọc mới
        });
    })
})