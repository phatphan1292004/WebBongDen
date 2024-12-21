package com.example.webbongden.dao;

import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Order;
import com.example.webbongden.dao.model.User;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class UserDao {
    private final Jdbi jdbi;

    public UserDao() {
        this.jdbi = JDBIConnect.get();
    }

    public List<User> getCustomerAccountInfo() {
        String sql = "SELECT " +
                "c.id AS customerId, " +
                "c.cus_name AS customerName, " +
                "a.email, " +
                "c.phone, " +
                "c.address, " +
                "a.created_at AS registrationDate " +
                "FROM customers c " +
                "JOIN accounts a ON c.id = a.customer_id";

        List<User> users = jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .map((rs, ctx) -> new User(
                                rs.getString("customerId"),
                                rs.getString("customerName"),
                                rs.getString("email"),
                                rs.getString("phone"),
                                rs.getString("address"),
                                rs.getDate("registrationDate"),
                                null // Tạm thời chưa gán lịch sử mua hàng
                        ))
                        .list()
        );

        // Lấy lịch sử mua hàng cho từng khách hàng
        for (User user : users) {
            List<Order> purchaseHistory = getPurchaseHistoryByCustomerId(user.getCustomerId());
            user.setOrderHistory(purchaseHistory);
        }

        return users;
    }

    public List<User> searchCustomerByName(String customerName) {
        String sql = "SELECT " +
                "c.id AS customerId, " +
                "c.cus_name AS customerName, " +
                "a.email, " +
                "c.phone, " +
                "c.address, " +
                "a.created_at AS registrationDate " +
                "FROM customers c " +
                "JOIN accounts a ON c.id = a.customer_id " +
                "WHERE c.cus_name LIKE :customerName";

        List<User> users = jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .bind("customerName", "%" + customerName + "%") // Tìm kiếm theo tên (LIKE)
                        .map((rs, ctx) -> new User(
                                rs.getString("customerId"),
                                rs.getString("customerName"),
                                rs.getString("email"),
                                rs.getString("phone"),
                                rs.getString("address"),
                                rs.getDate("registrationDate"),
                                null // Tạm thời chưa gán lịch sử mua hàng
                        ))
                        .list()
        );

        // Lấy lịch sử mua hàng cho từng khách hàng
        for (User user : users) {
            List<Order> purchaseHistory = getPurchaseHistoryByCustomerId(user.getCustomerId());
            user.setOrderHistory(purchaseHistory);
        }

        return users;
    }

    public List<Order> getPurchaseHistoryByCustomerId(String customerId) {
        String sql = "SELECT " +
                "o.id AS orderId, " +
                "o.created_at AS orderDate, " +
                "o.total_price AS totalPrice, " +
                "o.order_status AS orderStatus " +
                "FROM orders o " +
                "JOIN accounts a ON o.account_id = a.id " +
                "JOIN customers c ON a.customer_id = c.id " +
                "WHERE c.id = :customerId";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .bind("customerId", customerId)
                        .map((rs, ctx) -> new Order(
                                rs.getInt("orderId"),
                                null,
                                rs.getDate("orderDate"),
                                rs.getDouble("totalPrice"),
                                null,
                                rs.getString("orderStatus"),
                                null
                        ))
                        .list()
        );
    }

    public static void main(String[] args) {
        // Tạo đối tượng UserDao
        UserDao userDao = new UserDao();

        // Test phương thức lấy danh sách thông tin khách hàng
        System.out.println("Danh sách thông tin khách hàng:");
        List<User> userList = userDao.getCustomerAccountInfo();
        for (User user : userList) {
            System.out.println("ID Khách hàng: " + user.getCustomerId());
            System.out.println("Tên khách hàng: " + user.getCustomerName());
            System.out.println("Email: " + user.getEmail());
            System.out.println("Số điện thoại: " + user.getPhone());
            System.out.println("Địa chỉ: " + user.getAddress());
            System.out.println("Ngày đăng ký: " + user.getCreatedAt());

            // In lịch sử mua hàng nếu có
            System.out.println("Lịch sử mua hàng:");
            List<Order> purchaseHistory = userDao.getPurchaseHistoryByCustomerId(user.getCustomerId());
            if (purchaseHistory != null && !purchaseHistory.isEmpty()) {
                for (Order order : purchaseHistory) {
                    System.out.println("  - Mã đơn hàng: " + order.getId());
                    System.out.println("    Ngày đặt hàng: " + order.getCreatedAt());
                    System.out.println("    Tổng tiền: " + order.getTotalPrice());
                    System.out.println("    Trạng thái: " + order.getOrderStatus());
                }
            } else {
                System.out.println("  Không có lịch sử mua hàng.");
            }
            System.out.println("---------------------------------------------------");
        }
    }
}
