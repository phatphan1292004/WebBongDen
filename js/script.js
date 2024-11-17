import { cateData, subcateData, productData } from "./data.js";
document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(elementId, filePath) {
        return fetch(filePath)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
                return data;
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    Promise.all([
        loadHTML('header', './reuse/header.html'),
        loadHTML('footer', './reuse/footer.html')
    ]).then(() => {
        cateData.forEach((category) => {
            const categoryItem = document.createElement("li");
            categoryItem.classList.add("category");

            const productsList = `
                <p class="category-header">${category.name}</p>
                <ul class="category-products">
                    ${subcateData
                        .filter((subcate) => subcate.idCate === category.id)
                        .map(
                            (subcate) =>
                                `<li class="category-item">${subcate.name}</li>`
                        )
                        .join("")}
                </ul>
            `;
            categoryItem.innerHTML = productsList;
            document.getElementById("category-list").appendChild(categoryItem);
        });
    });

    
    const headerUser = document.querySelector(".header-user");
    const loginBtn = document.getElementById("login-header-btn");
  
    // Kiểm tra sessionStorage
    const loggedInUser = sessionStorage.getItem("loggedInUser");
  
    if (loggedInUser) {
      headerUser.style.display = "block";
      loginBtn.style.display = "none";
    } else {
      headerUser.style.display = "none";
      loginBtn.style.display = "block";
    }
});
