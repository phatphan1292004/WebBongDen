package com.example.webbongden.dao;

import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Account;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class AccountDao {
    private final Jdbi jdbi;

    // Constructor truyền Jdbi
    public AccountDao() {
        this.jdbi = JDBIConnect.get();
    }

    public List<Account> getAllAccounts() {
        String sql = "SELECT id, username, email, role FROM accounts";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .map((rs, ctx) -> new Account(
                                rs.getInt("id"),
                                rs.getString("username"),
                                rs.getString("email"),
                                rs.getString("role")
                        ))
                        .list()
        );

    }


    public static void main(String[] args) {
        // Tạo đối tượng AccountDao
        AccountDao accountDao = new AccountDao();

        try {
            // Lấy danh sách tài khoản
            List<Account> accounts = accountDao.getAllAccounts();

            // In danh sách tài khoản ra màn hình
            System.out.println("Danh sách tài khoản:");
            accounts.forEach(account -> System.out.println(
                    "ID: " + account.getId() +
                            ", Username: " + account.getUsername() +
                            ", Email: " + account.getEmail() +
                            ", Role: " + account.getRole()
            ));
        } catch (Exception e) {
            System.err.println("Lỗi khi lấy danh sách tài khoản: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
