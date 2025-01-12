package com.example.webbongden.controller.AdminController.ProductPage;

import com.example.webbongden.services.CategorySevices;
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;

@WebServlet(name = "CategoryController", urlPatterns = {"/categories/delete/*", "/subcategories/delete/*"})
public class CategoryController extends HttpServlet {
    private final CategorySevices categorySevices = new CategorySevices();

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String pathInfo = request.getRequestURI(); // Lấy toàn bộ URL để phân tích
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");

        try {
            if (pathInfo.contains("/categories/delete/")) {
                // Xóa danh mục cha
                String[] pathParts = pathInfo.split("/"); // Phân tách các phần của URL
                int categoryId = Integer.parseInt(pathParts[pathParts.length - 1]); // Lấy ID từ cuối URL
                System.out.println(categoryId);
                boolean isDeleted = categorySevices.deleteCategory(categoryId);
                if (isDeleted) {
                    response.setStatus(HttpServletResponse.SC_OK);
                    response.getWriter().write("{\"message\": \"Danh mục đã được xóa thành công\"}");
                } else {
                    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                    response.getWriter().write("{\"message\": \"Không thể xóa danh mục vì có danh mục con\"}");
                }
            } else if (pathInfo.contains("/subcategories/delete/")) {
                // Xóa danh mục con
                String[] pathParts = pathInfo.split("/");
                int subCategoryId = Integer.parseInt(pathParts[pathParts.length - 1]);
                boolean isDeleted = categorySevices.deleteSubCategory(subCategoryId);

                if (isDeleted) {
                    response.setStatus(HttpServletResponse.SC_OK);
                    response.getWriter().write("{\"message\": \"Danh mục con đã được xóa thành công\"}");
                } else {
                    response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                    response.getWriter().write("{\"message\": \"Không thể xóa danh mục con\"}");
                }
            } else {
                response.setStatus(HttpServletResponse.SC_NOT_FOUND);
                response.getWriter().write("{\"message\": \"Endpoint không tồn tại\"}");
            }
        } catch (Exception e) {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            response.getWriter().write("{\"message\": \"Đã xảy ra lỗi: " + e.getMessage() + "\"}");
        }
    }
}
