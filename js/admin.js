document.addEventListener('DOMContentLoaded', function() {
    const bar = document.querySelector(".fa-bars");
    const sidebar = document.querySelector(".sidebar");
    const navItemsP = document.querySelectorAll(".nav-item p");
    const navItems = document.querySelectorAll(".nav-item");
    const tabContents = document.querySelectorAll('.tab-content');
    const mainContent = document.querySelector(".main-content");
    const shortTexts = ["Dashboard", "Sản phẩm", "Khách hàng", "Đơn hàng", "Doanh thu"];    
    const fullTexts = ["Dashboard", "Quản lý sản phẩm", "Quản lý khách hàng", "Quản lý đơn hàng", "Thống kê doanh thu"];
    const saveProductBtn = document.getElementById('save-product');
    const productTableBody = document.getElementById('product-table-body');

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

    const overlay = document.getElementById('overlay');
    const cancelAdd = document.querySelector(".fa-xmark")
    document.querySelector('.add-product').addEventListener('click', function () {
        overlay.classList.add('active');
    });

    cancelAdd.addEventListener('click', function() {
        overlay.classList.remove("active");
    });

    saveProductBtn.addEventListener('click', () => {
        console.log("a");
        // Lấy dữ liệu từ input
        const productId = document.getElementById('product-id').value;
        const productImage = document.getElementById('product-image').value;
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productCategory = document.getElementById('product-category').value;
        const productDate = document.getElementById('product-date').value;

        // Tạo một hàng mới trong bảng
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${productId}</td>
            <td><a href="${productImage}" target="_blank">Xem ảnh</a></td>
            <td>${productName}</td>
            <td>${productPrice}</td>
            <td>${productCategory}</td>
            <td>${productDate}</td>
            <td><button class="view-details">Xem chi tiết</button></td>
            <td>
                <button class="edit-product">
                    <i class="fa-regular fa-pen-to-square"></i>
                </button>
            </td>
            <td>
                <button class="delete-product">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </td>
        `;

        // Thêm hàng mới vào bảng
        productTableBody.appendChild(newRow);

        // Xóa dữ liệu input và ẩn form
        document.getElementById('product-form').reset();
        overlay.classList.remove('active');
    });
});
