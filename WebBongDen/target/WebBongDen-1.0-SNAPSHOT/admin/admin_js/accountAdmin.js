document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        const table = $("#account-table").DataTable({
            ajax: {
                url: "/WebBongDen_war/list-account", // URL Servlet trả về JSON
                type: "GET", // Phương thức HTTP
                dataSrc: "", // DataTables sẽ lấy dữ liệu từ gốc JSON
                // data: function (d) {
                //     d.searchValue = $("#customer-search").val(); // Truyền giá trị tìm kiếm
                // },
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
                { data: "id" }, // ID tài khoản
                { data: "username" }, // Tên người dùng
                { data: "email" }, // Email
                { data: "role" }, // Vai trò
                {
                    data: null, // Hành động: Nút xem chi tiết
                    render: function (data, type, row) {
                        return `
                        <button class="edit-details" data-index="${row.id}">Chỉnh sửa</button>
                        <button class="delete-details" data-index="${row.id}">Xóa</button>`
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
        $("#search-btn-account").on("click", function () {
            table.ajax.reload(); // Reload lại bảng với dữ liệu lọc mới
        });
    })
})