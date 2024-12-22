package com.example.webbongden.dao;

import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Order;
import com.example.webbongden.dao.model.OrderDetail;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class OrderDao {
    private final Jdbi jdbi;

    public OrderDao() {
        jdbi = JDBIConnect.get();
    }

    public int totalOrderInLastedMonth() {
        String sql = "SELECT COUNT(*) " +
                "FROM orders " +
                "WHERE created_at BETWEEN " +
                "DATE_FORMAT(NOW(), '%Y-%m-01') " + // Ngày đầu tháng hiện tại
                "AND LAST_DAY(NOW())"; // Ngày cuối tháng hiện tại

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapTo(int.class)
                        .one()
        );
    }

    public int totalPendingOrders() {
        String sql = "SELECT COUNT(*) " +
                "FROM orders " +
                "WHERE order_status = 'pending'";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapTo(int.class)
                        .one()
        );
    }

    public int totalShippingOrders() {
        String sql = "SELECT COUNT(*) " +
                "FROM orders " +
                "WHERE order_status = 'shipping'";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapTo(int.class)
                        .one()
        );
    }

    public List<Order> getOrdersInLastMonth() {
        String sql = "SELECT o.id AS orderId, " +
                "       c.cus_name AS customerName, " +
                "       o.created_at AS orderDate, " +
                "       o.order_status AS status " +
                "FROM orders o " +
                "JOIN accounts a ON o.account_id = a.id " +
                "JOIN customers c ON a.customer_id = c.id " +
                "WHERE o.created_at BETWEEN " +
                "      DATE_FORMAT(NOW(), '%Y-%m-01') " + // Ngày đầu tháng hiện tại
                "      AND LAST_DAY(NOW())"; // Ngày cuối tháng hiện tại

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .map((rs, ctx) -> new Order(
                                rs.getInt("orderId"),
                                rs.getString("customerName"),
                                rs.getDate("orderDate"),
                                rs.getString("status")
                        ))
                        .list()
        );
    }

    public List<Order> getListOrders() {
            String sql = "SELECT o.id AS orderId, c.cus_name AS customerName, " +
                    "o.created_at AS orderDate, " +
                    "o.total_price AS totalPrice, " +
                    "c.address AS address, o.order_status AS status " +
                    "FROM orders o " +
                    "JOIN accounts a ON o.account_id = a.id " +
                    "JOIN customers c ON a.customer_id = c.id";

            return jdbi.withHandle(handle ->
                    handle.createQuery(sql)
                            .map((rs, ctx) -> new Order(
                                    rs.getInt("orderId"),
                                    rs.getString("customerName"),
                                    rs.getDate("orderDate"),
                                    rs.getDouble("totalPrice"), // Sử dụng getDouble
                                    rs.getString("address"),
                                    rs.getString("status"),
                                    getOrderDetailsByOrderId(rs.getInt("orderId")) // Lấy danh sách chi tiết đơn hàng
                            ))
                            .list()
            );
        }

        // Lấy danh sách chi tiết đơn hàng theo orderId
        public List<OrderDetail> getOrderDetailsByOrderId(int orderId) {
            String sql = "SELECT product_id AS productId, order_id AS orderId, quantity, " +
                    "unit_price AS unitPrice, item_discount AS itemDiscount, amount " +
                    "FROM order_details WHERE order_id = :orderId";

            return jdbi.withHandle(handle ->
                    handle.createQuery(sql)
                            .bind("orderId", orderId)
                            .map((rs, ctx) -> new OrderDetail(
                                    rs.getInt("productId"),
                                    rs.getInt("orderId"),
                                    rs.getInt("quantity"),
                                    rs.getDouble("unitPrice"),
                                    rs.getDouble("itemDiscount"),
                                    rs.getDouble("amount")
                            ))
                            .list()
            );
        }

    public List<Order> getOrdersByKeyword(String keyword) {
        String sql = "SELECT o.id AS orderId, c.cus_name AS customerName, " +
                "o.created_at AS orderDate, " +
                "o.total_price AS totalPrice, " +
                "c.address AS address, o.order_status AS status " +
                "FROM orders o " +
                "JOIN accounts a ON o.account_id = a.id " +
                "JOIN customers c ON a.customer_id = c.id " +
                "WHERE (:keyword IS NULL OR c.cus_name LIKE :keyword OR o.order_status LIKE :keyword)";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .bind("keyword", keyword != null ? "%" + keyword + "%" : null) // Tìm kiếm dựa vào keyword
                        .map((rs, ctx) -> new Order(
                                rs.getInt("orderId"),
                                rs.getString("customerName"),
                                rs.getDate("orderDate"),
                                rs.getDouble("totalPrice"),
                                rs.getString("address"),
                                rs.getString("status"),
                                getOrderDetailsByOrderId(rs.getInt("orderId")) // Lấy danh sách chi tiết đơn hàng
                        ))
                        .list()
        );
    }

    public boolean updateOrderStatus(int orderId, String status) {
        String sql = "UPDATE orders SET order_status = :status WHERE id = :orderId";

        return jdbi.withHandle(handle ->
                handle.createUpdate(sql)
                        .bind("status", status)
                        .bind("orderId", orderId)
                        .execute() > 0
        );
    }

    public List<Order> filterOrderByStatus(String keyword) {
        String sql = "SELECT o.id AS orderId, c.cus_name AS customerName, " +
                "o.created_at AS orderDate, " +
                "o.total_price AS totalPrice, " +
                "c.address AS address, o.order_status AS status " +
                "FROM orders o " +
                "JOIN accounts a ON o.account_id = a.id " +
                "JOIN customers c ON a.customer_id = c.id " +
                "WHERE (:keyword IS NULL OR o.order_status LIKE :keyword)";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .bind("keyword", keyword != null ? "%" + keyword + "%" : null) // Tìm kiếm dựa vào keyword
                        .map((rs, ctx) -> new Order(
                                rs.getInt("orderId"),
                                rs.getString("customerName"),
                                rs.getDate("orderDate"),
                                rs.getDouble("totalPrice"),
                                rs.getString("address"),
                                rs.getString("status"),
                                getOrderDetailsByOrderId(rs.getInt("orderId")) // Lấy danh sách chi tiết đơn hàng
                        ))
                        .list()
        );
    }

    public double getTotalRevenue() {
        String sql = "SELECT SUM(total_price) AS totalRevenue FROM orders";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .mapTo(double.class)
                        .one()
        );
    }



    public static void main(String[] args) {
//        // Khởi tạo đối tượng OrderDao
//        OrderDao orderDao = new OrderDao();
//
//        // Tìm kiếm đơn hàng với từ khóa
//        String keyword = "Pending"; // Thay từ khóa ở đây để kiểm tra (VD: "Nguyễn Văn A" hoặc "Shipped")
//        List<Order> orders = orderDao.filterOrderByStatus(keyword);
//
//        // In kết quả
//        System.out.println("Kết quả tìm kiếm cho từ khóa: " + keyword);
//        if (orders.isEmpty()) {
//            System.out.println("Không tìm thấy đơn hàng nào phù hợp!");
//        } else {
//            for (Order order : orders) {
//                System.out.println("Order ID: " + order.getId());
//                System.out.println("Customer Name: " + order.getCustomerName());
//                System.out.println("Order Date: " + order.getCreatedAt());
//                System.out.println("Total Price: " + order.getTotalPrice());
//                System.out.println("Address: " + order.getAddress());
//                System.out.println("Status: " + order.getOrderStatus());
//
//                // In chi tiết đơn hàng nếu có
//                List<OrderDetail> orderDetails = order.getOrderDetails();
//                if (orderDetails != null && !orderDetails.isEmpty()) {
//                    System.out.println("Order Details:");
//                    for (OrderDetail detail : orderDetails) {
//                        System.out.println("\tProduct ID: " + detail.getProductId());
//                        System.out.println("\tQuantity: " + detail.getQuantity());
//                        System.out.println("\tUnit Price: " + detail.getUnitPrice());
//                        System.out.println("\tDiscount: " + detail.getItemDiscount());
//                        System.out.println("\tAmount: " + detail.getAmount());
//                    }
//                } else {
//                    System.out.println("No order details found for this order.");
//                }
//                System.out.println("------------------------------");
//            }
//        }
        OrderDao orderDao = new OrderDao();
        System.out.println(orderDao.totalOrderInLastedMonth());
        List<Order> orders = orderDao.getOrdersInLastMonth();

        // Hiển thị kết quả
        System.out.println("Danh sách đơn hàng trong tháng trước:");
        for (Order order : orders) {
            System.out.println("ID: " + order.getId());
            System.out.println("Tên khách hàng: " + order.getCustomerName());
            System.out.println("Ngày đặt: " + order.getCreatedAt());
            System.out.println("Trạng thái: " + order.getOrderStatus());
            System.out.println("-----------------------");
        }
    }
}






