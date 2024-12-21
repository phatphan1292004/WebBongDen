document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        const table = $("#account-table").DataTable({
            ajax: {
                url: "/WebBongDen_war/list-account", // URL Servlet trả về JSON
                type: "GET", // Phương thức HTTP
                dataSrc: "", // DataTables sẽ lấy dữ liệu từ gốc JSON
                data: function (d) {
                    d.searchValue = $("#account-search").val(); // Truyền giá trị tìm kiếm
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
                { data: "id" }, // ID tài khoản
                { data: "username" }, // Tên người dùng
                { data: "email" }, // Email
                { data: "role" }, // Vai trò
                {
                    data: null, // Hành động: Nút xem chi tiết
                    render: function (data, type, row) {
                        return `
                        <button class="edit-account" data-id="${row.id}">Chỉnh sửa</button>
                        <button class="delete-account" data-id="${row.id}">Xóa</button>`
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

    document.querySelector("#account-table").addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-account")) {
            const accountId = event.target.dataset.id; // Lấy ID sản phẩm từ data-id

            if (confirm("Bạn có chắc chắn muốn xóa tài khoản này không?")) {
                // Gửi yêu cầu xóa qua AJAX
                fetch("deleteAccount", {
                    method: "POST",
                    body: new URLSearchParams({
                        action: "delete-account",
                        id: accountId
                    })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("Có lỗi xảy ra trong quá trình xóa!");
                        }
                        return response.json();
                    })
                    .then(data => {
                        if (data.status === "success") {
                            alert(data.message); // Hiển thị thông báo thành công

                            // Tìm dòng cha của nút xóa
                            const row = event.target.closest("tr");

                            if (row) {
                                // Sử dụng DataTables API để xóa dòng
                                const table = $('#account-table').DataTable();
                                table.row(row).remove().draw(false); // Giữ nguyên trang và cập nhật tổng số
                            }
                        } else {
                            alert(data.message); // Thông báo lỗi từ server
                        }
                    })
                    .catch(error => {
                        console.error("Error:", error);
                        alert("Có lỗi xảy ra khi xóa sản phẩm!");
                    });
            }
        }
    });
})