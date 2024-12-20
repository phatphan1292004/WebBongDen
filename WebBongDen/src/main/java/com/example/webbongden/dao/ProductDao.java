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
        // Câu lệnh SQL để lấy thông tin sản phẩm theo danh mục
        String sql = "SELECT p.id AS product_id, p.product_name, p.unit_price, " +
                "COALESCE(p.discount_percent, 0) AS discount_percent, " +
                "pi.url AS image_url, pi.main_image " +
                "FROM products p " +
                "JOIN sub_categories sc ON p.subCategory_id = sc.id " +
                "JOIN categories c ON sc.category_id = c.id " +
                "LEFT JOIN product_images pi ON p.id = pi.product_id " +
                "WHERE c.category_name = :categoryName " +
                "ORDER BY p.created_at DESC";

        // Sử dụng JDBI để thực hiện truy vấn và ánh xạ kết quả
        return jdbi.withHandle(handle -> {
            Map<Integer, Product> productMap = new HashMap<>();

            handle.createQuery(sql)
                    .bind("categoryName", categoryName) // Gán giá trị cho tham số :categoryName
                    .map((rs, ctx) -> {
                        int productId = rs.getInt("product_id");
                        Product product = productMap.get(productId);

                        // Nếu sản phẩm chưa tồn tại trong map, tạo mới và thêm vào map
                        if (product == null) {
                            product = new Product(
                                    productId,
                                    rs.getString("product_name"),
                                    rs.getDouble("unit_price"),
                                    rs.getDouble("discount_percent"),
                                    new ArrayList<>() // Danh sách hình ảnh ban đầu rỗng
                            );
                            productMap.put(productId, product);
                        }

                        // Thêm hình ảnh vào danh sách hình ảnh của sản phẩm
                        String imageUrl = rs.getString("image_url");
                        if (imageUrl != null) {
                            product.getListImg().add(new ProductImage(
                                    imageUrl,
                                    rs.getBoolean("main_image")
                            ));
                        }

                        return product;
                    }).list();

            // Trả về danh sách sản phẩm từ map
            return new ArrayList<>(productMap.values());
        });
    }
    public static void main(String[] args) {
        ProductDao productDao = new ProductDao();

        // Lấy tất cả sản p

        // Lấy sản phẩm theo danh mục
        List<Product> categoryProducts = productDao.getProductsByCategory("Electronics");
        System.out.println("\nSản phẩm trong danh mục Electronics:");
        for (Product product : categoryProducts) {
            System.out.println(product);
        }
    }

}
