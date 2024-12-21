package com.example.webbongden.services;

import com.example.webbongden.dao.AccountDao;
import com.example.webbongden.dao.model.Account;
import java.util.List;

public class AccountServices {
    public final AccountDao accountDao;

    public AccountServices() {
        this.accountDao = new AccountDao();
    }


    public List<Account> getAllAccounts() {
        return accountDao.getAllAccounts();
    }
}
