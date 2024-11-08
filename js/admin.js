document.addEventListener('DOMContentLoaded', function() {
    const bar = document.querySelector(".fa-bars");
    const sidebar = document.querySelector(".sidebar");
    const navItems = document.querySelectorAll(".nav-item p");
    const mainContent = document.querySelector(".main-content");
    const shortTexts = ["Dashboard", "Sản phẩm", "Khách hàng", "Đơn hàng", "Doanh thu"];    
    const fullTexts = ["Dashboard", "Quản lý sản phẩm", "Quản lý khách hàng", "Quản lý đơn hàng", "Thống kê doanh thu"];
    bar.addEventListener('click', function() {
        sidebar.classList.toggle("expanded");
        mainContent.classList.toggle('collapsed');
        navItems.forEach((item, index) => {
            item.textContent = sidebar.classList.contains("expanded") ? shortTexts[index] : fullTexts[index];
        });
    })
});
