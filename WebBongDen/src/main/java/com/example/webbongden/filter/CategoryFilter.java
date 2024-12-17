package com.example.webbongden.filter;

import com.example.webbongden.dao.model.Category;
import com.example.webbongden.dao.model.SubCategory;
import com.example.webbongden.services.CategorySevices;
import jakarta.servlet.*;
import jakarta.servlet.annotation.*;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@WebFilter("/*")
public class CategoryFilter implements Filter {
    private final CategorySevices categoryServices = new CategorySevices();

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
        // Kiểm tra xem request đã có categories và subCategoriesMap chưa
        if (request.getAttribute("categories") == null) {
            // Lấy danh sách categories
            List<Category> categories = categoryServices.getAllCategories();

            // Lấy subcategories cho từng category
            Map<Integer, List<SubCategory>> subCategoriesMap = new HashMap<>();
            for (Category category : categories) {
                List<SubCategory> subCategories = categoryServices.getSubCategoriesByCategoryId(category.getId());
                subCategoriesMap.put(category.getId(), subCategories);
            }

            // Đặt dữ liệu vào request scope
            request.setAttribute("categories", categories);
            request.setAttribute("subCategoriesMap", subCategoriesMap);
        }

        // Chuyển request sang Servlet hoặc JSP tiếp theo
        chain.doFilter(request, response);
    }
}