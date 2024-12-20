package com.example.webbongden.services;

import com.example.webbongden.dao.CategoryDao;
import com.example.webbongden.dao.UserDao;
import com.example.webbongden.dao.model.User;

import java.util.List;

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
}
