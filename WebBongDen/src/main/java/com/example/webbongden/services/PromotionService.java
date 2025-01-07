package com.example.webbongden.services;

import com.example.webbongden.dao.ProductDao;
import com.example.webbongden.dao.PromotionDao;
import com.example.webbongden.dao.model.Promotion;

public class PromotionService {
    public final PromotionDao promotionDao;

    public PromotionService() {
        // Tự khởi tạo ProductDao
        this.promotionDao = new PromotionDao();
    }

    public Promotion getPromotionById(int id) {
        return promotionDao.getPromotionByProductId(id);
    }

    public boolean addPromotion(Promotion promotion) {
        return promotionDao.addPromotion(promotion);
    }
}
