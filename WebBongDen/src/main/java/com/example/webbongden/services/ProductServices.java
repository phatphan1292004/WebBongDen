package com.example.webbongden.services;

import com.example.webbongden.dao.ProductDao;
import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Product;
import com.example.webbongden.dao.model.ProductDetail;
import com.example.webbongden.dao.model.TopProduct;

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

    public List<Product> getListProductForAdminPage() {
        return productDao.getProductsForAdminPage();
    }

    public int getTotalProducts() {
        return productDao.getTotalProducts();
    }

    public int getCategoryQuantity() {
        return productDao.getCategoryQuantity();
    }

    public int getOutOfStockProducts() {
        return productDao.getOutOfStockProducts();
    }

    public int getNewProductsInLast7Days() {
        return productDao.getNewProductsInLast7Days();
    }

    public ProductDetail getProductDetailById(int productId) {
        return productDao.getProductDetailById(productId);
    }

    public boolean addProduct(ProductDetail product, String subCategoryName) {
        try {
            return productDao.addProduct(product, subCategoryName);
        } catch (IllegalArgumentException e) {
            // Xử lý ngoại lệ khi không tìm thấy danh mục
            System.err.println("Lỗi: " + e.getMessage());
            return false;
        }
    }

    public boolean deleteProduct(int productId) {
        return productDao.deleteProductById(productId);
    }
    public List<Product> getProductsByKeyword(String a) {
        return productDao.getProductsByKeyword(a);
    }

    public List<TopProduct> getTopProducts() {
        return productDao.getTopSellingProducts();
    }

    public List<Product> getProductsBySubCategory(int subCategoryId) {
        return productDao.getProductsBySubCategory(subCategoryId); // Gọi hàm với ID của danh mục con
    }
 }
