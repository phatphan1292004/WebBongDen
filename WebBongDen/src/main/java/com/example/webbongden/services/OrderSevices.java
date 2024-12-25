package com.example.webbongden.services;

import com.example.webbongden.dao.InvoiceDao;
import com.example.webbongden.dao.OrderDao;
import com.example.webbongden.dao.model.Customer;
import com.example.webbongden.dao.model.Invoices;
import com.example.webbongden.dao.model.Order;
import com.example.webbongden.dao.model.OrderDetail;

import java.util.List;

public class OrderSevices {
    public final OrderDao orderDao;
    public final InvoiceDao invoiceDao;

    public OrderSevices() {
        this.orderDao = new OrderDao();
        this.invoiceDao = new InvoiceDao();
    }

    public int getTotalOrders() {
        return orderDao.totalOrderInLastedMonth();
    }

    public int getPendingOrders() {
        return orderDao.totalPendingOrders();
    }

    public int getShippingOrders() {
        return orderDao.totalShippingOrders();
    }

    public List<Order> getAllOrders() {
        return orderDao.getListOrders();
    }

    public List<Order> getOrdersInLastMonth() {
        return orderDao.getOrdersInLastMonth();
    }

    public List<Order> getOrdersByKeyWord(String value) {
        return orderDao.getOrdersByKeyword(value);
    }

    public boolean updateOrderStatus(int orderId, String status) {
        return orderDao.updateOrderStatus(orderId, status);
    }

    public List<Order> filterOrderByStatus(String value) {
        return orderDao.filterOrderByStatus(value);
    }

    public double getTotalRevenue() {
        return orderDao.getTotalRevenue();
    }

    public void createOrderAndInvoice(Invoices invoice, List<OrderDetail> orderDetails, Customer customerInfo) {
        try {
            // Bước 1: Tạo hóa đơn
            int invoiceId = invoiceDao.createInvoice(invoice);
            invoice.setId(invoiceId); // Cập nhật ID cho invoice

            // Bước 2: Tạo chi tiết hóa đơn
            invoiceDao.createInvoiceDetails(invoiceId, orderDetails);

            // Bước 3: Tạo đơn hàng từ hóa đơn
            int orderId = orderDao.createOrderFromInvoice(invoice, customerInfo);

            // Bước 4: Tạo chi tiết đơn hàng
            orderDao.createOrderDetails(orderId, orderDetails);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException("Đã xảy ra lỗi trong quá trình tạo hóa đơn và đơn hàng.", e);
        }
    }
}
