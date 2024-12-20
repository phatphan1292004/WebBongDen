package com.example.webbongden.controller.AdminController;

import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "AdminController", value = "/admin")
public class AdminController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String page = request.getParameter("page");

        // Điều hướng đến trang tương ứng
        if (page == null || page.equals("dashboard")) {
            request.getRequestDispatcher("/admin/dashboard.jsp").forward(request, response);
        } else if (page.equals("product-management")) {
            request.getRequestDispatcher("/admin/product-management.jsp").forward(request, response);
        } else if (page.equals("customer-management")) {
            request.getRequestDispatcher("/admin/customer-management.jsp").forward(request, response);
        } else if (page.equals("order-management")) {
            request.getRequestDispatcher("/admin/order-management.jsp").forward(request, response);
        } else if (page.equals("revenue-statistics")) {
            request.getRequestDispatcher("/admin/thongke.jsp").forward(request, response);
        } else if (page.equals("promotion")) {
            request.getRequestDispatcher("/admin/promotion-management.jsp").forward(request, response);
        } else if (page.equals("account")) {
            request.getRequestDispatcher("/admin/account-management.jsp").forward(request, response);
        } else {
            // Trang mặc định nếu `page` không khớp
            response.sendRedirect("admin?page=dashboard");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}
