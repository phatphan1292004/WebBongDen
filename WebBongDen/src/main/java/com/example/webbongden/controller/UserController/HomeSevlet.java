package com.example.webbongden.controller.UserController;

import com.example.webbongden.dao.model.Product;
import com.example.webbongden.services.ProductServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.util.List;

@WebServlet(name = "HomeController", value = "/home")
public class HomeSevlet extends HttpServlet {
    private static final ProductServices productServices;

    static {
        productServices = new ProductServices();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Lấy danh sách sản phẩm theo danh mục trong db
        List<Product> denChumList = productServices.getProductsByCategory("ĐÈN CHÙM");
        List<Product> denThaList = productServices.getProductsByCategory("ĐÈN THẢ");
        List<Product> denBanList = productServices.getProductsByCategory("ĐÈN BÀN");
        List<Product> denOpTranList = productServices.getProductsByCategory("ĐÈN ỐP TRẦN");
        List<Product> denQuatList = productServices.getProductsByCategory("ĐÈN QUẠT");
        List<Product> denKhacList = productServices.getProductsByCategory("ĐÈN KHÁC");

        request.setAttribute("denChumList", denChumList);
        request.setAttribute("denThaList", denThaList);
        request.setAttribute("denBanList", denBanList);
        request.setAttribute("denOpTranList", denOpTranList);
        request.setAttribute("denQuatList", denQuatList);
        request.setAttribute("denKhacList", denKhacList);

        RequestDispatcher dispatcher = request.getRequestDispatcher("index.jsp");
        dispatcher.forward(request, response);

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}