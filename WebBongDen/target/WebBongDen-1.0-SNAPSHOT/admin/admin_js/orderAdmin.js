document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        const table = $("#order-table").DataTable({
            ajax: {
                url: "/WebBongDen_war/list-order", // URL Servlet trả về JSON
                type: "GET", // Phương thức HTTP
                dataSrc: "", // DataTables sẽ lấy dữ liệu từ gốc JSON
                data: function (d) {
                    d.searchValue = $("#order-search").val(); // Truyền giá trị tìm kiếm
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
                { data: "id" }, // ID
                { data: "customerName" }, // Tên khách hàng
                { data: "createdAt" }, // Ngày đặt hàng
                {
                    data: "totalPrice", // Tổng tiền
                    render: function (data) {
                        return parseInt(data).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        });
                    },
                },
                { data: "address" }, // Địa chỉ
                { data: "orderStatus" }, // Trạng thái đơn hàng
                {
                    data: null, // Hóa đơn: Chi tiết
                    render: function (data, type, row) {
                        return `<button class="view-details">Chi tiết</button>`;
                    },
                },
                {
                    data: null, // Thao tác: Duyệt và Từ chối
                    render: function (data, type, row) {
                        if (row.orderStatus === "Pending") {
                            return `
                            <button class="approve-order" data-index="${row.id}">
                                <i class="fa-solid fa-check"></i>
                            </button>
                            <button class="reject-order" data-index="${row.id}">
                                <i class="fa-solid fa-times"></i>
                            </button>`;
                        } else {
                            return null;
                        }
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

        $("#search-btn-order").on("click", function () {
            table.ajax.reload();
        });

        // Event delegation for approve button
        $("#order-table").on("click", ".approve-order", function () {
            const orderId = $(this).data("index");
            approveOrder(orderId);
        });

        // Event delegation for reject button
        $("#order-table").on("click", ".reject-order", function () {
            const orderId = $(this).data("id");
            rejectOrder(orderId);
        });

        function approveOrder(orderId) {
            $.ajax({
                url: `/WebBongDen_war/update-order-status`, // URL servlet xử lý
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    orderId: orderId.toString(),
                    status: "Approved", // Trạng thái mới
                }),
                success: function (response) {
                    alert("Trạng thái đơn hàng đã được cập nhật thành công!");
                    table.ajax.reload(); // Reload lại bảng
                },
                error: function (xhr, status, error) {
                    alert("Cập nhật thất bại!");
                    console.error("Error:", xhr.responseText);
                },
            });
        }

        function rejectOrder(orderId) {
            $.ajax({
                url: `/WebBongDen_war/update-order-status`, // URL servlet xử lý
                type: "POST",
                contentType: "application/json",
                data: JSON.stringify({
                    orderId: orderId.toString(),
                    status: "Rejected", // Trạng thái mới
                }),
                success: function (response) {
                    alert("Trạng thái đơn hàng đã được từ chối!");
                    table.ajax.reload(); // Reload lại bảng
                },
                error: function (xhr, status, error) {
                    alert("Cập nhật thất bại!");
                    console.error("Error:", xhr.responseText);
                },
            });
        }
    })
})