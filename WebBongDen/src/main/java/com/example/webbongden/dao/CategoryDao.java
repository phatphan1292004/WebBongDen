package com.example.webbongden.dao;
import com.example.webbongden.dao.db.JDBIConnect;
import com.example.webbongden.dao.model.Category;
import com.example.webbongden.dao.model.SubCategory;
import org.jdbi.v3.core.Jdbi;

import java.util.List;

public class CategoryDao {
    private final Jdbi jdbi;

    // Constructor truyền Jdbi
    public CategoryDao() {
        this.jdbi = JDBIConnect.get();
    }

    // Lấy danh sách tất cả categories
    public List<Category> getAllCategories() {
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT id, category_name, stock_quantity, DESC_1 FROM categories")
                        .mapToBean(Category.class)
                        .list()
        );
    }

    // Lấy tất cả subcategories theo category_id
    public List<SubCategory> getSubCategoriesByCategoryId(int categoryId) {
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM sub_categories WHERE category_id = :categoryId")
                        .bind("categoryId", categoryId)
                        .mapToBean(SubCategory.class)
                        .list()
        );
    }

    public List<SubCategory> getAllSubCategories() {
        return jdbi.withHandle(handle ->
                handle.createQuery("SELECT * FROM sub_categories")
                        .mapToBean(SubCategory.class)
                        .list()
        );
    }



    public static void main(String[] args) {
        // Khởi tạo CategoryDao
        CategoryDao categoryDao = new CategoryDao();

        // 1. Test lấy tất cả categories
        System.out.println("===== Lấy danh sách Categories =====");
        List<Category> categories = categoryDao.getAllCategories();
        for (Category category : categories) {
            System.out.println(category);
        }

        // 2. Test lấy tất cả subcategories theo category_id
        System.out.println("\n===== Lấy danh sách SubCategories cho Category ID = 1 =====");
        int testCategoryId = 1;
        List<SubCategory> subCategories = categoryDao.getSubCategoriesByCategoryId(testCategoryId);
        for (SubCategory subCategory : subCategories) {
            System.out.println(subCategory);
        }
    }
}