package com.example.webbongden.controller.UserController;

import com.example.webbongden.dao.model.Cart;
import com.example.webbongden.dao.model.CartItem;
import com.example.webbongden.dao.model.Product;
import com.example.webbongden.services.ProductServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "AddToCartController", value = "/add-to-cart")
public class AddToCartController extends HttpServlet {
    private static final ProductServices productService;

    static {
        productService = new ProductServices();
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        HttpSession session = request.getSession();

        // Lấy giỏ hàng từ session
        Cart cart = (Cart) session.getAttribute("cart");
        if (cart == null) {
            cart = new Cart();
            session.setAttribute("cart", cart);
        }

        // Lấy productId từ request
        String productIdParam = request.getParameter("productId");
        if (productIdParam == null || productIdParam.isEmpty()) {
            response.sendError(HttpServletResponse.SC_BAD_REQUEST, "Product ID is missing");
            return;
        }

        int productId = Integer.parseInt(productIdParam);

        // Lấy thông tin sản phẩm từ ProductService
        Product product = productService.getProductById(productId);

        if (product != null) {
            // Thêm sản phẩm vào giỏ hàng
            CartItem item = new CartItem(product.getId(), product.getProductName(), 1, product.getUnitPrice(),product.getDiscountedPrice(), product.getImageUrl());
            cart.addItem(item);
        }

        response.setStatus(HttpServletResponse.SC_OK);
    }
}
