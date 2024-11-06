document.addEventListener("DOMContentLoaded", function() {
    // Hàm showTab sẽ chỉ được thực hiện sau khi DOM được tải hoàn toàn
    const navList = document.querySelectorAll(".nav-item");

    function showTab(tabName) {
        // Ẩn tất cả các tab
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(tab => tab.classList.remove('active'));

        // Ẩn tất cả các item nav
        navList.forEach(item => item.classList.remove('active'));

        // Hiển thị tab tương ứng
        const activeTabContent = document.getElementById(tabName);
        if (activeTabContent) {
            activeTabContent.classList.add('active');
        }

        // Đánh dấu item nav là active
        const activeNavItem = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }

    // Gắn sự kiện click vào các item nav
    navList.forEach(item => {
        item.addEventListener('click', function() {
            const tabName = item.getAttribute('data-tab'); // Lấy giá trị data-tab
            showTab(tabName); // Gọi hàm showTab với tabName tương ứng
        });
    });

    // Hiển thị tab mặc định (Giỏ hàng)
    showTab('cart');
});
