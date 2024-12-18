package com.example.webbongden.services;

import com.example.webbongden.dao.CategoryDao;
import com.example.webbongden.dao.model.Category;
import com.example.webbongden.dao.model.SubCategory;

import java.util.List;

public class CategorySevices {
    public final CategoryDao categoryDao;

    public CategorySevices() {
        this.categoryDao = new CategoryDao();
    }

    public List<Category> getAllCategories() {
        return categoryDao.getAllCategories();
    }

    public List<SubCategory> getSubCategoriesByCategoryId(int categoryId) {
        return categoryDao.getSubCategoriesByCategoryId(categoryId);
    }

    public List<SubCategory> getAllSubCategories() {
        return categoryDao.getAllSubCategories();
    }
}
