package com.example.webbongden.controller.UserController;

import com.example.webbongden.dao.ProductDao;
import com.example.webbongden.dao.model.Product;
import com.example.webbongden.services.ProductServices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@WebServlet(name = "CategoryController", value = "/CategoryController")
public class CategoryController extends HttpServlet {
    private static final ProductServices productServices;

    static {
        productServices = new ProductServices();
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Lấy các tham số từ request
        String pageParam = request.getParameter("page");
        String sortBy = request.getParameter("select");
        String subCategoryIdParam = request.getParameter("subCategoryId"); // Lấy tham số subCategoryId

        int page = 1; // Trang mặc định là 1
        int pageSize = 8; // Số sản phẩm mỗi trang

        // Kiểm tra nếu tham số page có trong request
        if (pageParam != null) {
            try {
                page = Integer.parseInt(pageParam); // Chuyển đổi trang hiện tại từ tham số request
            } catch (NumberFormatException e) {
                page = 1; // Nếu tham số page không hợp lệ, mặc định trang = 1
            }
        }

        // Lọc sản phẩm theo danh mục nếu có subCategoryId
        List<Product> products;
        if (subCategoryIdParam != null) {
            int subCategoryId = Integer.parseInt(subCategoryIdParam);
            // Giả sử bạn đã có phương thức getProductsBySubCategory trong ProductServices để lấy sản phẩm theo danh mục
            products = productServices.getProductsBySubCategory(subCategoryId);
        } else {
            // Nếu không có tham số subCategoryId, lấy tất cả sản phẩm
            products = productServices.getAllProduct();
        }

        // Xử lý sắp xếp nếu có
        if (sortBy != null) {
            switch (sortBy) {
                case "price_desc":
                    products.sort(Comparator.comparingDouble(Product::getUnitPrice).reversed());
                    break;
                case "price_asc":
                    products.sort(Comparator.comparingDouble(Product::getUnitPrice));
                    break;
                // Có thể thêm các loại sắp xếp khác ở đây
            }
        }

        // Tính tổng số sản phẩm và tổng số trang
        int totalProducts = products.size();
        int totalPages = (int) Math.ceil((double) totalProducts / pageSize);

        // Phân trang: Cắt danh sách sản phẩm theo trang
        int fromIndex = (page - 1) * pageSize;
        int toIndex = Math.min(fromIndex + pageSize, totalProducts);
        List<Product> paginatedProducts = products.subList(fromIndex, toIndex);

        // Đặt các thuộc tính cho JSP
        request.setAttribute("products", paginatedProducts);
        request.setAttribute("totalPages", totalPages);
        request.setAttribute("currentPage", page);
        request.setAttribute("select", sortBy);
        request.setAttribute("subCategoryId", subCategoryIdParam); // Truyền lại subCategoryId cho JSP

        // Chuyển hướng đến JSP để hiển thị sản phẩm
        request.getRequestDispatcher("/user/category.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        // Để trống vì không xử lý POST trong trường hợp này
    }
}
