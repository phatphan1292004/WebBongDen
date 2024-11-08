document.addEventListener('DOMContentLoaded', function() {
    const bar = document.querySelector(".fa-bars");
    const sidebar = document.querySelector(".sidebar");
    const navItemsP = document.querySelectorAll(".nav-item p");
    const navItems = document.querySelectorAll(".nav-item");
    const tabContents = document.querySelectorAll('.tab-content');
    const mainContent = document.querySelector(".main-content");
    const shortTexts = ["Dashboard", "Sản phẩm", "Khách hàng", "Đơn hàng", "Doanh thu"];    
    const fullTexts = ["Dashboard", "Quản lý sản phẩm", "Quản lý khách hàng", "Quản lý đơn hàng", "Thống kê doanh thu"];

    bar.addEventListener('click', function() {
        sidebar.classList.toggle("expanded");
        mainContent.classList.toggle('collapsed');
        navItemsP.forEach((item, index) => {
            item.textContent = sidebar.classList.contains("expanded") ? shortTexts[index] : fullTexts[index];
        });
    })

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const index = item.getAttribute('data-index'); 
    
            tabContents.forEach(content => {
                content.style.display = 'none';
            });
    
            navItems.forEach(nav => {
                nav.classList.remove('active');
            });
    
            tabContents[index].style.display = 'block';
    
            item.classList.add('active');
        });
    });
    tabContents[0].style.display = 'block';
    navItems[0].classList.add("active");
});
