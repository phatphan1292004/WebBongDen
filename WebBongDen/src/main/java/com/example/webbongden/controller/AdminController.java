package com.example.webbongden.controller;

import com.example.webbongden.dao.model.Product;
import com.example.webbongden.dao.model.ProductDetail;
import com.example.webbongden.dao.model.ProductImage;
import com.example.webbongden.services.ProductServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;
import org.codehaus.jackson.map.ObjectMapper;

import java.io.IOException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@WebServlet(name = "AdminController", urlPatterns = {"/admin"})
public class AdminController extends HttpServlet {
    private static final ProductServices productServices;

    static {
        productServices = new ProductServices();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String page = request.getParameter("page");
        System.out.println("Action nhận được 1: " + request.getParameter("action"));

        String action = request.getParameter("action");

        // Thiết lập giá trị mặc định nếu tham số không tồn tại
        if (page == null || page.isEmpty()) {
            page = "product-management"; // Mặc định đến trang quản lý sản phẩm
        }

        if (action == null) {
            action = ""; // Giá trị mặc định cho action
        }

        try {
            // Điều hướng dựa trên `page`
            switch (page) {
                case "product-management":
                    if (action.isEmpty()) {
                        // Nếu không có action, chỉ load trang quản lý sản phẩm
                        LoadProductPage(request, response);
                    } else if (action.equals("detail")) {
                        handleProducts(request, response, action);
                    }
                    break;

                default:
                    response.sendRedirect("error.jsp?message=" + URLEncoder.encode("Trang không hợp lệ", "UTF-8"));
            }
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("error.jsp?message=" + URLEncoder.encode("Lỗi xảy ra", "UTF-8"));
        }
    }

    // ===================== Tab Quản lý đơn hàng

    private void LoadProductPage(HttpServletRequest request, HttpServletResponse response) {
        try {
            int totalProducts = productServices.getTotalProducts();
            int cateQuantity = productServices.getCategoryQuantity();
            int newProducts = productServices.getNewProductsInLast7Days();
            int outOfStockProducts = productServices.getOutOfStockProducts();

            request.setAttribute("outOfStockProducts", outOfStockProducts);
            request.setAttribute("newProducts", newProducts);
            request.setAttribute("cateQuantity", cateQuantity);
            request.setAttribute("totalProducts", totalProducts);
            request.getRequestDispatcher("/admin/Admin.jsp").forward(request, response);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private void handleProducts(HttpServletRequest request, HttpServletResponse response, String action) throws ServletException, IOException {
        switch (action) {
            case "detail":
                showProductDetail(request, response);
                break;
            case "add-product":
                addProduct(request,response);
            default:
                response.sendRedirect("error.jsp?message=Hành động không hợp lệ trong Products");
        }
    }

    private void showProductDetail(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String page = request.getParameter("page");
        String idParam = request.getParameter("id");

        if (!"product-management".equals(page) || idParam == null) {
            response.sendRedirect("error.jsp?message=Thông tin không hợp lệ");
            return;
        }

        try {
            int id = Integer.parseInt(idParam);
            ProductDetail productDetail = productServices.getProductDetailById(id);
            if (productDetail == null) {
                response.sendRedirect("error.jsp?message=Sản phẩm không tồn tại");
            } else {
                request.setAttribute("productViewDetail", productDetail);
                request.getRequestDispatcher("/admin/Admin.jsp").forward(request, response);
            }
        } catch (NumberFormatException e) {
            response.sendRedirect("error.jsp?message=ID không hợp lệ");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Lấy tham số action từ request và loại bỏ khoảng trắng thừa
        System.out.println("Action nhận được 2: " + request.getParameter("action"));

        String action = request.getParameter("action");
        if (action != null) {
            System.out.println(" khoong null");
            action = action.trim(); // Xử lý khoảng trắng thừa
        }else {
            System.out.println("null");
        }

        // Kiểm tra action hợp lệ
        if ("add-product".equals(action)) {
            addProduct(request, response);
        } else {
            // Nếu không phải hành động hợp lệ, chuyển hướng tới trang lỗi
            String errorMessage = URLEncoder.encode("Hành động không hợp lệ", "UTF-8");
            response.sendRedirect("error.jsp?message=" + errorMessage);
        }
    }

    private void addProduct(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
        try {
            // 1. Lấy dữ liệu từ request
            String productName = request.getParameter("productName");
            String subCategoryName = request.getParameter("subCategoryName"); // Tên danh mục
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

            // 2. Tạo đối tượng ProductDetail
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
            product.setCreatedAt(new Date()); // Ngày tạo là hiện tại

            // 3. Lấy danh sách hình ảnh từ request
            List<Part> imageParts = request.getParts().stream()
                    .filter(part -> "images".equals(part.getName()) && part.getSize() > 0)
                    .toList();

            List<ProductImage> images = new ArrayList<>();
            for (Part part : imageParts) {
                String fileName = part.getSubmittedFileName();
                String uploadPath = getServletContext().getRealPath("/") + "uploads";
                part.write(uploadPath + "/" + fileName);

                ProductImage image = new ProductImage();
                image.setUrl("uploads/" + fileName);
                image.setMainImage(images.isEmpty()); // Ảnh đầu tiên là ảnh chính
                images.add(image);
            }
            product.setListImages(images);

            // 4. Gọi Service để thêm sản phẩm
            boolean isAdded = productServices.addProduct(product, subCategoryName);

            // 5. Xử lý phản hồi
            if (isAdded) {
                response.sendRedirect("/admin?page=product-management&message=" + URLEncoder.encode("Thêm sản phẩm thành công", "UTF-8"));
            } else {
                response.sendRedirect("error.jsp?message=" + URLEncoder.encode("Thêm sản phẩm thất bại", "UTF-8"));
            }
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
            response.sendRedirect("error.jsp?message=" + URLEncoder.encode("Lỗi: " + e.getMessage(), "UTF-8"));
        } catch (Exception e) {
            e.printStackTrace();
            response.sendRedirect("error.jsp?message=" + URLEncoder.encode("Lỗi trong quá trình thêm sản phẩm", "UTF-8"));
        }
    }
}
