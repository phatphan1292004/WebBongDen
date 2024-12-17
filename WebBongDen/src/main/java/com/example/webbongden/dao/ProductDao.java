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

    public List<Product> getProductsByCategory(String categoryName) {
        String sql = "SELECT p.id AS product_id, p.product_name, p.unit_price, p.discount_percent, " +
                "pi.url AS image_url, pi.main_image " +
                "FROM products p " +
                "JOIN sub_categories sc ON p.subCategory_id = sc.id " +
                "JOIN categories c ON sc.category_id = c.id " +
                "LEFT JOIN product_images pi ON p.id = pi.product_id " +
                "WHERE c.category_name = :categoryName " +
                "ORDER BY p.created_at DESC " +
                "LIMIT 5";

        return jdbi.withHandle(handle -> {
            Query query = handle.createQuery(sql).bind("categoryName", categoryName);
            Map<Integer, Product> productMap = new HashMap<>();

            query.map((rs, ctx) -> {
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
        // Kết nối JDBI tới MySQL
        String url = "jdbc:mysql://localhost:3306/test1"; // Thay đổi tên database
        String username = "root";
        String password = "";

        Jdbi jdbi = Jdbi.create(url, username, password);
        ProductDao productDao = new ProductDao();

        // Thực hiện truy vấn
        String categoryName = "ĐÈN CHÙM";
        List<Product> products = productDao.getProductsByCategory(categoryName);

        // In ra kết quả
        for (Product product : products) {
            System.out.println("ID: " + product.getId());
            System.out.println("Name: " + product.getProductName());
            System.out.println("Price: " + product.getUnitPrice());
            System.out.println("Discount: " + product.getDiscountPercent());
            System.out.println("Images:");
            product.getListImg().forEach(img -> {
                System.out.println(" - URL: " + img.getUrl() + ", Main Image: " + img.isMainImage());
            });
            System.out.println("----------------------------");
        }
    }
}
