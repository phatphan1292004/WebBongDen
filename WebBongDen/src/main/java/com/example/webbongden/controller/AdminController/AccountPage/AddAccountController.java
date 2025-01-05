package com.example.webbongden.controller.AdminController.AccountPage;

import com.example.webbongden.dao.model.Account;
import com.example.webbongden.services.AccountServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "AddAccountController", value = "/add-account")
public class AddAccountController extends HttpServlet {
    private static final AccountServices accountSevices;

    static {
        accountSevices = new AccountServices();
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Lấy dữ liệu từ form
        String username = request.getParameter("username");
        String email = request.getParameter("email");
        String password = request.getParameter("password");
        String role = request.getParameter("role");
        String cusName = request.getParameter("cusName");

        // Tạo đối tượng Account
        Account account = new Account(
                email,
                cusName,
                username,
                password,
                role,
                0
        );

        // Gọi phương thức addAccount
        boolean success = false;
        String message = "";
        String status = "error"; // Trạng thái mặc định là lỗi
        try {
            success = accountSevices.addAccount(account);
            if (success) {
                status = "success";
                message = "Thêm tài khoản thành công!";
            } else {
                message = "Username đã tồn tại. Không thể thêm tài khoản.";
            }
        } catch (Exception e) {
            e.printStackTrace();
            message = "Đã xảy ra lỗi trong quá trình thêm tài khoản: " + e.getMessage();
        }

        // Gửi thông báo về phía client
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write("{\"success\": " + success + ", \"message\": \"" + message + "\"}");
    }
}
