package com.example.webbongden.services;

import com.example.webbongden.dao.OrderDao;

public class OrderSevices {
    public final OrderDao orderDao;

    public OrderSevices() {
        this.orderDao = new OrderDao();
    }

    public int getTotalOrders() {
        return orderDao.totalOrderInLastedMonth();
    }
}
