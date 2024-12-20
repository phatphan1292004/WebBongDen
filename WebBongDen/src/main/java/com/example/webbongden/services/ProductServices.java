package com.example.webbongden.services;

import com.example.webbongden.dao.ProductDao;
import com.example.webbongden.dao.model.Product;
import java.util.List;

public class ProductServices {
    public final ProductDao productDao;

    public ProductServices() {
        // Tự khởi tạo ProductDao
        this.productDao = new ProductDao();
    }

    // Lấy sản phẩm theo tên danh mục (danh mục cha)
    public List<Product> getProductsByCategory(String categoryName) {
        return productDao.getProductsByCategory(categoryName);
    }

    // Lấy sản phẩm theo danh mục con (subCategory)
    public List<Product> getProductsBySubCategory(int subCategoryId) {
        return productDao.getProductsBySubCategory(subCategoryId); // Gọi hàm với ID của danh mục con
    }
}
