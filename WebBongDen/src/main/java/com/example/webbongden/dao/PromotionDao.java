package com.example.webbongden.dao;

import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Promotion;
import org.jdbi.v3.core.Jdbi;

public class PromotionDao {
    private final Jdbi jdbi;

    public PromotionDao() {
        this.jdbi = JDBIConnect.get();
    }


    public Promotion getPromotionByProductId(int productId) {
        String sql = "SELECT * FROM promotions " +
                "WHERE product_id = :productId " +
                "AND start_day <= CURDATE() " + // CURDATE() là hàm MySQL để lấy ngày hiện tại
                "AND end_day >= CURDATE()";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .bind("productId", productId) // Gán tham số productId
                        .mapToBean(Promotion.class)  // Ánh xạ kết quả sang đối tượng Promotion
                        .findOne()
                        .orElse(null) // Nếu không tìm thấy thì trả về null
        );
    }

    //Thêm chương trình mới
    public boolean addPromotion(Promotion promotion) {
        String sql = "INSERT INTO promotions (promotion_name, start_day, end_day, discount_percent, promotion_type) " +
                "VALUES (:name, NOW(), :endDate, :discount, :type)";

        return jdbi.withHandle(handle ->
                handle.createUpdate(sql)
                        .bind("name", promotion.getPromotionName())
                        .bind("endDate", promotion.getEndDay())
                        .bind("discount", promotion.getDiscountPercent())
                        .bind("type", promotion.getPromotionType())
                        .execute() > 0
        );
    }


    public static void main(String[] args) {
        // Tạo đối tượng PromotionDao
        PromotionDao promotionDao = new PromotionDao();

        // Test với productId cụ thể
        int productId = 1; // Thay đổi productId tùy theo dữ liệu trong database

        try {
            // Gọi phương thức getPromotionByProductId
            Promotion promotion = promotionDao.getPromotionByProductId(productId);

            // Kiểm tra kết quả và in ra
            if (promotion != null) {
                System.out.println("Khuyến mãi tìm thấy:");
                System.out.println("ID: " + promotion.getId());
                System.out.println("Tên khuyến mãi: " + promotion.getPromotionName());
                System.out.println("Loại khuyến mãi: " + promotion.getPromotionType());
                System.out.println("Phần trăm giảm giá: " + promotion.getDiscountPercent());
                System.out.println("Ngày bắt đầu: " + promotion.getStartDay());
                System.out.println("Ngày kết thúc: " + promotion.getEndDay());
            } else {
                System.out.println("Không có khuyến mãi nào cho productId: " + productId);
            }
        } catch (Exception e) {
            // Xử lý lỗi
            System.err.println("Đã xảy ra lỗi khi truy vấn khuyến mãi:");
            e.printStackTrace();
        }
    }
}
