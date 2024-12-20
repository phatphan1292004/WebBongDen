package com.example.webbongden.controller.UserController;

import com.example.webbongden.dao.ProductDao;
import com.example.webbongden.dao.model.Product;
import com.example.webbongden.services.ProductServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.sql.SQLException;
import java.util.List;

@WebServlet(name = "CategoryController", value = "/CategoryController")
public class CategoryController extends HttpServlet {
    private static final ProductServices productServices;

    static {
        productServices = new ProductServices();
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String subCategoryIdParam = request.getParameter("subCategoryId");

        if (subCategoryIdParam != null) {
            System.out.println(subCategoryIdParam);
            int subCategoryId = Integer.parseInt(subCategoryIdParam);
            List<Product> products = productServices.getProductsBySubCategory(subCategoryId);
            request.setAttribute("products", products);
        }

        // Chuyển hướng đến JSP để hiển thị sản phẩm
        request.getRequestDispatcher("/user/category.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}
