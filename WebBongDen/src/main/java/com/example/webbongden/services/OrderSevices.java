package com.example.webbongden.services;

import com.example.webbongden.dao.OrderDao;
import com.example.webbongden.dao.model.Order;

import java.util.List;

public class OrderSevices {
    public final OrderDao orderDao;

    public OrderSevices() {
        this.orderDao = new OrderDao();
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
}
