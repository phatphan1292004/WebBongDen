document.getElementById("promotion-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Ngăn form gửi dữ liệu mặc định

    const formData = {
        promotionName: document.getElementById("promotionName").value,
        endDay: document.getElementById("promotionEndDate").value, // JSON key 'endDay' phải khớp với model
        discountPercent: parseFloat(document.getElementById("promotionDiscount").value), // JSON key 'discountPercent' phải khớp
        promotionType: document.getElementById("promotionType").value,
    };

    console.log("Form Data:", formData);

    try {
        const response = await fetch("/WebBongDen_war/add-promotion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Gửi dữ liệu JSON
            },
            body: JSON.stringify(formData), // Chuyển đổi dữ liệu sang JSON
        });

        const result = await response.json();
        console.log("Response:", result);

        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Thành công!",
                text: result.message || "Thêm chương trình khuyến mãi thành công!",
                confirmButtonText: "OK",
            }).then(() => {
                document.getElementById("promotion-form").reset(); // Reset form sau khi thành công
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Lỗi!",
                text: result.message || "Đã xảy ra lỗi.",
                confirmButtonText: "Thử lại",
            });
        }
    } catch (error) {
        console.error("Error:", error);
        Swal.fire({
            icon: "error",
            title: "Lỗi hệ thống!",
            text: "Đã xảy ra lỗi trong quá trình gửi dữ liệu. Vui lòng thử lại sau.",
            confirmButtonText: "OK",
        });
    }
});

$(document).ready(function () {
    // Lấy danh sách promotion cho dropdown
    $.ajax({
        url: "/WebBongDen_war/list-promotion",
        method: "GET",
        dataType: "json",
        success: function (promotions) {
            const promotionSelect = $("#promotion-select");

            promotions.forEach(promotion => {
                const option = $("<option></option>")
                    .val(promotion.id) // Giá trị là ID của chương trình
                    .text(promotion.promotionName); // Nội dung là tên chương trình

                promotionSelect.append(option);
            });
        },
        error: function (xhr, status, error) {
            console.error("Failed to fetch promotions for dropdown:", error);
            alert("Không thể tải danh sách chương trình giảm giá.");
        }
    });

    // Lấy danh sách promotion cho bảng
    $("#promotion-table").DataTable({
        ajax: {
            url: "/WebBongDen_war/list-promotion", // Dùng lại URL
            type: "GET",
            dataSrc: "", // Lấy từ gốc của JSON
        },
        columns: [
            { data: "promotionName" },
            { data: "startDay" },
            { data: "endDay" },
            {
                data: null,
                render: function (data, type, row) {
                    return `${row.promotionType} - ${row.discountPercent}%`;
                },
            },
            {
                data: null,
                render: function (data, type, row) {
                    return `
                        <button class="view-details" data-id="${row.id}">Xem DSSP</button>`;
                },
            },
            {
                data: null,
                render: function (data, type, row) {
                    return `
                        <button class="edit-promotion" data-id="${row.id}">Chỉnh sửa</button>
                        <button class="delete-promotion" data-id="${row.id}">Xóa</button>`;
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
            info: "Hiển thị _START_ đến _END_ của _TOTAL_ chương trình",
        },
    });
});

document.getElementById("product-to-promotion-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
        promotionId: document.getElementById("promotion-select").value,
        productId: document.getElementById("product-id").value,
    };

    try {
        const response = await fetch("/WebBongDen_war/add-product-to-promotion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            Swal.fire({
                icon: "success",
                title: "Thành công!",
                text: result.message,
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Lỗi!",
                text: result.message,
            });
        }
    } catch (error) {
        Swal.fire({
            icon: "error",
            title: "Lỗi!",
            text: "Đã xảy ra lỗi khi gửi dữ liệu.",
        });
        console.error("Error:", error);
    }
});



