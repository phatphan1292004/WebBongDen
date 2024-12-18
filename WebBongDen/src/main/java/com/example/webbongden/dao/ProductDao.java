package com.example.webbongden.dao;

import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Product;
import com.example.webbongden.dao.model.ProductDetail;
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

    public List<Product> getProductsForAdminPage() {
        String sql = "SELECT " +
                "p.id AS id, " +
                "p.product_name AS productName, " +
                "p.unit_price AS unitPrice, " +
                "p.created_at AS createdAt, " +
                "sc.name AS categoryName, " +
                "COALESCE(pi.url, 'https://via.placeholder.com/50') AS imageUrl " +
                "FROM products p " +
                "JOIN sub_categories sc ON p.subCategory_id = sc.id " +
                "LEFT JOIN product_images pi ON pi.product_id = p.id AND pi.main_image = TRUE";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .map((rs, ctx) -> new Product(
                                rs.getInt("id"),
                                rs.getString("imageUrl"),
                                rs.getString("productName"),
                                rs.getDouble("unitPrice"),
                                rs.getString("categoryName"),
                                rs.getDate("createdAt")
                        ))
                        .list()
        );
    }

    public int getTotalProducts() {
        String sql = "SELECT SUM(stock_quantity) FROM products";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public int getCategoryQuantity() {
        String sql = "select count(*) from categories";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public int getOutOfStockProducts() {
        String sql = "SELECT COUNT(*) FROM products WHERE stock_quantity = 0";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public int getNewProductsInLast7Days() {
        String sql = "SELECT COUNT(*) AS total FROM products WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapTo(Integer.class)
                        .one()
        );
    }

    public ProductDetail getProductDetailById(int id) {
        String sql = "SELECT p.id, p.subCategory_id, p.product_name, p.unit_price, p.created_at, p.stock_quantity, " +
                "p.product_status, p.rating, p.DESC_1 AS description, p.warranty_period, p.light_color, " +
                "p.material, p.voltage, p.usage_age, p.discount_percent, " +
                "c.category_name, pi.url AS main_image_url " +
                "FROM products p " +
                "JOIN sub_categories sc ON p.subCategory_id = sc.id " +
                "JOIN categories c ON sc.category_id = c.id " +
                "LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.main_image = true " +
                "WHERE p.id = :id";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .bind("id", id)
                        .map((rs, ctx) -> new ProductDetail(
                                rs.getInt("id"),
                                rs.getInt("subCategory_id"),
                                rs.getString("product_name"),
                                rs.getDouble("unit_price"),
                                rs.getDate("created_at"),
                                rs.getInt("stock_quantity"),
                                rs.getString("product_status"),
                                rs.getDouble("rating"),
                                rs.getString("description"),
                                rs.getString("warranty_period"),
                                rs.getString("light_color"),
                                rs.getString("material"),
                                rs.getString("voltage"),
                                rs.getString("usage_age"),
                                rs.getDouble("discount_percent"),
                                null, // Danh sách hình ảnh sẽ không cần nếu chỉ lấy hình chính
                                rs.getString("category_name"), // Tên danh mục
                                rs.getString("main_image_url") // Hình ảnh chính
                        ))
                        .findOne()
                        .orElse(null)
        );
    }


    public int getSubCategoryIdByName(String subCategoryName) {
        String sql = "SELECT id FROM sub_categories WHERE name = :subCategoryName";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .bind("subCategoryName", subCategoryName)
                        .mapTo(Integer.class)
                        .findOne() // Tìm một kết quả duy nhất
                        .orElseThrow(() -> new IllegalArgumentException("Không tìm thấy danh mục con: " + subCategoryName))
        );
    }

    public boolean addProduct(ProductDetail product, String subCategoryName) {
        // Lấy subCategoryId từ tên danh mục con
        int subCategoryId = getSubCategoryIdByName(subCategoryName);

        String productSql = "INSERT INTO products (subCategory_id, product_name, unit_price, created_at, stock_quantity, product_status, rating, DESC_1, warranty_period, light_color, material, voltage, usage_age, discount_percent) "
                + "VALUES (:subCategoryId, :productName, :unitPrice, :createdAt, :stockQuantity, :productStatus, :rating, :description, :warrantyPeriod, :lightColor, :material, :voltage, :usageAge, :discountPercent)";

        String imageSql = "INSERT INTO product_images (product_id, url, main_image) VALUES (:productId, :url, :mainImage)";

        return jdbi.inTransaction(handle -> {
            // Thêm sản phẩm vào bảng `products`
            int productId = handle.createUpdate(productSql)
                    .bind("subCategoryId", subCategoryId) // Gán subCategoryId lấy từ tên
                    .bind("productName", product.getProductName())
                    .bind("unitPrice", product.getUnitPrice())
                    .bind("createdAt", new java.sql.Date(product.getCreatedAt().getTime()))
                    .bind("stockQuantity", product.getStockQuantity())
                    .bind("productStatus", product.getProductStatus())
                    .bind("rating", product.getRating())
                    .bind("description", product.getDescription())
                    .bind("warrantyPeriod", product.getWarrantyPeriod())
                    .bind("lightColor", product.getLightColor())
                    .bind("material", product.getMaterial())
                    .bind("voltage", product.getVoltage())
                    .bind("usageAge", product.getUsageAge())
                    .bind("discountPercent", product.getDiscountPercent())
                    .executeAndReturnGeneratedKeys("id")
                    .mapTo(int.class)
                    .one();

            // Thêm danh sách hình ảnh vào bảng `product_images`
            if (product.getListImages() != null && !product.getListImages().isEmpty()) {
                for (ProductImage image : product.getListImages()) {
                    handle.createUpdate(imageSql)
                            .bind("productId", productId)
                            .bind("url", image.getUrl())
                            .bind("mainImage", image.isMainImage())
                            .execute();
                }
            }

            return true;
        });
    }






    public static void main(String[] args) {
        // Khởi tạo ProductDao
        ProductDao productDao = new ProductDao();

        try {
            // Tạo sản phẩm mới để thêm vào database
            ProductDetail newProduct = new ProductDetail(
                    0, // ID tự động tăng
                    0, // subCategory_id, sẽ được lấy dựa vào tên danh mục con
                    "Đèn aaaaaa trang trí", // Tên sản phẩm
                    300000.0, // Giá sản phẩm
                    new java.util.Date(), // Ngày tạo
                    20, // Số lượng tồn kho
                    "Còn hàng", // Trạng thái sản phẩm
                    4.7, // Rating
                    "Đèn LED trang trí phòng khách, ánh sáng trắng", // Mô tả
                    "24 tháng", // Thời gian bảo hành
                    "Trắng", // Màu ánh sáng
                    "Hợp kim nhôm", // Chất liệu
                    "220V", // Điện áp
                    "3 năm", // Tuổi thọ sử dụng
                    10.0, // Giảm giá (%)
                    new ArrayList<>(), // Danh sách hình ảnh
                    null, // Tên danh mục, không cần thiết vì đã truyền subCategoryName
                    null  // Hình ảnh chính (tạm thời để null)
            );

            // Thêm hình ảnh vào sản phẩm
            newProduct.getListImages().add(new ProductImage("https://example.com/image1.jpg", true));
            newProduct.getListImages().add(new ProductImage("https://example.com/image2.jpg", false));

            // Gọi phương thức addProduct để thêm sản phẩm vào database
            String subCategoryName = "Đèn ngoài trời"; // Tên danh mục con đã tồn tại trong DB
            boolean result = productDao.addProduct(newProduct, subCategoryName);

            // Kiểm tra kết quả
            if (result) {
                System.out.println("Thêm sản phẩm thành công!");
            } else {
                System.out.println("Thêm sản phẩm thất bại!");
            }
        } catch (Exception e) {
            System.err.println("Lỗi khi thêm sản phẩm: " + e.getMessage());
            e.printStackTrace();
        }
    }

}
