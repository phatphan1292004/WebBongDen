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

    public List<Order> getAllOrders() {
        return orderDao.getListOrders();
    }

    public List<Order> getOrdersByKeyWord(String value) {
        return orderDao.getOrdersByKeyword(value);
    }

    public boolean updateOrderStatus(int orderId, String status) {
        return orderDao.updateOrderStatus(orderId, status);
    }
}
