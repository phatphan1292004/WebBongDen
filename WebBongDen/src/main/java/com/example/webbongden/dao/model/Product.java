package com.example.webbongden.dao.model;

import java.util.List;

public class Product {
    private int id;
    private String productName;
    private double unitPrice;
    private double discountPercent;
    private List<ProductImage> listImg;

    public Product(int id, String productName, double unitPrice, double discountPercent, List<ProductImage> listImg) {
        this.id = id;
        this.productName = productName;
        this.unitPrice = unitPrice;
        this.discountPercent = discountPercent;
        this.listImg = listImg;
    }

    // Getter và Setter
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public double getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(double unitPrice) {
        this.unitPrice = unitPrice;
    }

    public double getDiscountPercent() {
        return discountPercent;
    }

    public void setDiscountPercent(double discountPercent) {
        this.discountPercent = discountPercent;
    }

    public List<ProductImage> getListImg() {
        return listImg;
    }

    public void setListImg(List<ProductImage> listImg) {
        this.listImg = listImg;
    }
    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", productName='" + productName + '\'' +
                ", unitPrice=" + unitPrice +
                ", discountPercent=" + discountPercent +
                ", listImg=" + listImg +
                '}';
    }

}
