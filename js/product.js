document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const menuToggle = document.getElementById("menu-toggle");
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");
        if (menuToggle && sidebar && overlay) {
            menuToggle.addEventListener("click", function () {
                sidebar.classList.add("active"); // Hiển thị sidebar
                overlay.classList.add("active"); // Hiển thị overlay
            });

            // Đóng sidebar khi nhấn vào overlay
            overlay.addEventListener("click", function () {
                sidebar.classList.remove("active"); // Ẩn sidebar
                overlay.classList.remove("active"); // Ẩn overlay
            });
        } else {
            console.warn('Các phần tử menu-toggle, sidebar hoặc overlay không tồn tại trong DOM!');
        }

        // Xử lý sự kiện cho các item trong danh mục
        const categoryItems = document.querySelectorAll('.cate-item');
        categoryItems.forEach(item => {
            item.addEventListener('click', function() {
                const subcategoryList = this.nextElementSibling;
                if (subcategoryList.classList.contains('show')) {
                    subcategoryList.classList.remove('show');
                } else {
                    subcategoryList.classList.add('show');
                }
            });
        });
    }, 1000);  
});
