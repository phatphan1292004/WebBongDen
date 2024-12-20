package com.example.webbongden.dao;

import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Product;
import com.example.webbongden.dao.model.ProductImage;
import org.jdbi.v3.core.Jdbi;
import org.jdbi.v3.core.statement.Query;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProductDao {
    private final Jdbi jdbi;

    public ProductDao() {
        this.jdbi = JDBIConnect.get();
    }

    // Lấy sản phẩm theo danh mục cha
    public List<Product> getProductsByCategory(String categoryName) {
        String sql = "SELECT p.id AS product_id, p.product_name, p.unit_price, " +
                "COALESCE(p.discount_percent, 0) AS discount_percent, " +
                "pi.url AS image_url, pi.main_image " +
                "FROM products p " +
                "JOIN sub_categories sc ON p.subCategory_id = sc.id " +
                "JOIN categories c ON sc.category_id = c.id " +
                "LEFT JOIN product_images pi ON p.id = pi.product_id " +
                "WHERE c.category_name = :categoryName " +
                "ORDER BY p.created_at DESC";

        return jdbi.withHandle(handle -> {
            Map<Integer, Product> productMap = new HashMap<>();
            handle.createQuery(sql)
                    .bind("categoryName", categoryName)
                    .map((rs, ctx) -> {
                        int productId = rs.getInt("product_id");
                        Product product = productMap.get(productId);
                        if (product == null) {
                            product = new Product(
                                    productId,
                                    rs.getString("product_name"),
                                    rs.getDouble("unit_price"),
                                    rs.getDouble("discount_percent"),
                                    new ArrayList<>()
                            );
                            productMap.put(productId, product);
                        }
                        String imageUrl = rs.getString("image_url");
                        if (imageUrl != null) {
                            product.getListImg().add(new ProductImage(
                                    imageUrl,
                                    rs.getBoolean("main_image")
                            ));
                        }
                        return product;
                    }).list();

            return new ArrayList<>(productMap.values());
        });
    }

    // Lấy sản phẩm theo danh mục con
    public List<Product> getProductsBySubCategory(int subCategoryId) {
        String sql = "SELECT p.id AS product_id, p.product_name, p.unit_price, " +
                "COALESCE(p.discount_percent, 0) AS discount_percent, " +
                "pi.url AS image_url, pi.main_image " +
                "FROM products p " +
                "JOIN sub_categories sc ON p.subCategory_id = sc.id " +
                "LEFT JOIN product_images pi ON p.id = pi.product_id " +
                "WHERE p.subCategory_id = :subCategoryId " +
                "ORDER BY p.created_at DESC";

        return jdbi.withHandle(handle -> {
            Map<Integer, Product> productMap = new HashMap<>();
            handle.createQuery(sql)
                    .bind("subCategoryId", subCategoryId)
                    .map((rs, ctx) -> {
                        int productId = rs.getInt("product_id");
                        Product product = productMap.get(productId);
                        if (product == null) {
                            product = new Product(
                                    productId,
                                    rs.getString("product_name"),
                                    rs.getDouble("unit_price"),
                                    rs.getDouble("discount_percent"),
                                    new ArrayList<>()
                            );
                            productMap.put(productId, product);
                        }
                        String imageUrl = rs.getString("image_url");
                        if (imageUrl != null) {
                            product.getListImg().add(new ProductImage(
                                    imageUrl,
                                    rs.getBoolean("main_image")
                            ));
                        }
                        return product;
                    }).list();

            return new ArrayList<>(productMap.values());
        });
    }

    public static void main(String[] args) {
        ProductDao productDao = new ProductDao();

        // Lấy sản phẩm theo danh mục cha
        List<Product> categoryProducts = productDao.getProductsByCategory("Đèn Chùm");
        System.out.println("\nSản phẩm trong danh mục 'Đèn Chùm':");
        for (Product product : categoryProducts) {
            System.out.println(product);
        }

        // Lấy sản phẩm theo danh mục con
        List<Product> subCategoryProducts = productDao.getProductsBySubCategory(1); // Giả sử subCategoryId = 1
        System.out.println("\nSản phẩm trong danh mục con:");
        for (Product product : subCategoryProducts) {
            System.out.println(product);
        }
    }
}
