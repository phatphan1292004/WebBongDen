package com.example.webbongden.controller.UserController;

import com.example.webbongden.dao.model.Account;
import com.example.webbongden.services.AccountServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "LoginControllerr", value = "/login")
public class LoginControllerr extends HttpServlet {
    private final AccountServices  accountService = new AccountServices();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.getRequestDispatcher("/user/login.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Xác thực tài khoản
        Account account = accountService.authenticate(username, password);

        if (account != null) {
            // Lưu thông tin tài khoản vào session
            HttpSession session = request.getSession();
            session.setAttribute("account", account);
            session.setAttribute("username", account.getUsername());
            session.setAttribute("role", account.getRole());

            // Phân quyền và chuyển hướng
            if ("admin".equals(account.getRole())) {
                response.sendRedirect("admin"); // Chuyển đến trang admin
            } else {
                response.sendRedirect("home"); // Chuyển đến trang user
            }
        } else {
            // Trả về lỗi nếu đăng nhập thất bại
            request.setAttribute("errorMessage", "Tên đăng nhập hoặc mật khẩu không chính xác.");
            request.getRequestDispatcher("/user/login.jsp").forward(request, response);
        }
    }
}
