package com.example.webbongden.dao;

import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Promotion;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

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


    // Lấy ra danh sách chương trinh giam gia lon
    public List<Promotion> getPromotionsWithoutProduct() {
        String sql = "SELECT * FROM promotions " +
                "WHERE product_id IS NULL " +
                "ORDER BY start_day DESC"; // Có thể sắp xếp theo ngày bắt đầu

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapToBean(Promotion.class)
                        .list() // Trả về danh sách
        );
    }

    //Thêm sp vào chương trình khuyến mãi
    public boolean addProductToPromotion(int promotionId, int productId) {
        String checkSql = "SELECT COUNT(*) FROM promotion_programs WHERE promotion_id = :promotionId AND product_id = :productId";
        String insertSql = "INSERT INTO promotion_programs (promotion_id, product_id) VALUES (:promotionId, :productId)";

        return jdbi.withHandle(handle -> {
            // Kiểm tra xem sản phẩm đã tồn tại trong chương trình chưa
            int count = handle.createQuery(checkSql)
                    .bind("promotionId", promotionId)
                    .bind("productId", productId)
                    .mapTo(Integer.class)
                    .one();

            if (count > 0) {
                // Nếu sản phẩm đã tồn tại trong chương trình, không thêm nữa
                return false;
            }

            // Nếu chưa tồn tại, tiến hành thêm vào
            return handle.createUpdate(insertSql)
                    .bind("promotionId", promotionId)
                    .bind("productId", productId)
                    .execute() > 0;
        });
    }


    public static void main(String[] args) {
        PromotionDao promotionDao = new PromotionDao();
        try {
            // Lấy danh sách tất cả chương trình giảm giá không liên kết với sản phẩm
            List<Promotion> promotions = promotionDao.getPromotionsWithoutProduct();

            // In ra danh sách các chương trình
            if (!promotions.isEmpty()) {
                System.out.println("Danh sách các chương trình giảm giá không liên kết với sản phẩm:");
                for (Promotion promotion : promotions) {
                    System.out.println("ID: " + promotion.getId());
                    System.out.println("Tên chương trình: " + promotion.getPromotionName());
                    System.out.println("Ngày bắt đầu: " + promotion.getStartDay());
                    System.out.println("Ngày kết thúc: " + promotion.getEndDay());
                    System.out.println("Loại khuyến mãi: " + promotion.getPromotionType());
                    System.out.println("Phần trăm giảm giá: " + promotion.getDiscountPercent());
                    System.out.println("---------------------------");
                }
            } else {
                System.out.println("Không có chương trình giảm giá nào không liên kết với sản phẩm.");
            }
        } catch (Exception e) {
            System.err.println("Đã xảy ra lỗi khi lấy danh sách chương trình giảm giá:");
            e.printStackTrace();
        }
    }
}
