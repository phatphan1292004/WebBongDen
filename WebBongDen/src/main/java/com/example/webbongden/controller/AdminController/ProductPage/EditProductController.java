package com.example.webbongden.controller.AdminController.ProductPage;

import com.example.webbongden.dao.model.ProductDetail;
import com.example.webbongden.services.ProductServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "EditProductController", value ="/edit-product-detail")
public class EditProductController extends HttpServlet {
    private static final ProductServices productServices;

    static {
        productServices = new ProductServices();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        try {
            // Lấy các tham số từ form
            int id = Integer.parseInt(request.getParameter("id"));
            String productName = request.getParameter("productName");
            double unitPrice = Double.parseDouble(request.getParameter("unitPrice"));
            int stockQuantity = Integer.parseInt(request.getParameter("stockQuantity"));
            String productStatus = request.getParameter("productStatus");
            double rating = Double.parseDouble(request.getParameter("rating"));
            String description = request.getParameter("description");
            String warrantyPeriod = request.getParameter("warrantyPeriod");
            String lightColor = request.getParameter("lightColor");
            String material = request.getParameter("material");
            String voltage = request.getParameter("voltage");
            String usageAge = request.getParameter("usageAge");
            double discountPercent = Double.parseDouble(request.getParameter("discountPercent"));
            String mainImageUrl = request.getParameter("mainImageUrl");
            System.out.println(mainImageUrl);
            int subCategoryId = Integer.parseInt(request.getParameter("subCategoryId"));

            // Tạo đối tượng ProductDetail từ dữ liệu form
            ProductDetail productDetail = new ProductDetail();
            productDetail.setId(id);
            productDetail.setProductName(productName);
            productDetail.setUnitPrice(unitPrice);
            productDetail.setStockQuantity(stockQuantity);
            productDetail.setProductStatus(productStatus);
            productDetail.setRating(rating);
            productDetail.setDescription(description);
            productDetail.setWarrantyPeriod(warrantyPeriod);
            productDetail.setLightColor(lightColor);
            productDetail.setMaterial(material);
            productDetail.setVoltage(voltage);
            productDetail.setUsageAge(usageAge);
            productDetail.setDiscountPercent(discountPercent);
            productDetail.setMainImageUrl(mainImageUrl);
            productDetail.setSubCategoryId(subCategoryId);

            // Cập nhật sản phẩm trong cơ sở dữ liệu
            boolean isUpdated = productServices.editProductDetail(productDetail);

            if (isUpdated) {
                response.sendRedirect("admin?page=product-management&success=Product updated successfully!");
            } else {
                response.sendRedirect("admin?page=product-management&error=Failed to update product!");
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("admin?page=product-management&error=Error occurred while updating product!");
        }
    }
}
