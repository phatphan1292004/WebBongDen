package com.example.webbongden.controller.AdminController.ProductPage;

import com.example.webbongden.dao.model.ProductDetail;
import com.example.webbongden.dao.model.ProductImage;
import com.example.webbongden.services.ProductServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.net.JarURLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@WebServlet(name = "AdminAddProductController", value = "/add-product")
public class AddProductController extends HttpServlet {
    private final ProductServices productServices = new ProductServices();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Chuyển hướng đến form thêm sản phẩm
        request.getRequestDispatcher("admin/product-management.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String productName = request.getParameter("productName");
        String subCategoryName = request.getParameter("categoryName");
        double unitPrice = Double.parseDouble(request.getParameter("unitPrice"));
        int stockQuantity = Integer.parseInt(request.getParameter("stockQuantity"));
        String productStatus = request.getParameter("productStatus");
        String description = request.getParameter("description");
        String warrantyPeriod = request.getParameter("warrantyPeriod");
        String lightColor = request.getParameter("lightColor");
        String material = request.getParameter("material");
        String voltage = request.getParameter("voltage");
        String usageAge = request.getParameter("usageAge");
        double discountPercent = Double.parseDouble(request.getParameter("discountPercent"));
        String imageUrls = request.getParameter("imageUrl");

        ProductDetail product = new ProductDetail();
        product.setProductName(productName);
        product.setUnitPrice(unitPrice);
        product.setStockQuantity(stockQuantity);
        product.setProductStatus(productStatus);
        product.setDescription(description);
        product.setWarrantyPeriod(warrantyPeriod);
        product.setLightColor(lightColor);
        product.setMaterial(material);
        product.setVoltage(voltage);
        product.setUsageAge(usageAge);
        product.setDiscountPercent(discountPercent);
        product.setCreatedAt(new Date());

        List<ProductImage> images = new ArrayList<>();
        if (imageUrls != null && !imageUrls.trim().isEmpty()) {
            String[] urlArray = imageUrls.split(",");
            for (int i = 0; i < urlArray.length; i++) {
                ProductImage image = new ProductImage();
                image.setUrl(urlArray[i].trim());
                image.setMainImage(i == 0); // Ảnh đầu tiên là ảnh chính
                images.add(image);
            }
        }
        product.setListImages(images);

        // Gọi service để thêm sản phẩm
        boolean isAdded = productServices.addProduct(product, subCategoryName);

        // Xử lý phản hồi
        if (isAdded) {
            response.sendRedirect("admin/product-management.jsp?message=" + URLEncoder.encode("Thêm sản phẩm thành công!", "UTF-8"));
        } else {
            response.sendRedirect("admin-product-management.jsp?error=" + URLEncoder.encode("Thêm sản phẩm thất bại!", "UTF-8"));
        }
    }
}

