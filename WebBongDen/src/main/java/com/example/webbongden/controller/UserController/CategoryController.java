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
        String subCategoryIdParam = request.getParameter("subCategoryId");
        String sortBy = request.getParameter("select");

        List<Product> products;

        if (subCategoryIdParam != null) {
            // Lọc sản phẩm theo danh mục con
            int subCategoryId = Integer.parseInt(subCategoryIdParam);
            products = productServices.getProductsBySubCategory(subCategoryId);
        } else {
            // Nếu không lọc theo danh mục con, lấy tất cả sản phẩm
            products = productServices.getAllProduct();
        }
        // Xử lý sắp xếp sản phẩm nếu có tham số 'select'
        if (sortBy != null) {
            switch (sortBy) {
                case "price_desc":
                    // Sắp xếp theo giá từ cao đến thấp
                    products.sort(Comparator.comparingDouble(Product::getUnitPrice).reversed());
                    break;
                case "price_asc":
                    // Sắp xếp theo giá từ thấp đến cao
                    products.sort(Comparator.comparingDouble(Product::getUnitPrice));
                    break;
                case "newest":
                    // Sắp xếp theo sản phẩm mới nhất
                    products.sort(Comparator.comparing((Product p) -> p.getCreatedAt() == null ? new Date(0) : p.getCreatedAt()).reversed());
                    break;
                case "best_selling":
                    // Sắp xếp theo sản phẩm bán chạy nhất
                    products.sort(Comparator.comparingInt(Product::getSales).reversed());
                    break;
                default:
                    // Nếu tham số không hợp lệ, không sắp xếp
                    break;
            }
        }

        request.setAttribute("products", products);


        // Chuyển hướng đến JSP để hiển thị sản phẩm
        request.getRequestDispatcher("/user/category.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    }
}
