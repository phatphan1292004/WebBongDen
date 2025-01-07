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
            alert("Thêm chương trình khuyến mãi thành công!");
        } else {
            alert("Lỗi: " + result.message || "Đã xảy ra lỗi.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Đã xảy ra lỗi trong quá trình gửi dữ liệu.");
    }
});
