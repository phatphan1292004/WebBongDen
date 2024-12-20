document.addEventListener("DOMContentLoaded", function () {
    $(document).ready(function () {
        const table = $("#product-table").DataTable({
            ajax: {
                url: "/WebBongDen_war/AdminLoadProductController", // URL Servlet
                type: "GET", // Phương thức HTTP
                data: function (d) {
                    d.searchValue = $("#product-search").val();
                },
                dataSrc: "", // DataTables sẽ lấy dữ liệu từ gốc JSON
            },
            error: function (xhr, error, thrown) {
                console.log("Error:", error);
                console.log("Response Text:", xhr.responseText);
            },
            destroy: true,
            autoWidth: false,
            paging: true,
            pageLength: 10,
            columns: [
                { data: "id" }, // Id
                {
                    data: "imageUrl", // Hình ảnh
                    render: function (data) {
                        return `<img src="${data}" alt="Product Image" style="width: 50px; height: 50px;">`;
                    },
                },
                { data: "productName" }, // Tên sản phẩm
                {
                    data: "unitPrice", // Giá
                    render: function (data) {
                        return parseInt(data).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                        });
                    },
                },
                { data: "categoryName" }, // Loại sản phẩm
                { data: "createdAt" }, // Ngày thêm
                {
                    data: null, // Thao tác: Xem chi tiết
                    render: function (data, type, row) {
                        return `
                <button class="view-details" data-id="${row.id}" data-page="product-management">Xem chi tiết</button>
                `;
                    },
                },
                {
                    data: null, // Thao tác: Xóa
                    render: function (data, type, row) {
                        return `<button class="delete-product" data-id="${row.id}">
                      <i class="fa-regular fa-trash-can"></i>
                  </button>`;
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

        $("#product-table").on("click", ".view-details", function () {
            $(".product-stats").hide();
            const productId = $(this).data("id"); // Lấy product ID từ data-id
            console.log("Product ID:", productId); // Debug: Kiểm tra giá trị ID

            // Gửi yêu cầu tới server để lấy chi tiết sản phẩm
            fetch(`/WebBongDen_war/getProductDetails?id=${productId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Lỗi khi tải chi tiết sản phẩm");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Chi tiết sản phẩm:", data); // Debug: Hiển thị dữ liệu JSON

                    // Cập nhật các trường trong modal
                    $("#product-id-details").text(data.id || "N/A");
                    $("#product-name-details").text(data.productName || "N/A");
                    $("#product-image-main").attr("src", data.mainImageUrl || "./img/default-product.png");
                    $("#product-image-view").text(data.mainImageUrl || "./img/default-product.png");
                    $("#product-name-view").text(data.productName || "N/A");
                    $("#product-id-view").text(data.id || "N/A");
                    $("#product-price-view").text(`${data.discountedPrice || 0} VNĐ`);
                    $("#product-category-view").text(data.categoryName || "N/A");
                    $("#product-status-view").text(data.productStatus || "N/A");
                    $("#product-description-view").text(data.description || "N/A");
                    $("#product-date-view").text(data.createdAt || "N/A");
                    $("#product-discount-view").text(`${data.discountPercent || 0}%`);
                    $("#product-stock-view").text(data.stockQuantity || 0);
                    $("#product-rating-view").text(data.rating || 0);
                    $("#product-warranty-view").text(data.warrantyPeriod || "N/A");
                    $("#product-material-view").text(data.material || "N/A");
                    $("#product-color-view").text(data.lightColor || "N/A");
                    $("#product-lifespan-view").text(data.usageAge || "N/A");
                    $("#product-power-view").text(data.voltage || "N/A");

                    // Hiển thị modal
                    $("#product-details").css("display", "block");
                    $(".tab-content-container").css("display", "none"); // Ẩn danh sách sản phẩm
                })
                .catch(error => {
                    console.error(error); // Log lỗi
                    alert("Đã xảy ra lỗi khi tải chi tiết sản phẩm. Vui lòng thử lại!");
                });
        });


        $("#close-details-btn").on("click", function () {
            $(".product-stats").show();
            $("#product-details").hide();
            $(".tab-content-container").show();
        });



        $("#search-btn-product").on("click", function () {
            table.ajax.reload();
        });
    });



// Gọi hàm để thêm action

    // Hiển thị overlay
    document.querySelector(".add-product").addEventListener("click", function () {
        const overlay = document.getElementById("overlay-add-product");
        overlay.classList.add("active");
    });

    // Ẩn overlay khi nhấn ra ngoài

    document.querySelector(".fa-xmark").addEventListener("click", function () {
        const overlay = document.getElementById("overlay-add-product");
        overlay.classList.remove("active");
    });

    document.querySelector("#product-table").addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-product")) {
            const productId = event.target.dataset.id; // Lấy ID sản phẩm từ data-id

            if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
                // Gửi yêu cầu xóa qua AJAX
                fetch("deleteProduct", {
                    method: "POST",
                    body: new URLSearchParams({
                        action: "delete-product",
                        id: productId
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
                                const table = $('#product-table').DataTable();
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
});