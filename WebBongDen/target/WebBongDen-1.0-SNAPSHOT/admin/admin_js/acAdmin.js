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

        $("#add-account-form").on("submit", function (event) {
            event.preventDefault(); // Ngăn form gửi dữ liệu mặc định

            // Thu thập dữ liệu từ form
            const formData = {
                username: $("#username").val(),
                email: $("#email").val(),
                password: $("#password").val(),
                role: $("#role").val(),
                cusName: $("#cusName").val(),
            };

            // Gửi yêu cầu AJAX đến server
            $.ajax({
                url: "/WebBongDen_war/add-account", // URL servlet
                type: "POST", // Phương thức HTTP
                contentType: "application/json", // Dữ liệu gửi là JSON
                data: JSON.stringify(formData), // Chuyển đổi dữ liệu sang JSON
                success: function (response) {
                    // Xử lý khi thành công
                    if (response.status === "success") {
                        Swal.fire({
                            icon: "success",
                            title: "Thành công!",
                            text: response.message || "Thêm tài khoản thành công!",
                        }).then(() => {
                            $("#add-account-form")[0].reset(); // Reset form sau khi người dùng đóng thông báo
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Lỗi!",
                            text: response.message || "Đã xảy ra lỗi!",
                        });
                    }
                },
                error: function (xhr) {
                    // Xử lý khi có lỗi
                    try {
                        const errorData = JSON.parse(xhr.responseText);
                        Swal.fire({
                            icon: "error",
                            title: "Lỗi!",
                            text: errorData.message || "Đã xảy ra lỗi không mong muốn!",
                        });
                    } catch (e) {
                        Swal.fire({
                            icon: "error",
                            title: "Lỗi!",
                            text: "Đã xảy ra lỗi không mong muốn. Vui lòng thử lại!",
                        });
                    }
                    console.error("Error:", xhr);
                },
            });
        });
    })




    document.querySelector("#account-table").addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-account")) {
            console.log('a');
            const accountId = event.target.dataset.id; // Lấy ID sản phẩm từ data-id

            // Hiển thị SweetAlert2 để xác nhận
            Swal.fire({
                title: "Bạn có chắc chắn muốn xóa tài khoản này không?",
                text: "Hành động này không thể hoàn tác!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Xóa",
                cancelButtonText: "Hủy",
            }).then((result) => {
                if (result.isConfirmed) {
                    // Gửi yêu cầu xóa qua AJAX
                    fetch("deleteAccount", {
                        method: "POST",
                        body: new URLSearchParams({
                            action: "delete-account",
                            id: accountId,
                        }),
                    })
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error("Có lỗi xảy ra trong quá trình xóa!");
                            }
                            return response.json();
                        })
                        .then((data) => {
                            if (data.status === "success") {
                                Swal.fire(
                                    "Đã xóa!",
                                    data.message,
                                    "success"
                                );

                                // Xóa dòng trong bảng
                                const row = event.target.closest("tr");
                                if (row) {
                                    const table = $("#account-table").DataTable();
                                    table.row(row).remove().draw(false);
                                }
                            } else {
                                Swal.fire("Lỗi!", data.message, "error");
                            }
                        })
                        .catch((error) => {
                            console.error("Error:", error);
                            Swal.fire("Lỗi!", "Có lỗi xảy ra khi xóa sản phẩm!", "error");
                        });
                }
            });
        }
    });
})