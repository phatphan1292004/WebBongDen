package com.example.webbongden.services;

import com.example.webbongden.dao.CategoryDao;
import com.example.webbongden.dao.UserDao;
import com.example.webbongden.dao.model.Order;
import com.example.webbongden.dao.model.User;

import java.util.List;
import java.util.Map;

public class UserSevices {
    public final UserDao userDao;

    public UserSevices() {
        this.userDao = new UserDao();
    }

    public List<User> getAllUsers() {
        return userDao.getCustomerAccountInfo();
    }

    public List<User> searchCustomerByName(String name) {
        return userDao.searchCustomerByName(name);
    }

    public int getTotalUser() {
        return userDao.getTotalCustomers();
    }

    public List<Order> getPurchaseHistoryByCustomerId2(int customerId) {
        return userDao.getPurchaseHistoryByCustomerId2(customerId);
    }

    public Map<String, Integer> getCustomerTypes() {
        // Gọi phương thức từ DAO để lấy dữ liệu
        return userDao.getCustomerTypes();
    }
}
