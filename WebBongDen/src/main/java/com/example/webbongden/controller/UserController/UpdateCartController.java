package com.example.webbongden.controller.UserController;

import com.example.webbongden.dao.model.Cart;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "UpdateCartController", value = "/update-cart")
public class UpdateCartController extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();
        Cart cart = (Cart) session.getAttribute("cart");

        // Lấy productId và quantity từ request
        String productIdParam = request.getParameter("productId");
        String quantityParam = request.getParameter("quantity");

        if (productIdParam == null || quantityParam == null) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Product ID or quantity is missing");
            return;
        }

        int productId = Integer.parseInt(productIdParam);
        int quantity = Integer.parseInt(quantityParam);

        if (cart != null) {
            cart.updateQuantity(productId, quantity); // Gọi phương thức cập nhật số lượng
        }

        // Chuyển hướng về trang giỏ hàng
        response.sendRedirect("/WebBongDen_war/cart");
    }
}
