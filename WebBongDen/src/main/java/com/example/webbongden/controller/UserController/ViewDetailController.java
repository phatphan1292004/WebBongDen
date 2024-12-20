package com.example.webbongden.controller.UserController;

import com.example.webbongden.dao.model.ProductDetail;
import com.example.webbongden.services.ProductServices;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@WebServlet(name = "ViewDetailController", value = "/home/product-detail")
public class ViewDetailController extends HttpServlet {
    private static final ProductServices productServices;

    static {
        productServices = new ProductServices();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            String productIdParam = request.getParameter("id");

            int productId = Integer.parseInt(productIdParam);

            ProductDetail productDetail = productServices.getProductDetailById(productId);

            if (productDetail == null) {
                response.sendRedirect("/home?error=product_not_found");
                return;
            }

            // Set product details in the request scope
            request.setAttribute("productDetail", productDetail);

            // Forward to the product detail JSP
            request.getRequestDispatcher("/user/product-detail.jsp").forward(request, response);

        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("/home?error=internal_error");
        }
    }
}
