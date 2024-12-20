package com.example.webbongden.dao.model;

public class ProductImage {
    private String url;
    private boolean mainImage;

    public ProductImage(String url, boolean mainImage) {
        this.url = url;
        this.mainImage = mainImage;
    }

    // Getter và Setter
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public boolean isMainImage() {
        return mainImage;
    }

    public void setMainImage(boolean mainImage) {
        this.mainImage = mainImage;
    }
    @Override
    public String toString() {
        return "ProductImage{" +
                "url='" + url + '\'' +
                ", mainImage=" + mainImage +
                '}';
    }

}
