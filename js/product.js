document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.cate-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const subcategoryList = this.nextElementSibling;

            // Thêm hoặc gỡ bỏ class `show` để điều khiển hiệu ứng
            if (subcategoryList.classList.contains('show')) {
                subcategoryList.classList.remove('show');
            } else {
                subcategoryList.classList.add('show');
            }
        });
    });
});

