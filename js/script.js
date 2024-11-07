import { cateData, subcateData, productData } from "./data.js";
window.addEventListener('load', function() {
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
        // Mã để xử lý danh mục sản phẩm
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
});

      // Tải tệp header
      fetch('header.html')
      .then(response => response.text())
      .then(data => document.getElementById('header').innerHTML = data);

  // Tải tệp footer
  fetch('footer.html')
      .then(response => response.text())
      .then