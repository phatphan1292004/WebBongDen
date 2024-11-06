document.addEventListener("DOMContentLoaded", function() {
    const navList = document.querySelectorAll(".nav-item");

    function showTab(tabName) {
        const tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(tab => tab.classList.remove('active'));

        navList.forEach(item => item.classList.remove('active'));

        const activeTabContent = document.getElementById(tabName);
        if (activeTabContent) {
            activeTabContent.classList.add('active');
        }

        const activeNavItem = document.querySelector(`.nav-item[data-tab="${tabName}"]`);
        if (activeNavItem) {
            activeNavItem.classList.add('active');
        }
    }

    navList.forEach(item => {
        item.addEventListener('click', function() {
            const tabName = item.getAttribute('data-tab');
            showTab(tabName); 
        });
    });

    // Hiển thị tab mặc định (Giỏ hàng)
    showTab('cart');
});
