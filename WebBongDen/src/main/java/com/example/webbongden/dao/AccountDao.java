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

    // Lây tat ca tai khoan kh
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

    // Lấy ds account dựa vào username
    public List<Account> getAccountByUserName(String username) {
        String sql = "SELECT id, username, email, role FROM accounts WHERE username LIKE CONCAT('%', :username, '%')";

        return jdbi.withHandle(handle ->
                handle.createQuery(sql)
                        .bind("username", username) // Gán giá trị cho tham số :username
                        .map((rs, ctx) -> new Account(
                                rs.getInt("id"),
                                rs.getString("username"),
                                rs.getString("email"),
                                rs.getString("role")
                        ))
                        .list()
        );
    }

    public boolean addAccount(Account account) {
        return jdbi.inTransaction(handle -> {
            // Kiểm tra xem username đã tồn tại trong bảng accounts hay chưa
            String checkUsernameSql = "SELECT COUNT(*) FROM accounts WHERE username = :username";
            Integer count = handle.createQuery(checkUsernameSql)
                    .bind("username", account.getUsername())
                    .mapTo(Integer.class)
                    .one();

            // Nếu username đã tồn tại, không cho phép thêm tài khoản
            if (count > 0) {
                System.out.println("Username đã tồn tại. Không thể thêm tài khoản mới.");
                return false; // Trả về false nếu username đã tồn tại
            }

            // Kiểm tra khách hàng đã tồn tại trong bảng customers hay chưa
            String findCustomerSql = "SELECT id FROM customers WHERE cus_name = :cusName";
            Integer customerId = handle.createQuery(findCustomerSql)
                    .bind("cusName", account.getCusName())
                    .mapTo(Integer.class)
                    .findOne()
                    .orElse(null);

            // Nếu khách hàng chưa tồn tại, thêm mới
            if (customerId == null) {
                String addCustomerSql = "INSERT INTO customers (cus_name) VALUES (:cusName)";
                customerId = handle.createUpdate(addCustomerSql)
                        .bind("cusName", account.getCusName())
                        .executeAndReturnGeneratedKeys("id")
                        .mapTo(Integer.class)
                        .findOne()
                        .orElse(null);

                // Nếu không thể tạo khách hàng, ném ngoại lệ
                if (customerId == null) {
                    throw new IllegalStateException("Không thể thêm khách hàng mới.");
                }
            }

            // Thêm tài khoản với customer_id
            String sql = "INSERT INTO accounts (username, email, password, role, customer_id, cus_name, created_at) " +
                    "VALUES (:username, :email, :password, :role, :customerId, :cusName, NOW())";

            int rowsAffected = handle.createUpdate(sql)
                    .bind("username", account.getUsername())    // Gán giá trị username
                    .bind("email", account.getEmail())          // Gán giá trị email
                    .bind("password", account.getPassword())    // Gán giá trị password (hash trước nếu cần)
                    .bind("role", account.getRole())            // Gán giá trị role
                    .bind("customerId", customerId)             // Gán giá trị customer_id (sử dụng từ bảng customers)
                    .bind("cusName", account.getCusName())      // Gán giá trị cus_name
                    .execute();

            return rowsAffected > 0; // Trả về true nếu thêm tài khoản thành công
        });
    }

    public boolean deleteAccountById(int accountId) {
        String sql = "DELETE FROM accounts WHERE id = :accountId";

        return jdbi.withHandle(handle ->
                handle.createUpdate(sql)
                        .bind("accountId", accountId) // Gán giá trị accountId
                        .execute() > 0 // Trả về true nếu có dòng bị xóa
        );
    }


    public static void main(String[] args) {
        AccountDao accountDao = new AccountDao();

        // Tạo một tài khoản mới để kiểm tra
        Account newAccount = new Account(
                "pvp1292004@example.com",  // Email
                "Phan Văn Phát",             // Tên khách hàng (cus_name)
                "pvp1292004",              // Tên đăng nhập (username)
                "hashedPassword123",    // Mật khẩu đã hash
                "admin",                // Vai trò (role)
                0                       // customer_id sẽ được xử lý tự động
        );

        // Gọi phương thức addAccount
        try {
            boolean result = accountDao.addAccount(newAccount);

            // In kết quả
            if (result) {
                System.out.println("Thêm tài khoản thành công!");
            } else {
                System.out.println("Thêm tài khoản thất bại.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Đã xảy ra lỗi khi thêm tài khoản: " + e.getMessage());
        }
    }
}
