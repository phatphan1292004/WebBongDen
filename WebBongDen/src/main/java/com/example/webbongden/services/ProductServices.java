package com.example.webbongden.services;

import com.example.webbongden.dao.ProductDao;
import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Product;
import com.example.webbongden.dao.model.ProductDetail;

import java.util.List;

public class ProductServices {
    public final ProductDao productDao;

    public ProductServices() {
        // Tự khởi tạo ProductDao
        this.productDao = new ProductDao();
    }

    public List<Product> getProductsByCategory(String categoryName) {
        return productDao.getProductsByCategory(categoryName);
    }
}