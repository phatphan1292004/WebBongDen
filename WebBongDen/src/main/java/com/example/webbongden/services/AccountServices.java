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

    public List<Account> getAccountByUserName(String name) {
        return accountDao.getAccountByUserName(name);
    }

    public boolean addAccount(Account account) {
        return accountDao.addAccount(account);
    }

    public boolean deleteAccountById(int accountId) {
        return accountDao.deleteAccountById(accountId);
    }
}
