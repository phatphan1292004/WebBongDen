package com.example.webbongden.controller.AdminController.ProductPage;

import com.example.webbongden.services.ProductServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "AdminController", value = {"/product-management"})
public class ProductAdminController extends HttpServlet {
    private static final ProductServices productServices;

    static {
        productServices = new ProductServices();
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            int totalProducts = productServices.getTotalProducts();
            int cateQuantity = productServices.getCategoryQuantity();
            int newProducts = productServices.getNewProductsInLast7Days();
            int outOfStockProducts = productServices.getOutOfStockProducts();

            request.setAttribute("outOfStockProducts", outOfStockProducts);
            request.setAttribute("newProducts", newProducts);
            request.setAttribute("cateQuantity", cateQuantity);
            request.setAttribute("totalProducts", totalProducts);
            request.getRequestDispatcher("admin/product-management.jsp").forward(request, response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
