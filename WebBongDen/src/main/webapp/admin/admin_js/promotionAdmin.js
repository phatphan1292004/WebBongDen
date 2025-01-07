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
