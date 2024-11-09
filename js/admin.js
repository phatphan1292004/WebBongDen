import { cateData, subcateData, productData, customerData } from "./data.js";

document.addEventListener('DOMContentLoaded', function () {
    const bar = document.querySelector(".fa-bars");
    const sidebar = document.querySelector(".sidebar");
    const navItemsP = document.querySelectorAll(".nav-item p");
    const navItems = document.querySelectorAll(".nav-item");
    const tabContents = document.querySelectorAll('.tab-content');
    const mainContent = document.querySelector(".main-content");
    const shortTexts = ["Dashboard", "Sản phẩm", "Khách hàng", "Đơn hàng", "Doanh thu"];
    const fullTexts = ["Dashboard", "Quản lý sản phẩm", "Quản lý khách hàng", "Quản lý đơn hàng", "Thống kê doanh thu"];
    const saveProductBtn = document.getElementById('save-product');
    const overlay = document.getElementById('overlay');
    const cancelAdd = document.querySelector(".fa-xmark");
    const productTableBody = document.getElementById('product-table-body');
    const cusTableBody = document.getElementById('customer-table-body');

    // Toggle sidebar
    bar.addEventListener('click', function () {
        sidebar.classList.toggle("expanded");
        mainContent.classList.toggle('collapsed');
        navItemsP.forEach((item, index) => {
            item.textContent = sidebar.classList.contains("expanded") ? shortTexts[index] : fullTexts[index];
        });
    });

    // Tab navigation
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

    tabContents[0].style.display = 'block'; // Show the first tab by default
    navItems[0].classList.add("active"); // Activate the first tab by default

    // Load product table
    function loadProductTable() {
        productTableBody.innerHTML = ''; 
        productData.forEach(item => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${item.id}</td>
                <td>
                    <a href="${item.urlImage}" target="_blank">${item.urlImage}</a>
                </td>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.nameCate}</td>
                <td>${item.dateCreate}</td>
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
            productTableBody.appendChild(newRow);
        });
    }

    loadProductTable();

    document.querySelector('.add-product').addEventListener('click', function () {
        overlay.classList.add('active');
    });

    cancelAdd.addEventListener('click', function () {
        overlay.classList.remove("active");
        document.getElementById('product-form').reset();
    });


    saveProductBtn.addEventListener('click', () => {
        const productId = document.getElementById('product-id').value;
        const productImage = document.getElementById('product-image').value;
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;
        const productCategory = document.getElementById('product-category').value;
        const productDate = document.getElementById('product-date').value;

        productData.push({
            id: productId,
            name: productName,
            urlImage: productImage,
            price: productPrice,
            discountPercent: "",
            desc: "",
            idCate: "01",
            cateName: productCategory,
            dateCreate: productDate
        });

        loadProductTable();

        document.getElementById('product-form').reset();
        overlay.classList.remove('active');
    });

     // Xóa row khi ấn vào nút xóa
     document.querySelector('tbody').addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-product')) {
            e.stopPropagation(); 
            const row = e.target.closest('tr');
            row.remove();
            document.querySelector('tbody').dispatchEvent(new Event('change'));
        }
    });   

    function loadCustomerTable() {
        cusTableBody.innerHTML = ''; 
        customerData.forEach(item => {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.address}</td>
                <td>${item.registeredDate}</td>
                <td><button class="view-details">Xem chi tiết</button></td>
            `;
            cusTableBody.appendChild(newRow);
        });
    }

    loadCustomerTable();
});
