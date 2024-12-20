

document.addEventListener("DOMContentLoaded", function () {
    function toggleCategoryMenu() {
        // Lấy tất cả các danh mục chính
        const categoryItems = document.querySelectorAll(".cate-item");

        categoryItems.forEach((category) => {
            category.addEventListener("click", function (event) {
                event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ <a>

                // Tìm danh mục con liên quan
                const subcategoryList = this.parentElement.querySelector(".subcategory-list");
                console.log(subcategoryList)
                if (subcategoryList) {
                    // Kiểm tra trạng thái hiển thị
                    const isVisible = subcategoryList.style.height === "auto";

                    // Ẩn/hiện danh mục con
                    subcategoryList.style.height = isVisible ? "0" : "auto";

                    // Thay đổi icon trạng thái
                    const icon = this.querySelector("i");
                    if (icon) {
                        icon.classList.toggle("active");
                    }
                }
            });
        });
    }

// Gọi hàm sau khi trang đã được load
    toggleCategoryMenu()
})


